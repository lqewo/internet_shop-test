const btn = document.getElementById("btn__add");
const name_product = document.getElementById('input-product__name');
const img_product = document.getElementById('input-product__link-img');
const price_product = document.getElementById('input-product__price');

const check = () => btn.disabled =
name_product.value.length < 3  || img_product.value.length < 3 || price_product.value < 3;

name_product.addEventListener('input', check);
img_product.addEventListener('input', check);
price_product.addEventListener('input', check);

check();