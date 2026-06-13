// ================= LOADER =================


window.addEventListener("load",()=>{

    const loader = document.querySelector(".loader");

    loader.style.opacity = "0";


    setTimeout(()=>{

        loader.style.display="none";

    },500);


});





// ================= MOBILE MENU =================


const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector("nav");



menuBtn.addEventListener("click",()=>{


    nav.classList.toggle("active");


});






// CLOSE MENU AFTER CLICK


const links = document.querySelectorAll("nav a");


links.forEach(link=>{


    link.addEventListener("click",()=>{


        nav.classList.remove("active");


    });


});



});


});

}

function callStore(){

window.location.href="tel:03192244466";

}
// NAVBAR EFFECT


window.addEventListener("scroll",()=>{


const nav =
document.getElementById("navbar");


if(window.scrollY > 50){

nav.classList.add("scrolled");

}

else{

nav.classList.remove("scrolled");

}


});

// SCROLL REVEAL


const reveals =
document.querySelectorAll(".reveal");


window.addEventListener("scroll",()=>{


reveals.forEach(item=>{


let position =
item.getBoundingClientRect().top;



if(position < window.innerHeight - 100){


item.classList.add("active");


}


});


});
