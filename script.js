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
        delay:1.3,
        duration:0.3
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