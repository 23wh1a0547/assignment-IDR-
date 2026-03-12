let form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

e.preventDefault();

alert("Message sent!");

document.getElementById("successMessage").style.display = "block";

form.reset();

});
