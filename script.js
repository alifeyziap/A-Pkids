document.addEventListener("DOMContentLoaded",()=>{

const cards=document.querySelectorAll(".item");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-6px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

card.addEventListener("touchstart",()=>{

card.style.transform="scale(.98)";

});

card.addEventListener("touchend",()=>{

card.style.transform="scale(1)";

});

});

const logo=document.querySelector(".logo");

logo.animate([

{
opacity:0,
transform:"translateY(-40px)"
},

{
opacity:1,
transform:"translateY(0)"
}

],{

duration:900,
fill:"forwards"

});

const hero=document.querySelector(".hero");

hero.animate([

{
opacity:0
},

{
opacity:1
}

],{

duration:1200,
fill:"forwards"

});

});
