// THEME SWITCHER

const themeSwitch = document.querySelector('#theme-switch input'),
    colorSwitch = document.getElementById('color-switch'),
    root = document.querySelector(':root')

function switchTheme() {
    if (getCookie('dark') == 'true') {
        root.classList.add('dark');
    }
    else {
        root.classList.remove('dark');
    }
}

colorSwitch.addEventListener('click', () => {
    if (getCookie('color') == 'magenta')
        root.setAttribute('data-color-theme', 'green');
    else
        root.setAttribute('data-color-theme', 'magenta');
    storeColor();
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
    document.cookie = `dark=${themeSwitch.checked};`;
};
function storeColor() {
    document.cookie = `color=${(root.getAttribute('data-color-theme'))};`
}

themeSwitch.addEventListener('change', function () {
    storeDark();
    switchTheme();
});

window.onload = () => {
    if (getCookie('dark') == 'true') {
        themeSwitch.setAttribute('checked', true);
    }
    else {
        themeSwitch.removeAttribute('checked');
    }
    switchTheme();

    root.setAttribute('data-color-theme', getCookie('color'))
}

const form = document.querySelector('form');
const formMessage = document.querySelector('.form-thanks-container');
const overlay = document.querySelector('.full-overlay');

function formSubmit() {
    formMessage.classList.remove('leave');
    formMessage.style.display = 'flex';
    overlay.style.display = 'block';
    form.reset();
}
function dismiss() {
    formMessage.classList.add('leave');
    setTimeout(
        () => {
            formMessage.style.display = 'none';
            overlay.style.display = 'none';
        }, 200
    )
}

function getCookie(name) {
    let cookieArray = document.cookie.split(';');

    for (var i = 0; i < cookieArray.length; i++) {
        var curCookie = cookieArray[i].split('=');

        if(name == curCookie[0].trim()) {
            return decodeURIComponent(curCookie[1]);
        }
    }

    return null;
}

const projectCard = document.querySelectorAll('.project-card');
const iframe = document.querySelectorAll('iframe');

for(let i = 0; i < projectCard.length; i++) {
    projectCard[i].addEventListener('click', () => {
        iframe[i].classList.toggle('hidden');
        projectCard[i].classList.toggle('hidden');
    })
}