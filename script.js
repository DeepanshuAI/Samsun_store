
// Samsung loader


setTimeout(()=>{

document.getElementById("loader").style.display="none";


},2000);
// remove loader after page load


window.addEventListener("load",()=>{

setTimeout(()=>{

document.querySelector(".loader").style.display="none";

},1000);


});





// MOBILE MENU


const menu =
document.querySelector(".menu-btn");


const nav =
document.querySelector("nav");


if(menu && nav){

menu.addEventListener("click",()=>{

    nav.classList.toggle("active");

});
}





// MODAL


function openModal(title,desc){


document.querySelector(".modal").style.display="flex";


document.getElementById("title").innerHTML=title;


document.getElementById("desc").innerHTML=desc;


}



function closeModal(){

document.querySelector(".modal").style.display="none";

}

// PRODUCT SEARCH


const search = document.getElementById("search");


if(search){


search.addEventListener("keyup",()=>{


let value = search.value.toLowerCase();



document.querySelectorAll(".card[data-name]")
.forEach(product=>{


let name =
product.dataset.name;



if(name.includes(value)){


product.style.display="block";


}

else{


product.style.display="none";


}



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
