// an array with all of our cart items
var cart = [];
var total = 0;

var updateCart = function () {
  // TODO: finis
  // var source = $('#cart-template').html();
  // var template = Handlebars.compile(source);
  $('.total').empty();
  total=0;
  for(var  i = 0; i < cart.length; i++){
    total += cart[i].price;
    } 
  $('.total').append(total);

  
  $('.cart-list').empty();

  var source = $('#cart-template').html();
  var template = Handlebars.compile(source);

  for(var i = 0; i < cart.length; i++){

    var newHTML = template(cart[i]);
    $('.cart-list').append(newHTML);
  }
}

var addItem = function (item) {
  // TODO: finish
  cart.push(item);
}

var clearCart = function () {
  // TODO: finish
    $('.cart-list').empty();
    $('.total').empty();
  
}

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
  $('.shopping-cart').toggle();
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var item = {
    name:$(this).closest('.item').data().name,
    price:$(this).closest('.item').data().price
  }
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();