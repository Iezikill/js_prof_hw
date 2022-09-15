const products = [
    { id: 1, title: 'Notebook', price: 2000 },
    { id: 2, title: 'Mouse', price: 20 },
    { id: 3, title: 'Keyboard', price: 200 },
    { id: 4, title: 'Gamepad', price: 50 },
];

/**
 * Функция для формирования верстки каждого товара
 * @param {*} product объект, содержащий id, наименование и цену товара
 * @returns возвращает html код формирующий каждый товар
 */
const renderProduct = (product) => {
    return `<div class="product-item">
                <img src="img/test_pic.jpg" alt="test_picture">
                <h3>${product.title}</h3>
                <p>${product.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};

const productsEl = document.querySelector('.products');

/**
 * Функция для формирования страницы с товарами
 * @param {*} list объект, содержащий id, наименование и цену товара
 */
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item)).join('');
    productsEl.innerHTML = productsList;
};

renderPage(products);