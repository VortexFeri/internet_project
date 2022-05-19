const themeSwitch = document.getElementById('theme-switch');
const colorSwitch = document.getElementById('color-switch');
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const root = document.querySelector(':root');
const arrow = document.querySelector('#scroll-link img');
const githubIcon = document.querySelector("img[alt='Github']");
const codepenIcon = document.querySelector("img[alt='Codepen']");
const linkedinIcon = document.querySelector("img[alt='Linkedin']");

themeSwitch.addEventListener('click', () => {
    themeSwitch.classList.toggle('dark');
    header.style.setProperty('background-image', 'url("/assets/dark2.jpg")');
    root.style.setProperty('--background', '#333');
    root.style.setProperty('--text', '#ccc');
    root.style.setProperty('--bg', '#333340');
    arrow.setAttribute('src', '/assets/arrow-light.png');
    githubIcon.setAttribute('src', '/assets/github-white.png')
    codepenIcon.setAttribute('src', '/assets/codepen-white.png')
    linkedinIcon.setAttribute('src', '/assets/linkedin-white.png')

})

colorSwitch.addEventListener('click', () => {
    root.style.setProperty('--accent', '#00b33c');
    root.style.setProperty('--accent-rgb', '0, 179, 60');
})

const animLinks = document.querySelectorAll('.animated-link');

animLinks.forEach(link => {
    var oldText = link.innerHTML;
    var newText = "";
    link.innerHTML = ""
    for (let i = 0; i < oldText.length; i++) {
        if (oldText[i] == " ") 
            newText += `<span data-text='&nbsp;' class='animated-text letter-${i}'>&nbsp;</span>`;
        else
            newText += `<span data-text='${oldText[i]}' class='animated-text letter-${i}'>${oldText[i]}</span>`;
    };
    link.innerHTML = newText;
})