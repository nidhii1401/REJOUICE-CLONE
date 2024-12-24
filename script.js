
function locomotiveJS(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


}



function cursorAnimation(){


var page1Content = document.querySelector("#page1-content")
var cursor = document.querySelector("#cursor")

page1Content.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
})

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

// Page 2

function page2Animation(){
    gsap.from(".page2-content h1",{
        y:120,
        // opacity:0,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            start:"top 47%",
            end:"top 46%",
            scrub:2
        }
    })

}


function page4Animation(){
    gsap.from(".page4-content h1",{
        y:120,
        // opacity:0,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger:"#page4",
            scroller:"#main",
            start:"top 47%",
            end:"top 46%",
            scrub:2
        }
    })

}


function infiniteLoop(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay:{
      delay:2500,
      disableOnInteraction:true,
    },
  });

}

function loaderAnimation(){
  var tl = gsap.timeline()

tl.from("#loader h3",{
  x:50,
  opacity:0,
  duration:1,
  stagger:0.1
})


tl.to("#loader h3",{
  opacity:0,
  x:-50,
  duration:1,
  stagger:0.1
})

tl.to("#loader",{
  opacity:0
})

tl.to("#loader",{
  display:"none"
})

tl.from("#page1-content h1 span",{
  y:100,
  opacity:0,
  stagger:0.1
})


}


function page7Animation(){
  gsap.from("#page7 a h1",{
      y:80,
      opacity:0,
      stagger:0.2,
      duration:2,
      scrollTrigger:{
          trigger:"#page7",
          scroller:"#main",
          scrub:2,
          start:"top 70%",
          end:"top 65%"
      }
  })
}

function page3Animation(){
  var tl = gsap.timeline();

  tl.from("#page3-top h2",{
      y:80,
      opacity:0,
      stagger:0.2,
      duration:1,
      scrollTrigger:{
          trigger:"#page3",
          scroller:"#main",
          start:"top 60%",
          end:"top 46%",
          scrub:3
      }
  })

 
}

function footerAnimation(){
  gsap.from("#f3 h1 span",{
      y:-100,
      opacity:0,
      stagger:5,
      duration:10,
      delay:1,
      scrollTrigger:{
          trigger:"#footer",
          scroller:"#main",
          scrub:2,
          start:"top 0%",
          end:"top -20%",
          ease:"slow(0.7,0.7,false)"
      }
  })
}


function cursorAnimation2(){


  var page5 = document.querySelector("#page5")
  var cursor = document.querySelector("#cursor2")
  
 page5.addEventListener("mousemove",function(dets){
      gsap.to(cursor,{
          x:dets.x,
          y:dets.y
      })
  })
  
  page5.addEventListener("mouseenter",function(){
      gsap.to(cursor,{
          scale:1,
          opacity:1
      })
  })
  
  page5.addEventListener("mouseleave",function(){
      gsap.to(cursor,{
          scale:0,
          opacity:0
      })
  })
  
  }

locomotiveJS();
loaderAnimation();
cursorAnimation();
cursorAnimation2();
page2Animation();
page3Animation();
page4Animation();
infiniteLoop();
page7Animation();
footerAnimation();
