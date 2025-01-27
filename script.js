// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


const videoContainer=document.querySelector(".video-container")
const PlayBtn=document.querySelector(".play");
videoContainer.addEventListener("mouseenter",()=>{
    // PlayBtn.style.opacity="1";
    // PlayBtn.style.scale="1";
  gsap.to(PlayBtn,{
    scale:1,
    opacity:1
  })
})

videoContainer.addEventListener("mouseleave",()=>{
    gsap.to(PlayBtn,{
        scale:0,
        opacity:0
      })
})
videoContainer.addEventListener("mousemove",(dets)=>{
    gsap.to(PlayBtn,{
        left:dets.x-50,
        top:dets.y-80
    })
})

function loadingAnimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.8,
        duration:0.9,
        stagger:0.2
    })
    gsap.from("#page1 .video-container",{
        scale:0.9,
        opacity:0,
        delay:1.5,
        duration:0.3
    })
    gsap.from(".menu-items li ",{
        y:50,
        opacity:0,
        delay:0.3,
        duration:0.9,
        stagger:0.2
    })

    gsap.from(".about-container h3 ",{
        y:50,
        opacity:0,
        delay:0.3,
        duration:0.9,
        stagger:0.2
    })
    gsap.from(".about-container p",{
        y:100,
        opacity:0,
        delay:0.3,
        duration:0.9,
        stagger:0.2
    })
}
loadingAnimation();

document.addEventListener("mousemove",(dets)=>{
   gsap.to(".cursor",{
    left:dets.x,
    top:dets.y
   })
})
document.querySelector(".cursor-effect").addEventListener("mouseenter",()=>{
    gsap.to(".cursor",{
        transform:` translate(-50%,-50%) scale(1)`,
    })
})
document.querySelector(".cursor-effect").addEventListener("mouseleave",()=>{
    gsap.to(".cursor",{
        transform:` translate(-50%,-50%) scale(0)`
    })
})

const Content1=document.querySelector(".content1")
const Content2=document.querySelector(".content2")
const Content3=document.querySelector(".content3")
const DETS=document.querySelector(".dets1");
console.log(DETS)
 
DETS.addEventListener("mouseenter",()=>{
    Content1.style.display="block";
});
DETS.addEventListener("mouseleave",()=>{
    Content1.style.display="none";
})


const DETS2=document.querySelector(".dets2");
console.log(DETS)
 
DETS2.addEventListener("mouseenter",()=>{
    Content2.style.display="block";
});
DETS2.addEventListener("mouseleave",()=>{
    Content2.style.display="none";
})

const DETS3=document.querySelector(".dets3");
console.log(DETS)
 
DETS3.addEventListener("mouseenter",()=>{
    Content3.style.display="block";
});
DETS3.addEventListener("mouseleave",()=>{
    Content3.style.display="none";
})

const navContainer=document.querySelector(".nav-container2");
const hameBurger=document.querySelector("#hamburger");
const cross=document.querySelector("#cross");
const websiteLogo=document.querySelector(".website-logo img")
hameBurger.addEventListener("click",()=>{
    navContainer.style.display="block";
    hameBurger.style.display="none";
    cross.style.display="block";
    websiteLogo.style.display="block";
    // navContainer.style.transform=`translateY(0%)`
})
cross.addEventListener("click" ,()=>{
    navContainer.style.display="none";
    hameBurger.style.display="block";
    cross.style.display="none";
      websiteLogo.style.display="none";
})