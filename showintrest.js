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
  duration:1,
  stagger:0.1,
})
t1.to("#loader",{
  opacity:0,
})
t1.to("#loader",{
  display:"none",
})

function validateForm() {
  let x = document.forms["myForm2"]["Salutation"].value;
  let y = document.forms["myForm2"]["fname"].value;
  let a = document.forms["myForm2"]["lname"].value;
  let b = document.forms["myForm2"]["email"].value;
  let c = document.forms["myForm2"]["mobile_no"].value;
  let d = document.forms["myForm2"]["mobile_otp"].value;
  let e = document.forms["myForm2"]["Model"].value;
  let f = document.forms["myForm2"]["State"].value;
  let g = document.forms["myForm2"]["City"].value;
  let h = document.forms["myForm2"]["Dealer"].value;
  let j = document.forms["myForm2"]["condition"].value;
  if (x == "") {
    alert("Salutation must be selected");
    return false;
  }
  if(y== ""){
    alert("First Name must be filled out");
    return false;
  }
  if(a== ""){
    alert("last Name must be filled out");
    return false;
  }
  if(b== ""){
    alert("Email_id must be filled out");
    return false;
  }
  if(c== ""){
    alert("Mobile_no. must be filled out");
    return false;
  }
  if(d== ""){
    alert("Mobile_otp must be filled out");
    return false;
  }
  
  if(e== ""){
    alert("Model must be filled out");
    return false;
  }
  
  if(f== ""){
    alert("State must be selected out");
    return false;
  }
  if(g== ""){
    alert("City must be selected out");
    return false;
  }
  if (h == "") {
    alert("Dealer must be selected out");
    return false;
  }
  if (j == "") {
    alert("Conditions must be selected out");
    return false;
  }
  
  else{
    alert ("Your interest have been submitted . ");
    window.location = "connection.php";
    return false;

  }
}


let generateOTP = () => {
  const otplength = 6;
  const otp = Math.floor(Math.random() * Math.pow(10,otplength));
  document.getElementById("otpDisplay").
  innerText = otp;
};

document.getElementById("generateBtn").
addEventListener("click",generateOTP);
