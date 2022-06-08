const clickMenu =document.getElementById("menu");
const showMenu = document.querySelector(".mobile-list");

clickMenu.addEventListener("click", () =>{

    if(showMenu.style.display === "none"){
        showMenu.style.display ="none";
    }else{
        showMenu.style.display ="block";
    }
});