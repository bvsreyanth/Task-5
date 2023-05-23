let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});

function validateForm() {
  var destination = document.getElementById("destination").value;
  var guests = document.getElementById("guests").value;
  var arrivalDate = document.getElementById("arrivalDate").value;
  var departureDate = document.getElementById("departureDate").value;

  if (destination === "" || guests === "" || arrivalDate === "" || departureDate === "") {
      alert("Please fill in all the required fields.");
      return false; // Prevent form submission
  }

  // Additional validation logic can be added if needed
  alert("Booking confirmed!");
  return true; // Allow form submission
}
function myFunction(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var num = document.getElementById("num").value;  
  var sub = document.getElementById("sub").value;
  var mes = document.getElementById("mes").value;

  if (name === "" || email === "" || num === "" || sub === "" || mes === "") {
      alert("Please fill in all the required fields.");
      return false; // Prevent form submission
  }

  // Additional validation logic can be added if needed
  alert("Thank you for Contacting us we will get back to you soon!");
  return true; // Allow form submission
}



