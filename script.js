var tablinks=document.getElementsByClassName('tab-links');
var tabcontents=document.getElementsByClassName('tab-cotents ');
let icon=document.querySelector('#m');
 let msg=document.querySelector("#msg");
let love=document.querySelector('.love');
let icons=document.querySelectorAll('.fa');
let Name=document.querySelector('.name');
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add("active-tab");
}
const menuToggle = document.querySelector('.menuToggle ');
const closeMenu = document.querySelector('.closeMenu');
const sideMenu = document.querySelector('.sidemenu');

// Open side menu
menuToggle.addEventListener('click', () => {
//    sideMenu.style.display='block';
   sideMenu.style.display='flex';
   sideMenu.classList.add('open');
});
sideMenu.addEventListener('click',()=>{
    sideMenu.classList.remove('open');
})
// Close side menu
closeMenu.addEventListener('click', () => {
    //   sideMenu.style.display='none';
      sideMenu.classList.remove('open');
 
});
let rgb=()=>{
    color1=Math.random()*255;
    color2=Math.random()*255;
    color3=Math.random()*255;
    return `rgb(${color1},${color2},${color3})`;
}
setInterval(()=>{
  love.style.color=rgb();
  Name.style.color=rgb();
  for(item of icons){
   item.style.color=rgb();
  }
},1000);
