// Function to update the cart display
function displaytocart() {
  var cart_array = shoppingCart.listCart();
  var output = "";
  for (var i in cart_array) {
      output += "<tr>"
          + "<td>" + cart_array[i].name + "</td>"
          + "<td>(" + cart_array[i].price + ")</td>"
          + "<td>" + cart_array[i].count + "</td>"
          + "<td><button class='delete-item' data-name=" + cart_array[i].name + ">Remove</button></td>"
          + "</tr>";
  }
  $('.show-cart').html(output);
  $('.total-cart').html(shoppingCart.totalCart());
  $('.total-count').html(shoppingCart.totalCount());
}

// Delete item button
$('.show-cart').on("click", ".delete-item", function (event) {
  var name = $(this).data('name');
  shoppingCart.removeItemFromCartAll(name);
  displaytocart();
});

// Function to validate email format
function validateEmail(email) {
  // A simple email validation regex
  var regex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
  return regex.test(email);
}

// Function to validate phone format
function validatePhone(phone) {
  // phone number with validation regex for 10 digits
  var regex = /^\d{10}$/;
  return regex.test(phone);
}
// display error messages
function displayError(field, message) {
  $('#' + field + '-error').text(message);
}
// clear error messages
function clearError(field) {
  $('#' + field + '-error').text('');
}

// Checkout Button Click Event
$('#complete-checkout').click(function () {
// Get user information
var name = $('#name').val();
var email = $('#email').val();
var address = $('#address').val();
var phone = $('#phone').val();
var country = $('#country').val();
var postalCode = $('#postal-code').val();

// Validate the form before proceeding
var isValid = true;
var errorMessage = '';

if (name.trim() === '') {
  displayError('name', 'Please enter your name.');
  isValid = false;
} else {
  clearError('name');
}

if (email.trim() === '') {
displayError('email', 'Please enter an email address');
isValid = false;
} else if (!validateEmail(email)) {
  displayError('email', 'Please enter a valid email address.');
  isValid = false;
} else {
  clearError('email');
}

if (address.trim() === '') {
  displayError('address', 'Please enter your address.');
  isValid = false;
} else {
  clearError('address');
}

if (phone.trim() === '') {
  displayError('phone', 'Please enter your phone number.');
  isValid = false;
} else if (!validatePhone(phone)) {
  displayError('phone', 'Please enter a valid 10-digit phone number.');
  isValid = false;
} else {
  clearError('phone');
}

if (country.trim() === '') {
  displayError('country', 'Please enter your country.');
  isValid = false;
} else {
  clearError('country');
}

if (postalCode.trim() === '') {
  displayError('postal-code', 'Please enter your postal code.');
  isValid = false;
} else {
  clearError('postal-code');
}
if (!isValid) {
  errorMessage = 'Please fill in all the required fields.';
  // Display the error message
  alert(errorMessage);
  return;
}
shoppingCart.clearCart();
displaytocart();
// redirect to a thank you page)
alert('Thank you, Your success has been recieved., ' + name + '!');
// Clear form fields
$('#name').val('');
$('#email').val('');
$('#address').val('');
$('#phone').val('');
$('#country').val('');
$('#postal-code').val('');
});

displaytocart();


/********************Payment Form*********************/
function isValidCardNumber(cardNumber) { //16 digit card nmber
  return /^\d{16}$/.test(cardNumber);
}

function isValidExpiryDate(expiryDate) { // expiry date
  return /^\d{2}\/\d{2}$/.test(expiryDate);
}

function isValidCVV(cvv) { //cvv number
  return /^\d{3}$/.test(cvv);
}

// Payment Button Click Event
$('#complete-payment').click(function () {
  var cardNumber = $('#card-number').val();
  var expiryDate = $('#expiry-date').val();
  var cvv = $('#cvv').val();

  var isValid = true;
  $('.error-message').text('');

  if (!isValidCardNumber(cardNumber)) {
      $('#card-number-error').text('Please enter a valid 16-digit card number.');
      isValid = false;
  }

  if (!isValidExpiryDate(expiryDate)) {
      $('#expiry-date-error').text('Please enter a valid expiry date in MM/YY format.');
      isValid = false;
  }

  if (!isValidCVV(cvv)) {
      $('#cvv-error').text('Please enter a valid 3-digit CVV.');
      isValid = false;
  }

  if (!isValid) {
      return;
  }

  $('#card-number').val('');
  $('#expiry-date').val('');
  $('#cvv').val('');

  // Show a success message
  var successMessage = 'Payment successful! Thank you!';
  alert(successMessage);

  // Redirect to a thank you page
  window.location.href = 'thank-you.html';
});