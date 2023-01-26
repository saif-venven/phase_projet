// contact

  // validate name
function validatename() {
  let name = document.getElementById("name").value;

  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
}
// check email
function checkEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
// validate email
function validatemail(){

  let email = document.getElementById("email").value;
  if (!(checkEmail(email))) {
    alert('Adresse e-mail non valide');
}
return false;
}

// subject 
function validatesubject(){
  let subject = document.getElementById("subject").value;
  if (subject == ""){
    alert("you must add a subject! ")
  }
  if (subject.length > 20){
    alert("subject is to long ! 20 chart is allowed");
  }
  return false;
  
}

// message 
function validatemessage(){
  let message = document.getElementById("message").value;
  if (message == ""){
    alert("put a message ")
  }
  if (message.length > 300) {
    alert("subject is to long 300 chart allowed");
  }
  return false;
  
}


  // slide
  let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}