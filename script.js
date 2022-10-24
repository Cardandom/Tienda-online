const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.burgerMenu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector ('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector ('.product-detail-close');
const shoppingCartContainer = document.querySelector ('#shoppingCartContainer');
const productDetailContainer = document.querySelector ('#productDetail');
const cardContainer = document.querySelector ('.cards-container');


navEmail.addEventListener ('click',toggleDesktopMenu);
burgerMenu.addEventListener ('click',toggleMobileMenu);
menuCarritoIcon.addEventListener ('click',toggleCarritoAside);
productDetailCloseIcon.addEventListener ('click',closeProductDetailAside);

/**/

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive'); 
    }

    closeProductDetailAside();
    
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    
    if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive');
    }
    
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

/* 
function toggleDesktopMenu () {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')
    if(!isAsideClosed) {
        shoppingCartContainer.classList.add ('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu () {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')
    if(!isAsideClosed) {
        shoppingCartContainer.classList.add ('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleCarritoAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isNavEmailClosed = navEmail.classList.contains('inactive')

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    else if (!isNavEmailClosed) {
        desktopMenu.classList.add('inactive');
    }
    const isProductDetailClose = productDetailContainer.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside () {
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside () {
    productDetailContainer.classList.add('inactive');
}
*/
const productList = [];
productList.push ({
    name: 'Bike',
    price : 120,
    image: 'https://images.pexels.com/photos/1431117/pexels-photo-1431117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push ({
    name: 'Clasic Bike',
    price : 100,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600',
})
productList.push ({
    name: 'Road Bike',
    price : 130,
    image: 'https://images.pexels.com/photos/38296/cycling-bicycle-riding-sport-38296.jpeg?auto=compress&cs=tinysrgb&w=600',
})
productList.push ({
    name: 'Mountain Bike',
    price : 140,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600',
})
productList.push ({
    name: 'Personalized Bike',
    price : 150,
    image: 'https://images.pexels.com/photos/255934/pexels-photo-255934.jpeg?auto=compress&cs=tinysrgb&w=600',
})
productList.push ({
    name: 'Little Girls Bike',
    price : 80,
    image: 'https://images.pexels.com/photos/680108/pexels-photo-680108.jpeg?auto=compress&cs=tinysrgb&w=600',
})

function renderProducts (arr) {
for (product of arr) {
    const productCard = document.createElement ('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement ('img');
    productImg.setAttribute('src',product.image);
    productImg.addEventListener('click', openProductDetailAside);

    const productInfo = document.createElement ('div');
    productInfo.classList.add('product-info');

    const productDiv = document.createElement ('div');
    
    const productPrice = document.createElement ('p');
    productPrice.innerText = '$'+ product.price;

    const productName = document.createElement ('p');
    productName.innerText = product.name;

    productDiv.appendChild(productPrice);
    productDiv.appendChild(productName);

    const productFigure = document.createElement ('figure');
    const productImgCard = document.createElement ('img');
    productImgCard.setAttribute('src','./icons/bt_add_to_cart.svg');

    productFigure.appendChild(productImgCard);

    productInfo.appendChild(productDiv);
    productInfo.appendChild(productFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardContainer.appendChild(productCard);
}
}
renderProducts (productList);