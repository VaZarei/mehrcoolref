/* static/js/home/homescript.js */

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 20000); // Change slide every 4 seconds
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}


document.addEventListener('DOMContentLoaded', function() {
    // Example function to change background color of a column
    function changeBackgroundColor(columnId, color) {
        document.getElementById(columnId).style.backgroundColor = color;
    }

    // Example function to change background image of a column
    function changeBackgroundImage(columnId, imageUrl) {
        document.getElementById(columnId).style.backgroundImage = `url(${imageUrl})`;
        document.getElementById(columnId).style.backgroundSize = 'cover';
    }

    // Usage examples
    changeBackgroundColor('column1', '#ffeedd');
    changeBackgroundImage('column2', 'static/images/home/someimage.jpg');
});
