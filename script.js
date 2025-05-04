var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-cotents ');
let icons = document.querySelectorAll('.fa');
let love = document.querySelector('.love');
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    const menuIcon = document.getElementById("menuIcon");

  
    navLinks.classList.toggle("active");
  
    // Toggle icon
    if (navLinks.classList.contains("active")) {
      menuIcon.textContent = "✕"; // Cross icon
    } else {
      menuIcon.textContent = "☰"; // Hamburger icon
    }
  }
  
  // Close menu when any link is clicked (for small screens)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      const navLinks = document.getElementById("navLinks");
      const menuIcon = document.getElementById("menuIcon");
  
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        menuIcon.textContent = "☰";
      }
    });
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
    name.style.color = rgb();
    love.style.color = rgb();
    icons.forEach((item) => {
        item.style.color = rgb();
    })
    wordChange()
}, 1000);

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
