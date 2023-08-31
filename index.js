const navbar=document.getElementsByTagName("header")[0];lastscroll=window.scrollY;document.addEventListener("scroll",function(){if(window.scrollY>lastscroll){navbar.classList.add("hidden-head")}else{navbar.classList.remove("hidden-head")}
lastscroll=window.scrollY})
document.addEventListener("scroll",function(){if(window.scrollY===0){navbar.classList.add("transparent-head")}else{navbar.classList.remove("transparent-head")}})
document.getElementsByClassName("scroll-down")[0].addEventListener("click",function(){window.scrollBy(0,window.innerHeight)})
var MobileNav=document.getElementsByClassName("nav")[0];if(MobileNav.style.position==='absolute'){alert("working")}
let toggleButton=document.getElementsByClassName("fa-bars")[0];let crossButton=document.getElementsByClassName("fa-xmark")[0];toggleButton.addEventListener("click",function(){MobileNav.classList.add("active");crossButton.style.transform="translateX(0)";toggleButton.style.display="none";document.getElementsByTagName("body")[0].style.position="fixed"})
crossButton.addEventListener("click",function(){crossButton.style.transform="translateX(800%)";MobileNav.classList.remove("active");toggleButton.style.display="block";document.getElementsByTagName("body")[0].style.position="relative"})
