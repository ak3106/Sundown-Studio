const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});

var elemcon = document.querySelector(".elem-container");
var fixed = document.querySelector(".fixedimg");

elemcon.addEventListener("mouseenter",function(){
    fixed.style.display = "block";
})
elemcon.addEventListener("mouseleave",function(){
    fixed.style.display = "none";
})

var elemall = document.querySelectorAll(".page3-element");
console.log(elemall);
elemall.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var img = e.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${img})`
    })
})


var h11 = document.querySelector("#h11");
var h12 = document.querySelector("#h12");
var h13 = document.querySelector("#h13");
var img = document.querySelector(".p4-right img");
var leftP = document.querySelector(".p4-left-con p");

h12.addEventListener("click",function(){
    h11.style.color = "#504A45";
    h12.style.color = "white";
    h13.style.color = "#504A45";
    h12.style.borderLeft = "5px solid #c6fe0d";
    h11.style.borderLeft = "1px solid #504A45";
    h13.style.borderLeft = "1px solid #504A45";
    img.src = "https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d0_Project.webp";
    leftP.innerHTML = "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.";
})
h13.addEventListener("click",function(){
    h11.style.color = "#504A45";
    h12.style.color = "#504A45";
    h13.style.color = "white";
    h13.style.borderLeft = "5px solid #c6fe0d";
    h11.style.borderLeft = "1px solid #504A45";
    h12.style.borderLeft = "1px solid #504A45";
    img.src = "https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15cd_Execution-p-1080.jpg";
    leftP.innerHTML = "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.";

})
h11.addEventListener("click",function(){
    h11.style.color = "white";
    h12.style.color = "#504A45";
    h13.style.color = "#504A45";
    h11.style.borderLeft = "5px solid #c6fe0d";
    h13.style.borderLeft = "1px solid #504A45";
    h12.style.borderLeft = "1px solid #504A45";
    img.src = "https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project-p-1080.jpg";
    leftP.innerHTML = "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.";
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
  });


var full = document.querySelector(".fullscr");
var menu = document.querySelector("nav span");
var navimg = document.querySelector("nav img");
var flag = 0;

menu.addEventListener("click",function(){
    if(flag==0){
        full.style.top = "0%";
        navimg.style.opacity = 0;
        flag = 1;
    }
    else{
        full.style.top = "-100%";
        navimg.style.opacity = 1;
        flag = 0;
    }
})

var load = document.querySelector("#loader");
setTimeout(() => {
    load.style.top = "-100%";
}, 4000);