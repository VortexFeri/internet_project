const themeSwitch = document.getElementById('theme-switch');
const colorSwitch = document.getElementById('color-switch');
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const root = document.querySelector(':root');
const arrow = document.querySelector('#scroll-link img');

themeSwitch.addEventListener('click', () => {
    themeSwitch.classList.toggle('dark');
    header.style.setProperty('background-image', 'url("/assets/dark2.jpg")');
    root.style.setProperty('--background', '#333');
    root.style.setProperty('--text', '#ccc');
    arrow.setAttribute('src', '/assets/arrow-light.png')
})

colorSwitch.addEventListener('click', () => {
    root.style.setProperty('--accent', '#00b33c');
    root.style.setProperty('--accent-rgb', '0, 179, 60');
})

const navLinks = document.querySelectorAll('.nav-links a:not(.current)');

function wrap(el, wrapper) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
}

navLinks.forEach(link => {
    var oldText = link.innerHTML;
    var newText = "";
    link.innerHTML = ""
    for (let i = 0; i < oldText.length; i++) {
        newText += "<span class='animated-text'>" + oldText[i] + "</span>";
    };
    link.innerHTML = newText;
})