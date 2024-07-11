// Navbar elements
const menuBtn = document.querySelector('#menu');
const closeMenuBtn = document.querySelector('#close-menu');
const menuGroupBtn = document.querySelector('#group-btn');
const navbar = document.querySelector('nav');
const groups = document.querySelector('#groups');
// Navbar links
const groepen = document.querySelector('#group-btn');

// Navbar functionality start here
//Open the navbar 
menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('hide')
});
// Close the navbar
closeMenuBtn.addEventListener('click', () => {
    navbar.classList.toggle('hide')
});
// Dropdown menu in navbar
let dropdown = document.querySelectorAll(".nav-btn");
// add eventlistener to al dropdown buttons in the nav
for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let dropdownContent = this.nextElementSibling;
        if (dropdownContent.className === "hide") {
            dropdownContent.classList.remove('hide');
        } else {
            dropdownContent.classList.add('hide');
        }
    });
}



