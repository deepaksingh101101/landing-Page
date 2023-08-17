// on scroll function
function navMenu(){
let navBar=document.querySelector('.navbar');
let scrollTopButton=document.querySelector('#scrollUp');
window.onscroll=function(){
    var scroll=document.documentElement.scrollTop;
    if(scroll>=120){
        navBar.classList.add('navbar-sticky-moved-up');
    }
    else{
        navBar.classList.remove('navbar-sticky-moved-up');

    }
    // Apply transition

    if(scroll>=250){
        navBar.classList.add("navbar-sticky-transitioned");
        scrollTopButton.classList.add("scrollActive");
    }
    else{
        navBar.classList.remove("navbar-sticky-transitioned");
        scrollTopButton.classList.remove("scrollActive");
    }
    // stcky on
    if(scroll>=120){
        navBar.classList.add("navbar-sticky-on");
    }
    else{
        navBar.classList.remove("navbar-sticky-on");
    }
}
}
navMenu();

// Counter 

document.addEventListener("DOMContentLoaded",()=>{
    function counter(id, start, end , duration){
        let obj=document.getElementById(id),
        current=start,
        range=end-start,
        increment=end>start?1:-1,
        step =Math.abs(Math.floor(duration/range)),
        timer=setInterval(()=>{
            current+=increment;
            obj.textContent=current;
            if(current==end){
                clearInterval(timer);
            }
        },step);
    }
    counter("count1",0,10,2000);
    counter("count2",100,20,3000);
    counter("count3",0,30,4000);
    counter("count4",0,10,2000);
});


// close menu on click menu
let navBar=document.querySelectorAll('.nav-link');
let navColapse=document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click",()=>{
        navColapse.classList.remove("show");
    });
})