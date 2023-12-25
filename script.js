let slideIndex = 0;
showSlide(slideIndex);

function prevSlide() {
showSlide(slideIndex -= 1);
}

function nextSlide() {
showSlide(slideIndex += 1);
}

function showSlide(n) {
let slides = document.getElementsByClassName("slide");

if (n > slides.length - 1) {
slideIndex = 0;
}

if (n < 0) {
slideIndex = slides.length - 1;
}

for (let i = 0; i < slides.length; i++) {
slides[i].classList.remove("active");
}

slides[slideIndex].classList.add("active");
}
document.getElementById('openModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
    });
    
    document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('modal')) {
    document.getElementById('modal').style.display = 'none';
    }
    });