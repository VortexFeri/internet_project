const themeSwitch = document.querySelector('#theme-switch input');
const themelabel = document.getElementById('theme-switch');
const colorSwitch = document.getElementById('color-switch');
const header = document.querySelector('header');
const root = document.querySelector(':root');
const arrow = document.querySelector('#scroll-link img');
const icons = document.querySelectorAll('.social img');

function switchTheme() {
    if (themeSwitch.checked) {
        themeSwitch.classList.add('dark');
        themelabel.classList.add('dark');
        root.classList.add('dark');
        arrow.setAttribute('src', 'assets/arrow-light.png');
        header.style.setProperty('background-image', 'url("assets/home-dark.jpg")');
        icons.forEach(icon => {
            icon.style.filter = 'invert()';
        })
    }
    else {
        themeSwitch.classList.remove('dark');
        themelabel.classList.remove('dark');
        root.classList.remove('dark');
        arrow.setAttribute('src', 'assets/arrow-dark.png');
        header.style.setProperty('background-image', 'url("assets/home-light.jpg")');
        icons.forEach(icon => {
            icon.style.filter = 'unset';
        })
    }
}

colorSwitch.addEventListener('click', () => {
    if (root.getAttribute('data-color-theme') == 'magenta' ||
        root.getAttribute('data-color-theme') == null)
        root.setAttribute('data-color-theme', 'green');
    else
        root.setAttribute('data-color-theme', 'magenta')
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

function storeDark() {
    document.cookie = `dark=${themeSwitch.checked}`;
};

themeSwitch.addEventListener('change', function () {
    storeDark();
    switchTheme();
});

window.onload = () => {
    if (document.cookie == 'dark=true') {
        themeSwitch.setAttribute('checked', true);
    }
    else {
        themeSwitch.removeAttribute('checked');
    }
    switchTheme();
}
