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
