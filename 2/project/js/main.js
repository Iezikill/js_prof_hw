class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе
        this.render();//вывод товаров на страницу
    }
    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Mouse', price: 20 },
            { id: 3, title: 'Keyboard', price: 200 },
            { id: 4, title: 'Gamepad', price: 50 },
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }

    /**
     * Складывает стоимость всех имеющихся товаров
     */
    getSumOfGoods() {
        let sum = 0;
        this.goods.forEach(good => sum += good.price);
        console.log(`Общая стоимость всех представленных товаров: ${sum}`);
    }
}

class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render() {
        return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();
list.getSumOfGoods();

class Basket {
    constructor(totalPrice, totalCount) {

    }

    /**
     * Вывод списка товаров в корзине
     */
    render() {

    }

    /**
     * Получение общей стоимости всех добавленных товаров
     */
    getTotalPrice() {

    }

    /**
     * Получение общего количества всех добавленных товаров
     */
    getTotalCount() {

    }

    /**
     * Добавление товара в корзину
     */
    addGodd() {

    }

    /**
     * Удаление товара из корзины
     */
    deleteGood() {

    }

}

class BasketElement {
    constructor(name, count, pricePerOne) {
        this.name = name;
        this.count = count;
        this.pricePerOne = pricePerOne;
    }

    /**
     * Вывод товара в корзине
     */
    render() {

    }

    /**
     * Получение общей стоимости добавленных товаров одного вида:
     * (count * pricePerOne)
     */
    getPricePerAll() {

    }
}

//const products = [
//    {id: 1, title: 'Notebook', price: 2000},
//    {id: 2, title: 'Mouse', price: 20},
//    {id: 3, title: 'Keyboard', price: 200},
//    {id: 4, title: 'Gamepad', price: 50},
//];
//
//const renderProduct = (product,img='https://placehold.it/200x150') => {
//    return `<div class="product-item">
//                <img src="${img}">
//                <h3>${product.title}</h3>
//                <p>${product.price}</p>
//                <button class="buy-btn">Купить</button>
//            </div>`
//};
//const renderPage = list => document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
//
//renderPage(products);