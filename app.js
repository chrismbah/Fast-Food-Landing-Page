let menu=document.querySelector("#menu-icon");
const mode=document.querySelector("#toggle-icon");
mode.onclick=function(){
    body=document.querySelector(".light");
    body.classList.toggle("dark"); 
}
menu.onclick=function(){
    navBar =document.querySelector(".navbar");
    navBar.classList.toggle("open")

}
window.onscroll=()=>{
    navBar.classList.remove("open");
}
