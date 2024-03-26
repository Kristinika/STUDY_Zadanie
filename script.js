const authButtons = document.querySelectorAll("#authButton");
const mailButton = document.getElementById("mailButton"); 
const overlay = document.getElementById("overlay");
const modal = document.getElementById("myModal");
const emailModal = document.getElementById("emailModal");
const closeButton = document.getElementById("closeButton");
const closeEmailButton = document.getElementById("closeEmailButton"); 

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function openEmailModal() {
  emailModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

function closeEmailModal() {
  emailModal.classList.add("hidden");
  overlay.classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  authButtons.forEach((button) => {
    button.addEventListener("click", openModal);
  });
  
  mailButton.addEventListener("click", openEmailModal); 

  closeButton.addEventListener("click", closeModal);
  closeEmailButton.addEventListener("click", closeEmailModal); 

  $('.variable-width').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });
  
  $('.next-btn').click(function(){
    $('.variable-width').slick('slickNext');
  });
  
  $('.prev-btn').click(function(){
    $('.variable-width').slick('slickPrev');
  });
  
  $('.single-item').slick({
    infinite: true,
  });
  $('.next-btn').click(function(){
    $('.single-item').slick('slickNext');
  });
  
  $('.prev-btn').click(function(){
    $('.single-item').slick('slickPrev');
  });

  $('#menuButton').click(function() {
    $('#mobileMenu').toggle();
  });

  $('#closeMenuButton').click(function() {
    $('#mobileMenu').hide();
  });
});
