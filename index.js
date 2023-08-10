// hidden/show navbar

const navbar=document.getElementsByTagName("header")[0];
 lastscroll=window.scrollY;

document.addEventListener("scroll", function () {
    if (window.scrollY>lastscroll) {
        navbar.classList.add("hidden-head");
        
    } else {
        
        navbar.classList.remove("hidden-head");
    }
    lastscroll=window.scrollY;
})


// transparent navbar when on top
document.addEventListener("scroll", function (){
    if (window.scrollY===0) {
        navbar.classList.add("transparent-head");
    }
    else{
        navbar.classList.remove("transparent-head");

    }

})

// scroll down button 

document.getElementsByClassName("scroll-down")[0].addEventListener("click", function () {
    window.scrollBy(0,window.innerHeight);
    
    
})

