const header = document.querySelector("header");
const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 60);
});

// Mobile menu toggle
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

// WhatsApp Functionality for Contact Form
function sendToWhatsapp() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    let url = "https://wa.me/923121963155?text=" 
        + "Name: " + encodeURIComponent(name) + "%0a"
        + "Email: " + encodeURIComponent(email) + "%0a"
        + "Message: " + encodeURIComponent(message);

    window.open(url, '_blank').focus();
}