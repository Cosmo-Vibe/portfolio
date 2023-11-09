// Navigation bar //

const hamburgerMenu = document.querySelector(".burgerMenu")

const navLinks = document.querySelector(".navigationLinks")

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('phoneMenu')
})

// Navigation bar //


// Contact Form //

const formHeading = document.querySelector(".form-heading");
const formInputs = document.querySelectorAll(".contact-form-input");

formInputs.forEach((input) => {
    input.addEventListener("focus", () => {
        formHeading.style.opacity = "0";
        setTimeout(() => {
            formHeading.textContent = `Renseignez : ${input.placeholder}`;
            formHeading.style.opacity = "1";
        }, 300);
    });

    input.addEventListener("blur", () => {
        formHeading.style.opacity = "0";
        setTimeout(() => {
            formHeading.textContent = "Formulaire de contact";
            formHeading.style.opacity = "1";
        }, 300);
    });
});



/* var submitBtn = document.getElementsByClassName('.form-submit-btn')
submitBtn.addEventListener('click', function(e) {
    e.preventDefault()
})
 */

// Contact Form //



// Slider //

const slider = document.querySelector('.slider');
const sliderImages = document.querySelectorAll('.slider img');
const sliderNav = document.querySelectorAll('.slider-nav a');
let currentIndex = 0;
const intervalTime = 2500;

function nextSlide() {
    sliderImages[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % sliderImages.length;
    sliderImages[currentIndex].style.display = "inline";
    updateNav();
}

function updateNav() {
    sliderNav.forEach((nav, index) => {
        nav.classList.remove('active');
        if (index === currentIndex) {
            nav.classList.add('active');
        }
    });
}

sliderNav.forEach((nav, index) => {
    nav.addEventListener('click', () => {
        sliderImages[currentIndex].style.display = "none";
        currentIndex = index;
        sliderImages[currentIndex].style.display = "inline";
        updateNav();
    });
});

setInterval(nextSlide, intervalTime);
updateNav();

// Slider //