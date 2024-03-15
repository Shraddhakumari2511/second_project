var crsr = document.querySelector("#cursor");
var crsr2 = document.querySelector("#cursorblur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y+"px"
    
})
document.addEventListener("mousemove",function(dets){
    crsr2.style.left = dets.x -200+"px"
    crsr2.style.top = dets.y -200+"px"
    
})
gsap.to("#nav",{
    backgroundColor: "black",
    height: "70px",
    duration:0.5,
    scrollTrigger: {
        trigger:"#nav",
        scroller:"body",
        markers: false,
        start: "top -10%",
        end: "top -15%",
        scrub: 1,
    }
})
gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        markers:"true",
        start: "top -30%",
        end: "top -80%",
        scrub: 2,
    }
})
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elum){
    elum.addEventListener("mouseenter", function(){
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor ="transparent"
    })
    elum.addEventListener("mouseleave", function(){
        crsr.style.scale = 1;
        crsr.style.border = "1px solid #95C11E";
        crsr.style.backgroundColor ="#95C11E"
    })
})

// gsap.from("#about-us img, #about",{
//     y:50,
//     opacity: 0,
//     duration: 1,
//     delay:0.2,
//     scrollTrigger:{
//         trigger: "#about-us",
//         scroller: "body",
//         markers:false,
//         start: "top 70%",
//         end: "top 65%",
//         scrub: 1,
//     }
// })
// gsap.from(".card",{
//    scale: 0.8,
//     opacity: 0,
//     duration: 1.3,
//     delay:0.2,
//     stagger: 0.1,
//     scrollTrigger:{
//         trigger: ".card",
//         scroller: "body",
//         markers:false,
//         start: "top 60%",
//         end: "top 65%",
//         scrub: 1,
//     }
// })