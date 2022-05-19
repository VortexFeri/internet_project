const themeSwitch = document.getElementById('theme-switch');
const colorSwitch = document.getElementById('color-switch');
const header = document.querySelector('header');
const root = document.querySelector(':root');
const arrow = document.querySelector('#scroll-link img');
const icons = document.querySelectorAll('.social img');

themeSwitch.addEventListener('click', () => {
    themeSwitch.classList.toggle('dark');
    root.classList.toggle('dark');
        
    if (root.classList.contains('dark')) {
        arrow.setAttribute('src', '/assets/arrow-light.png');
        header.style.setProperty('background-image', 'url("/assets/dark2.jpg")');
        icons.forEach(icon => {
            let aux = icon.getAttribute('src');
            aux = aux.substring(0, aux.length - 4) + "-white" + aux.substring(aux.length - 4, aux.length);
            icon.setAttribute('src', aux);
        })
    }
    else {
        arrow.setAttribute('src', '/assets/arrow-dark.png');
        header.style.setProperty('background-image', 'url("/assets/pexels-henry-&-co-1939485.jpg")');
        icons.forEach(icon => {
            let aux = icon.getAttribute('src');
            aux = aux.substring(0, aux.length - 10) + "" + aux.substring(aux.length - 4, aux.length);
            icon.setAttribute('src', aux);
        })
    }

})

colorSwitch.addEventListener('click', () => {
    if (root.getAttribute('data-color-theme') == 'magenta')
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