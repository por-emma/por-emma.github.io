const open = document.getElementById("search");
const close = document.getElementById("close");
const container = document.getElementById("container");

open.addEventListener("click", () => {
    container.classList.add("active")
})
close.addEventListener("click", () => {
    container.classList.remove("active")
})

const hambuger = document.getElementById("menu");
const close1 = document.getElementById("close1");
const container1 = document.getElementById("container1");
hambuger.addEventListener("click", () => {
    container1.classList.add("active")
})
close1.addEventListener("click", () => {
    container1.classList.remove("active")
})

var products = document.querySelectorAll("a.pd")


products.forEach(function(product) {
    var image = product.querySelector("img");
    var src = image.src;
    var product_name = product.querySelector(".name");
    var name = product_name.textContent;
    var product_price = product.querySelector(".price");
    var price = product_price.textContent;
    var link = "../html/check-out.html?imageSource=" + src + "&product_name=" + name + "&product_price=" + price;
    product.href = link;
});