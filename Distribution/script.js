function cursorEffect(){

  let page1Content = document.querySelector(".page1-content");
  let cursor = document.querySelector(".cursor");
  
  
  page1Content.addEventListener("mousemove" ,function(motion){
    gsap.to(cursor,{
      x:motion.x,
      y:motion.y
    })
  });
  
  page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
      scale:1,
      opacity:1
    })
  })
  page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
      scale:0,
      opacity:0
    })
  })
  }
cursorEffect();


function animation(){  
var t1 = gsap.timeline()
t1.from("#loader h3",{
  x:200,
  opacity:0,
  duration:1,
  stagger:0.1,
})
t1.to("#loader h3",{
  opacity:0,
  x:-20,
  duration:1,
  stagger:0.1
})
t1.to("#loader",{
  opacity:0
})
t1.to("#loader",{
  display:"none"
})

t1.from(".page1-content h1",{
    y:100,
    opacity:0,
    delay:0.01,
    duration:0.3,
    stagger:0.2
})
t1.from(".page1-content p",{
    y:100,
    opacity:0,
    delay:0.01,
    duration:0.3,
    stagger:0.2
})
t1.from(".sub-headings button",{
  y:100,
  opacity:0,
  delay:0.01,
  duration:0.3,
  stagger:0.2
})

}
animation()

var manu = document.querySelector(".page1-content nav button")
var cross = document.querySelector(".cross i")


var manutl = gsap.timeline()
manutl.to(".full",{
  right:-40,
  duration:0.3
})

manutl.from(".full h2" , {
  x:700,
  duration:0.3,
  stagger:0.2,
})



manutl.from(".full-option h5",{
  y:200,
  duration:0.3,
  stagger:0.1
})


manutl.pause()



manu.addEventListener("click",function(){
   manutl.play()
})


cross.addEventListener("click",function(){
     manutl.reverse(".full")
  })
   
      



// for time 
window.onload = function() {
  
  let today = new Date().toISOString().split('T')[0];
  document.getElementById('#calendar').value = today;

  let hours = String(today.getHours()).padStart(2, '0');
            let minutes = String(today.getMinutes()).padStart(2, '0');
            document.getElementById('#time').value = `${hours}:${minutes}`;
}


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
 
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

``
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();