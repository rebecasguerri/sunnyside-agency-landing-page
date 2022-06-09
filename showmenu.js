const menu =document.querySelector(".menu-img");
const showMenu = document.querySelector("#menu-list");

menu.addEventListener('click', show);

 function show(){
    if(showMenu.style.display === "none"){
        showMenu.style.display ="flex";
    }else{
        showMenu.style.display ="flex";
    }
};