var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-cotents ');
let icon = document.querySelector('#m');
let msg = document.querySelector("#msg");
let icons = document.querySelectorAll('.fa');
let love = document.querySelector('.love');
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add("active-tab");
}
const menuToggle = document.querySelector('.menuToggle ');
const closeMenu = document.querySelector('.closeMenu');
const sideMenu = document.querySelector('.sidemenu');
menuToggle.addEventListener('click', () => {
    //    sideMenu.style.display='block';
    sideMenu.style.display = 'flex';
    sideMenu.classList.add('open');
});
sideMenu.addEventListener('click', () => {
    sideMenu.classList.remove('open');
})
closeMenu.addEventListener('click', () => {
    //   sideMenu.style.display='none';
    sideMenu.classList.remove('open');

});
let name = document.querySelector('.ex');
let wordChange = () => {
    let random = Math.ceil(Math.random() * 5);
    switch (random) {
        case 1:
            name.innerText = 'Freelancer';
            break;
        case 2:
            name.innerText = 'Coder';
            break;
        case 3:
            name.innerText = "Programmer";
            break;
        case 4:
            name.innerText = 'Tutor';
            break;
        case 5:
            name.innerText = 'Bug-Finder';
            break;
    }
}
let Name = document.querySelector('.name');
let rgb = () => {
    color1 = Math.random() * 255;
    color2 = Math.random() * 255;
    color3 = Math.random() * 255;
    return `rgb(${color1},${color2},${color3})`;
}
setInterval(() => {
    love.style.color = rgb();
    Name.style.color = rgb();
    icons.forEach((item) => {
        item.style.color = rgb();
    })
    wordChange()
}, 1000);