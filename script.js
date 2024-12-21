var tablinks=document.getElementsByClassName('tab-links');
var tabcontents=document.getElementsByClassName('tab-cotents ');
let icon=document.querySelector('#m');
 let msg=document.querySelector("#msg");
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
