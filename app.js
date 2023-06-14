let menu=document.querySelector("#menu-icon");
menu.onclick=function(){
    navBar =document.querySelector(".navbar");
    navBar.classList.toggle("open")

}
window.onscroll=()=>{
    navBar.classList.remove("open");
}
