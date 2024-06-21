var t1 = gsap.timeline()
t1.from("#loader h3",{
  x:40,
  opacity:0,
  duration:1,
  stagger:0.1,
})
t1.to("#loader h3",{
  x:-40,
  opacity:0,
  duration:1,
  stagger:0.1,
})
t1.to("#loader",{
  opacity:0,
})
t1.to("#loader",{
  display:"none",
})
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
function saveData() {
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const age = document.getElementById('age').value;

  // Make an AJAX request to your server-side script
  // (Replace the URL with your actual server endpoint)
  $.ajax({
      type: 'POST',
      url: 'save_data.php', // Your server-side script URL
      data: { name, address, age },
      success: function(response) {
          if (response === 'success') {
              alert('Data saved successfully!');
          } else {
              alert('Failed to save data. Please try again.');
          }
      },
      error: function() {
          alert('An error occurred while saving data.');
      }
  });
}

function validateForm() {
  let x = document.forms["myForm"]["Salutation"].value;
  let y = document.forms["myForm"]["first_name"].value;
  let a = document.forms["myForm"]["last_name"].value;
  let b = document.forms["myForm"]["username"].value;
  let c = document.forms["myForm"]["email"].value;
  let d = document.forms["myForm"]["password"].value;
  let e = document.forms["myForm"]["re_type"].value;
  let f = document.forms["myForm"]["mobile_no"].value;
  let g = document.forms["myForm"]["Model"].value;
  let h = document.forms["myForm"]["State"].value;
  let j = document.forms["myForm"]["City"].value;
  if (x == "") {
    alert("Salutation must be selected");
    return false;
  }
  if(y== ""){
    alert("First Name must be filled out");
    return false;
  }
  if(a== ""){
    alert("last Name must be filled out");
    return false;
  }
  if(b== ""){
    alert("Username Name must be filled out");
    return false;
  }
  if(c== ""){
    alert("Email_id must be filled out");
    return false;
  }
  if(d== ""){
    alert("Password must be filled out");
    return false;
  }
  if(d!=e){
    alert("Your retype-password must be same to Password");
    return false;
  }
  if(e== ""){
    alert("Retype-password must be filled out");
    return false;
  }
  if(f== ""){
    aler_("Mobile no. must be filled out");
    return false;
  }
  
  if(g== ""){
    alert("Model must be selected out");
    return false;
  }
  if(h== ""){
    alert("State must be selected out");
    return false;
  }
  if (j == "") {
    alert("City must be selected out");
    return false;
  }
  
  else{
    alert ("Let Me Check for Enteries.");
    window.location = "signup.php";
    return false;

  }
}

function validatePhoneNumber() {
  // Get and trim phone number input
  const phoneNumber = document.getElementById('mobile_no').value.trim();

  // Regex pattern for 10-digit phone number
  const pattern = /^\d{10}$/;

  // Validate phone number and update message
  const isValid = pattern.test(phoneNumber);
  document.getElementById('phoneValidationMsg').textContent = isValid ? '' : 'Please enter a valid 10-digit phone number.';

  // Return validation status
  return isValid;
}

document.addEventListener('DOMContentLoaded', function() {

  // Event listener for form submission
  document.getElementById('myForm').addEventListener('submit', function(event) {

      // Validate phone number; prevent submission if invalid
      if (!validatePhoneNumber()) {
          event.preventDefault(); // Stops form submission for invalid number
      }
  });
});




var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

function validate() {
  let p = document.forms["myForm1"]["username"].value;
  let q = document.forms["myForm1"]["password"].value;
  
  if(p== ""){
    alert("Username Name must be filled out");
    return false;
  }
  if(q== ""){
    alert("Password must be filled out");
    return false;
  }
  
  
  else{
    alert ("Let's see the Result.");
    window.location = "login.php";
    return false;

  }
}
