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


function validatePhoneNumber() {
  // Get and trim phone number input
  const phoneNumber = document.getElementById('mobile_no').value.trim();

  // Regex pattern for 10-digit phone number
  const pattern = /^\d{10}$/;

  // Validate phone number and update message
  const isValid = pattern.test(phoneNumber);
  document.getElementById('phoneValidationMsg').textContent = isValid ? '' : 'Please enter a valid 10-digit phone number.';

  // Return validation status
  return isValid;
}

document.addEventListener('DOMContentLoaded', function() {

  // Event listener for form submission
  document.getElementById('myForm').addEventListener('submit', function(event) {

      // Validate phone number; prevent submission if invalid
      if (!validatePhoneNumber()) {
          event.preventDefault(); // Stops form submission for invalid number
      }
  });
});


$(document).ready(function () {
  $("#Model").change(function () {
      var val = $(this).val();
      if (val == "SELTOS") {
          $("#Varient").html("<option value='SELTOS HTE(Diesel 1.5 iMT)'>SELTOS: HTE(Diesel 1.5 iMT)</option><option value='SELTOS HTK(Diesel 1.5 iMT)'>SELTOS : HTK(Diesel 1.5 iMT)</option><option value='SELTOS HTK Plus(Diesel 1.5 iMT)'>SELTOS: HTK Plus(Diesel 1.5 iMT)</option><option value='SELTOS HTX(Diesel 1.5 iMT)'>SELTOS : HTX(Diesel 1.5 iMT)</option><option value='SELTOS HTX(Diesel 1.5 AT)'>SELTOS : HTX(Diesel 1.5 AT)</option><option value='SELTOS HTX Plus(Diesel 1.5 iMT)'>SELTOS : HTX Plus(Diesel 1.5iMT)</option><option value='SELTOS GTX Plus S(Diesel 1.5 AT)'>SELTOS: GTX Plus S (Diesel 1.5 AT)</option><option value='SELTOS GTX Plus AT(Diesel 1.5)'>SELTOS : GTX Plus AT(Diesel 1.5)</option><option value='SELTOS X-Line S AT(Diesel 1.5)'>SELTOS : X-Line S AT(Diesel 1.5)</option><option value='SELTOS X-Line AT(Diesel 1.5)'>SELTOS : X-Line AT(Diesel 1.5)</option><option value='SELTOS HTE(Petrol 1.5 MT)'>SELTOS: HTE(Petrol 1.5 MT)</option><option value='SELTOS HTK(Petrol 1.5 MT)'>SELTOS : HTK(Petrol 1.5 MT)</option><option value='SELTOS HTK Plus(Petrol 1.5 MT)'>SELTOS: HTK Plus(Petrol 1.5 MT)</option><option value='SELTOS HTX(Petrol 1.5 MT)'>SELTOS : HTX(Petrol 1.5 MT)</option><option value='SELTOS HTX(Petrol 1.5 IVT)'>SELTOS: HTX(Petrol 1.5 IVT)</option><option value='SELTOS HTX Plus(Turbo Petrol 1.5 iMT)'>SELTOS : HTX Plus(Turbo Petrol 1.5 iMT)</option><option value='SELTOS HTK Plus (Turbo Petrol 1.5 iMT)'>SELTOS: HTK Plus (Turbo Petrol 1.5 iMT)</option><option value='SELTOS GTX Plus S(Turbo Petrol 1.5 DCT)'>SELTOS : GTX Plus S(Turbo Petrol 1.5 DCT)</option><option value='SELTOS GTX Plus (Turbo Petrol 1.5 DCT)'>SELTOS : GTX Plus (Turbo Petrol 1.5 DCT)</option><option value='SELTOS X-Line S(Turbo Petrol 1.5 DCT)'>SELTOS : X-Line S(Turbo Petrol 1.5 DCT)</option><option value='SELTOS X-Line(Turbo Petrol 1.5 DCT)'>SELTOS : X-Line(Turbo Petrol 1.5 DCT)</option>");
      } else if (val == "SONET") {
          $("#Varient").html("<option value='SONET HTE(Diesel 1.5 iMT)'>SONET: HTE(Diesel 1.5 iMT)</option><option value='SONET HTK(Diesel 1.5 iMT)'>SONET : HTK(Diesel 1.5 iMT)</option><option value='SONET HTK Plus(Diesel 1.5 iMT)'>SONET: HTK Plus(Diesel 1.5 iMT)</option><option value='SONET HTX(Diesel 1.5 iMT)'>SONET : HTX(Diesel 1.5 iMT)</option><option value='SONET HTX(Diesel 1.5 AT)'>SONET : HTX(Diesel 1.5 AT)</option><option value='SONET HTX Plus(Diesel 1.5 iMT)'>SONET : HTX Plus(Diesel 1.5iMT)</option><option value='SONET GTX Plus S(Diesel 1.5 AT)'>SONET: GTX Plus S (Diesel 1.5 AT)</option><option value='SONET GTX Plus AT(Diesel 1.5)'>SONET : GTX Plus AT(Diesel 1.5)</option><option value='SONET X-Line S AT(Diesel 1.5)'>SONET : X-Line S AT(Diesel 1.5)</option><option value='SONET X-Line S AT(Diesel 1.5)'>SONET : X-Line AT(Diesel 1.5)</option><option value='SONET HTE(Petrol 1.5 MT)'>SONET: HTE(Petrol 1.5 MT)</option><option value='SONET HTK(Petrol 1.5 MT)'>SONET : HTK(Petrol 1.5 MT)</option><option value='SONET HTK Plus(Petrol 1.5 MT)'>SONET: HTK Plus(Petrol 1.5 MT)</option><option value='SONET HTX(Petrol 1.5 MT)'>SONET : HTX(Petrol 1.5 MT)</option><option value='SONET HTX(Petrol 1.5 IVT)'>SONET: HTX(Petrol 1.5 IVT)</option><option value='SONET HTX Plus(Turbo Petrol 1.5 iMT)'>SONET : HTX Plus(Turbo Petrol 1.5 iMT)</option><option value='SONET HTK Plus (Turbo Petrol 1.5 iMT)'>SONET: HTK Plus (Turbo Petrol 1.5 iMT)</option><option value='SONET GTX Plus S(Turbo Petrol 1.5 DCT)'>SONET : GTX Plus S(Turbo Petrol 1.5 DCT)</option><option value='SONET GTX Plus (Turbo Petrol 1.5 DCT)'>SONET : GTX Plus (Turbo Petrol 1.5 DCT)</option><option value='SONET X-Line S(Turbo Petrol 1.5 DCT)'>SONET : X-Line S(Turbo Petrol 1.5 DCT)</option><option value='SONET X-Line(Turbo Petrol 1.5 DCT)'>SONET : X-Line(Turbo Petrol 1.5 DCT)</option>");
      } else if (val == "EV6") {
          $("#Varient").html("<option value='GT line'>EV6: GT line</option><option value='GT line AWD'>EV6 : GT line AWD</option>");
      } else if (val == "model") {
          $("#Varient").html("<option value=''>*Varient</option>");
      }
  });
  $("#Varient").change(function () {
      var val = $(this).val();
      if (val == "SELTOS HTE(Diesel 1.5 iMT)") {
          $("#Price").html("<option value='10,899,00'>Price :10,899,00</option>");
      } else if (val == "SELTOS HTK(Diesel 1.5 iMT)") {
          $("#Price").html("<option value='11,999,00'>Price:11,999,00</option> ");
      } else if (val == "SELTOS HTK Plus(Diesel 1.5 iMT)") {
          $("#Price").html("<option value='14,999,00'>Price: 14,999,00</option>");
      } else if (val == "SELTOS HTX(Diesel 1.5 iMT)") {
        $("#Price").html("<option value='16,699,00'>Price:16,699,00</option> ");
    } else if (val == "SELTOS X-Line S AT(Diesel 1.5)") {
        $("#Price").html("<option value='19,599,00'>Price: 19,599,00</option>");
    } else if (val == "SELTOS X-Line AT(Diesel 1.5)") {
      $("#Price").html("<option value='20,299,00'>Price:20,299,00</option> ");
  } else if (val == "SELTOS HTE(Petrol 1.5 MT)") {
      $("#Price").html("<option value='10,899,00'>Price: 10,899,00</option>");
  } else if (val == "SELTOS HTK(Petrol 1.5 MT)") {
    $("#Price").html("<option value='12,099,00'>Price:11,999,00</option> ");
} else if (val == "SELTOS HTX(Diesel 1.5 AT)") {
    $("#Price").html("<option value='18,199,00'>Price: 18,199,00</option>");
} else if (val == "SELTOS HTX Plus(Diesel 1.5 iMT)") {
  $("#Price").html("<option value='18,199,00'>Price:18,199,00</option> ");
} else if (val == "SELTOS GTX Plus S(Diesel 1.5 AT)") {
  $("#Price").html("<option value='19,199,00'>Price: 19,199,00</option>");
} else if (val == "SELTOS GTX Plus AT(Diesel 1.5)") {
  $("#Price").html("<option value='19,999,00'>Price:19,999,00</option> ");
} else if (val == "SELTOS HTK Plus(Petrol 1.5 MT)") {
  $("#Price").html("<option value='13,499,00'>Price: 14,999,00</option>");
} else if (val == "SELTOS HTX(Petrol 1.5 MT)") {
  $("#Price").html("<option value='15,199,00'>Price:15,199,00</option> ");
} else if (val == "SELTOS HTX(Petrol 1.5 IVT)") {
  $("#Price").html("<option value='16,699,00'>Price: 16,99,00</option>");
} else if (val == "SELTOS HTX Plus(Turbo Petrol 1.5 iMT)") {
  $("#Price").html("<option value='13,499,00'>Price: 14,999,00</option>");
} else if (val == "SELTOS HTK Plus(Turbo Petrol 1.5 iMT)") {
  $("#Price").html("<option value='14,999,00'>Price:14,999,00</option> ");
} else if (val == "SELTOS GTX Plus S(Turbo Petrol 1.5 DCT)") {
  $("#Price").html("<option value='19,399,00'>Price: 19,39,00</option>");
} else if (val == "SELTOS GTX Plus (Turbo Petrol 1.5 DCT)") {
  $("#Price").html("<option value='19,999,00'>Price: 19,99,00</option>");
} else if (val == "SELTOS X-Line S(Turbo Petrol 1.5 DCT)") {
  $("#Price").html("<option value='19,599,00'>Price: 19,599,00</option>");
} else if (val == "SELTOS X-Line(Turbo Petrol 1.5 DCT)") {
  $("#Price").html("<option value='20,299,00'>Price:20,299,00</option> ");
} else if (val == "SONET HTE(Diesel 1.5 iMT)") {
  $("#Price").html("<option value='10,899,00'>Price :10,899,00</option>");
} else if (val == "SONET HTK(Diesel 1.5 iMT)") {
  $("#Price").html("<option value='11,999,00'>Price:11,999,00</option> ");
} else if (val == "SONET HTK Plus(Diesel 1.5 iMT)") {
  $("#Price").html("<option value='14,999,00'>Price: 14,999,00</option>");
} else if (val == "SONET HTX(Diesel 1.5 iMT)") {
$("#Price").html("<option value='16,699,00'>Price:16,699,00</option> ");
} else if (val == "SONET X-Line S AT(Diesel 1.5)") {
$("#Price").html("<option value='19,599,00'>Price: 19,599,00</option>");
} else if (val == "SONET X-Line AT(Diesel 1.5)") {
$("#Price").html("<option value='20,299,00'>Price:20,299,00</option> ");
} else if (val == "SONET HTE(Petrol 1.5 MT)") {
$("#Price").html("<option value='10,899,00'>Price: 10,899,00</option>");
} else if (val == "SONET HTK(Petrol 1.5 MT)") {
$("#Price").html("<option value='12,099,00'>Price:11,999,00</option> ");
} else if (val == "SONET HTX(Diesel 1.5 AT)") {
$("#Price").html("<option value='18,199,00'>Price: 18,199,00</option>");
} else if (val == "SONET HTX Plus(Diesel 1.5 iMT)") {
$("#Price").html("<option value='18,199,00'>Price:18,199,00</option> ");
} else if (val == "SONET GTX Plus S(Diesel 1.5 AT)") {
$("#Price").html("<option value='19,199,00'>Price: 19,199,00</option>");
} else if (val == "SONET GTX Plus AT(Diesel 1.5)") {
$("#Price").html("<option value='19,999,00'>Price:19,999,00</option> ");
} else if (val == "SONET HTK Plus(Petrol 1.5 MT)") {
$("#Price").html("<option value='13,499,00'>Price: 14,999,00</option>");
} else if (val == "SONET HTX(Petrol 1.5 MT)") {
$("#Price").html("<option value='15,199,00'>Price:15,199,00</option> ");
} else if (val == "SONET HTX(Petrol 1.5 IVT)") {
$("#Price").html("<option value='16,699,00'>Price: 16,99,00</option>");
} else if (val == "SONET HTX Plus(Turbo Petrol 1.5 iMT)") {
$("#Price").html("<option value='13,499,00'>Price: 14,999,00</option>");
} else if (val == "SONET HTK Plus(Turbo Petrol 1.5 iMT)") {
$("#Price").html("<option value='14,999,00'>Price:14,999,00</option> ");
} else if (val == "SONET GTX Plus S(Turbo Petrol 1.5 DCT)") {
$("#Price").html("<option value='19,399,00'>Price: 19,39,00</option>");
} else if (val == "SONET GTX Plus (Turbo Petrol 1.5 DCT)") {
$("#Price").html("<option value='19,999,00'>Price: 19,99,00</option>");
} else if (val == "SONET X-Line S(Turbo Petrol 1.5 DCT)") {
$("#Price").html("<option value='19,599,00'>Price: 19,599,00</option>");
} else if (val == "SONET X-Line(Turbo Petrol 1.5 DCT)") {
$("#Price").html("<option value='20,299,00'>Price:20,299,00</option> ");
} else if (val == "GT line") {
  $("#Price").html("<option value='60,950,00'>Price: 60,950,00</option>");
  } else if (val == "GT line AWD") {
  $("#Price").html("<option value='65,950,00'>Price:65,950,00</option> ");
  } else if (val == "") {
          $("#Price").html("<option value='P'>*Price</option>");
      }
  });
});


