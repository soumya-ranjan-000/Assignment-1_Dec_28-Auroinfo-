$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
    });
  });
  


//   humburgur menu and nav menu setup
const menu_btn=document.getElementById('hamburger');
const menu=document.querySelector('.navbar ');
const item=document.querySelector('.nav');
menu_btn.addEventListener('click',()=>{
    menu.classList.toggle('show');
    item.classList.toggle('revel');
})