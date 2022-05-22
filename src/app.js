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
// THEME SWITCHER

const 
    themeSwitch = document.querySelector('#theme-switch input'),
    colorSwitch = document.getElementById('color-switch'),
    root = document.querySelector(':root'),
    colorOption = document.querySelectorAll('.color-switch');

function switchTheme() {
    if (getCookie('dark') == 'true') {
        root.classList.add('dark');
    }
    else {
        root.classList.remove('dark');
    }
}

colorSwitch.addEventListener('click', () => {
    colorSwitch.classList.toggle('show');
})

colorOption.forEach(opt => {
    opt.addEventListener('click', () => {
        colorSwitch.classList.toggle('show');
        root.setAttribute('data-color-theme', opt.getAttribute('data-color'));
        storeColor();
    })
})

window.onload = () => {
    if (getCookie('dark') == 'true') {
        themeSwitch.setAttribute('checked', true);
    }
    else {
        themeSwitch.removeAttribute('checked');
    }
    switchTheme();

    root.setAttribute('data-color-theme', getCookie('color'));
}

// LINK ANIMATION

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


// FORM SCRIPT

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


// PROJECT CARDS

const projectCard = document.querySelectorAll('.project-card');
const iframe = document.querySelectorAll('iframe');
const fullscreenButton = document.querySelectorAll('.fullscreen-button');

for(let i = 0; i < projectCard.length; i++) {
    projectCard[i].addEventListener('click', () => {
        iframe[i].classList.toggle('hidden');
        projectCard[i].classList.toggle('hidden');
    })
}

// REVIREW SCRIP

var reviewNames = document.querySelectorAll('.review-card .name');
const firstNames = ['Will', 'George', 'Jennifer', 'John', 'Hector', 'Anne', 'Mary', 'Christine', 'Dick', 'Rue'];
const surNames = ['Bald', 'Downey', 'Wayne', 'Richards', 'Bossman', 'Hathaway', 'Lawrence', 'Robbinson', 'Johnson', 'Wilson'];

reviewNames.forEach(name => {
    name.innerHTML = firstNames[Math.floor(Math.random() * firstNames.length)] + " " + surNames[Math.floor(Math.random() * surNames.length)];
})

const reviewSection = document.querySelector('.reviews');
var reviewsNo = reviewNames.length;

function addReview() {
    const form = document.querySelector('.review-form');
    reviewsNo++;
    reviewSection.innerHTML += 
    `
        <div class="review-card">
            <img src="https://picsum.photos/100?random=${reviewsNo}">
            <h3 class="name">${form.elements['firstName'].value} ${form.elements['secondName'].value}</h3>
            <p>${form.elements['message'].value}</p>
        </div>
        `;
    form.reset();
}