function validateForm() {
  let x = document.forms["myForm3"]["Salutation"].value;
  let y = document.forms["myForm3"]["first_name"].value;
  let a = document.forms["myForm3"]["last_name"].value;
  let b = document.forms["myForm3"]["email"].value;
  let c = document.forms["myForm3"]["adhaar_no"].value;
  let d = document.forms["myForm3"]["mobile_no"].value;
  let e = document.forms["myForm3"]["State"].value;
  let f = document.forms["myForm3"]["City"].value;
  let g = document.forms["myForm3"]["Model"].value;
  let h = document.forms["myForm3"]["Varient"].value;
  let j = document.forms["myForm3"]["Price"].value;
  let i = document.forms["myForm3"]["firstname"].value;
  let k = document.forms["myForm3"]["mail"].value;
  let l = document.forms["myForm3"]["address"].value;
  let m = document.forms["myForm3"]["city"].value;
  let n = document.forms["myForm3"]["zip"].value;
  let o = document.forms["myForm3"]["cname"].value;
  let p = document.forms["myForm3"]["ccnum"].value;
  let q = document.forms["myForm3"]["expmonth"].value;
  let r = document.forms["myForm3"]["expyear"].value;
  let s = document.forms["myForm3"]["cvv"].value;
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
    alert("Email ID Name must be filled out");
    return false;
  }
  if(c== ""){
    alert("ADHAAR NO. must be filled out");
    return false;
  }
  if(d== ""){
    alert("MOBILE NO. must be filled out");
    return false;
  }
  if(e== ""){
    alert("STATE must be filled out");
    return false;
  }
  if(f== ""){
    aler_("CITY must be filled out");
    return false;
  }
  
  if(g== ""){
    alert("Model must be selected out");
    return false;
  }
  if(h== ""){
    alert("VARIENT must be selected out");
    return false;
  }
  if (j == "") {
    alert("PRICE must be selected out");
    return false;
  }

  if (i == "") {
    alert("firstname must be filled out.");
    return false;
  }
  if(k == ""){
    alert("mail must be filled out");
    return false;
  }
  if(l== ""){
    alert("address must be filled out");
    return false;
  }
  if(m== ""){
    alert("city Name must be filled out");
    return false;
  }
  if(n== ""){
    alert("Zip Code must be filled out");
    return false;
  }
  if(o== ""){
    alert("cname must be filled out");
    return false;
  }
  if(p== ""){
    alert("card No. must be filled out");
    return false;
  }
  if(q== ""){
    aler_("ExpMonth must be filled out");
    return false;
  }
  
  if(r== ""){
    alert("ExpYear be selected out");
    return false;
  }
  if(s== ""){
    alert("CVV must be filled out");
    return false;
  }
  
  else{
    alert ("Let Me Check for Enteries.");
    window.location = "buy.php";
    return false;

  }
}



