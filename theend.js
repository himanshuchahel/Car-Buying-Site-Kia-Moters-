function cursorEffect() {
    // cursor movement coding
    var page1Content = document.querySelector("#page1-content")
    var cursor = document.querySelector("#cursor")
    var blur = document.querySelector("#cursor-blur")
    page1Content.addEventListener("mousemove",function(dets){
        //cursor.style.left = dets.x+"px"
        //cursor.style.top = dets.y+"px"
        gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        })
        gsap.to(blur,{
          x:dets.x,
          y:dets.y,
          })
    
    })
    page1Content.addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            scale:1,
            opacity:1
        })
        gsap.to(blur,{
          scale:1,
          opacity:1
      })
      
    })
    page1Content.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            scale:0,
            opacity:0
        })
        gsap.to(blur,{
          scale:0,
          opacity:0
      })
    })
    }
    cursorEffect()
    
    
    function page2Animation(){
      gsap.from("#page2 h3",{
        x:1350,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"body",
            start:"top 22%",
            end:"top 23%",
           // markers: true,
            scrub:4,
        }
    
    })
    gsap.from("#h1line3",{
      opacity:0,
      stagger:0.1,
      duration:1,
      scrollTrigger:{
          trigger:"#page2",
          scroller:"body",
          start:"top 27%",
          end:"top 28%",
         // markers: true,
          scrub:30,
      }
    
    })
    
      gsap.from("#h1line1",{
            y:400,
            stagger:0.2,
            duration:1,
            scrollTrigger:{
                trigger:"#page2 h3",
                scroller:"body",
                start:"top 22%",
                end:"top 23%",
               // markers: true,
                scrub:3,
            }
        })
        
        gsap.from("#h1line2",{
          y:600,
          stagger:0.2,
          duration:1,
          scrollTrigger:{
              trigger:"#page2",
              scroller:"body",
              start:"top 24%",
              end:"top 25%",
             // markers: true,
              scrub:4,
          }
    
      })
    
    
    }
    page2Animation()
    
    function page3Animation(){
      gsap.from("#h2line1",{
          y:400,
          stagger:0.2,
          duration:1,
          scrollTrigger:{
              trigger:"#page3",
              scroller:"body",
              start:"top 22%",
              end:"top 23%",
             // markers: true,
              scrub:3,
          }
      })
      gsap.from("#page3 h3",{
          x:1350,
          stagger:0.2,
          duration:1,
          scrollTrigger:{
              trigger:"#page3",
              scroller:"body",
              start:"top 20%",
              end:"top 21%",
             // markers: true,
              scrub:4,
          }
    
      })
      gsap.from("#h2line2",{
        y:600,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger:"#page3",
            scroller:"body",
            start:"top 24%",
            end:"top 25%",
           // markers: true,
            scrub:4,
        }
    
    })
    
    
    gsap.from("#h2line3",{
      opacity:0,
      stagger:0.1,
      duration:1,
      scrollTrigger:{
          trigger:"#page3",
          scroller:"body",
          start:"top 26%",
          end:"top 28%",
         // markers: true,
          scrub:30,
      }
    })
    }
    page3Animation()
    
    
    function Bgchange(){
      gsap.to("#main",{
        backgroundColor: "#050100",
        scrollTrigger:{
          trigger:"#main",
          scroller:"body",
          start:"top -30%",
          end: "top -80%",
          scrub:2,
    
        }
      })
    }
    Bgchange()
    
    var t1 = gsap.timeline()
    t1.from("#loader h3",{
      x:40,
      opacity:0,
      duration:1,
      stagger:0.1,
    })
    t1.to("#loader h3",{
      x:-40,
      opacity:0,
      duration:3,
      stagger:0.1,
    })
    t1.to("#loader",{
      opacity:0,
    })
    t1.to("#loader",{
      display:"none",
    })