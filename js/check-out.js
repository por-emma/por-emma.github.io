var urlParams = new URLSearchParams(window.location.search)

var source = urlParams.get('imageSource')
var name = urlParams.get('product_name')
var price = urlParams.get('product_price')

document.getElementById('pd-img').src = source;
document.getElementById('pd-name').innerHTML = name;
document.getElementById('pd-price').innerHTML = price;
document.getElementById('subtotal').innerHTML = price;
document.getElementById('total').innerHTML = price;