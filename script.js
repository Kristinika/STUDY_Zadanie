const authButtons = document.querySelectorAll("#authButton");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("myModal");
const closeButton = document.getElementById("closeButton");

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  authButtons.forEach((button) => {
    button.addEventListener("click", openModal);
  });
  closeButton.addEventListener("click", closeModal);
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
  
});
$(document).ready(function() {
  $('#menuButton').click(function() {
    $('#mobileMenu').toggle();
  });
});
$('#closeMenuButton').click(function() {
  $('#mobileMenu').hide();
});
