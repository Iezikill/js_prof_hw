'use strict'
const priceEl = document.querySelector('.price span');
const caloriesEl = document.querySelector('.calories span');
document.querySelector('.order_button').addEventListener('load', event => {
  event.preventDefault();
  let burger = new Burger('size', 'stuffing', 'toppings');
  // console.log(burger);
  burger.showSum("priceEl", "caloriesEl");
});

class Param {
  constructor(element) {
    this.name = element.value;
    this.price = +element.dataset.price;
    this.calories = +element.dataset.calories;
  }
}

class Burger {
  constructor(size, stuffing, topping) {
    this.size = new Param(this._select(size));
    this.stuffing = new Param(this._select(stuffing));
    this.toppings = this._getToppings(topping);
  }

  /**
   * Получить список добавок
   * @param {*} name название дополнительных ингридиентов 
   */
  getToppings(name) {
    let result = [];
    this._selectAll(name).forEach(el => {
      let obj = new Param(el);
      result.push(obj);
    });
    return result;
  }

  /**
   * Определяет выбранный элемент инпута
   * @param {*} name 
   * @returns 
   */
  _select(name) {
    return document.querySelector(`input[name=${name}]:checked`);
  }

  /**
   * Определяет, где стоят галочки у чекбокса
   * @param {*} name 
   * @returns 
   */
  _selectAll(name) {
    return [...document.querySelectorAll(`input[name=${name}]:checked`)];
  }

  /**
  * Узнать цену
  */
  _calculatePrice() {
    let result = this.size.price + this.stuffing.price;
    this.toppings.forEach(el => result += el.price);
    return result;
  }

  /**
  * Узнать калорийность
  */
  _calculateCalories() {
    let result = this.size.calories + this.stuffing.calories;
    this.toppings.forEach(el => result += el.calories);
    return result;
  }

  /**
   * 
   * @param {*} price 
   * @param {*} calories 
   */
  showSum(price, calories) {
    document.querySelector('.price').textContent = this._calculatePrice();
    document.querySelector('.calories').textContent = this._calculateCalories();
  }
}