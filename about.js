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
    
    
    
    function dom(){
      const canvas = document.querySelector("#home>canvas");
      const context = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    })
    
    
  function files(index) {
      var data =`https://i.postimg.cc/NjpCHK31/Image1.jpg
      https://i.postimg.cc/J4QPfy49/Image2.jpg
      https://i.postimg.cc/NFqdcmXw/Image3.jpg
      https://i.postimg.cc/8PGZXdDR/Image4.jpg
      https://i.postimg.cc/j2HZd26n/Image5.jpg
      https://i.postimg.cc/DZbxHB8g/Image6.jpg
      https://i.postimg.cc/8CYyZqPc/Image7.jpg
      https://i.postimg.cc/zfvtSJN4/Image8.jpg
      https://i.postimg.cc/sgDwsVM1/Image9.jpg
      https://i.postimg.cc/BZHhC7WZ/Image10.jpg
      https://i.postimg.cc/bv4Txk32/Image11.jpg
      https://i.postimg.cc/RZsG0jtd/Image12.jpg
      https://i.postimg.cc/7L59JmMk/Image13.jpg
      https://i.postimg.cc/vB9v3TN2/Image14.jpg
      https://i.postimg.cc/dQ2BC7dL/Image15.jpg
      https://i.postimg.cc/SRhf5q0S/Image16.jpg
      https://i.postimg.cc/C5ssptYj/Image17.jpg
      https://i.postimg.cc/zXqkFJSp/Image18.jpg
      https://i.postimg.cc/RVGLPjgm/Image19.jpg
      https://i.postimg.cc/L8XBGNW1/Image20.jpg
      https://i.postimg.cc/Njz7tRhP/Image21.jpg
      https://i.postimg.cc/2yGhKZFG/Image22.jpg
      https://i.postimg.cc/Pxmm1cCB/Image23.jpg
      https://i.postimg.cc/brp1gTbd/Image24.jpg
      https://i.postimg.cc/sXFYQygY/Image25.jpg
      https://i.postimg.cc/NfNR8R0f/Image26.jpg
      https://i.postimg.cc/HsWQ76dh/Image27.jpg
      https://i.postimg.cc/FH8c8mcM/Image28.jpg
      https://i.postimg.cc/fRJm8k37/Image29.jpg
      https://i.postimg.cc/0NSmq30b/Image30.jpg
      https://i.postimg.cc/hjbdXdwn/Image31.jpg
      https://i.postimg.cc/fLhdWK85/Image32.jpg
      https://i.postimg.cc/rsVtxpXr/Image33.jpg
      https://i.postimg.cc/3r1G72mC/Image34.jpg
      https://i.postimg.cc/TYPDPhc8/Image35.jpg
      https://i.postimg.cc/RZ6Jc88X/Image36.jpg
      https://i.postimg.cc/SxB2Vdbq/Image37.jpg
      https://i.postimg.cc/1zDgdFyF/Image38.jpg
      https://i.postimg.cc/cHZKGJJb/Image39.jpg
      https://i.postimg.cc/cHmvxNg4/Image40.jpg
      https://i.postimg.cc/Y0ChjyYN/Image41.jpg
      https://i.postimg.cc/44WYjsRW/Image42.jpg
      https://i.postimg.cc/kXD2mznq/Image43.jpg
      https://i.postimg.cc/cLn6K3gz/Image44.jpg
      https://i.postimg.cc/nLKz2t1Y/Image45.jpg
      https://i.postimg.cc/7YcfY967/Image46.jpg
      https://i.postimg.cc/8CgcLCLz/Image47.jpg
      https://i.postimg.cc/mDbr66Xx/Image48.jpg
      https://i.postimg.cc/V6DNyBpJ/Image49.jpg
      https://i.postimg.cc/1XX3yV1J/Image50.jpg
      https://i.postimg.cc/8cYPck1D/Image51.jpg
      https://i.postimg.cc/FFCKDp0q/Image52.jpg
      https://i.postimg.cc/kXVgZSc5/Image53.jpg
      https://i.postimg.cc/Fs2HQKWV/Image54.jpg
      https://i.postimg.cc/Z5pKYhXt/Image55.jpg
      https://i.postimg.cc/9f2Xrnj4/Image56.jpg
      https://i.postimg.cc/TPcdmJRt/Image57.jpg
      https://i.postimg.cc/1t59KVXs/Image58.jpg
      https://i.postimg.cc/hjyKZ4Qx/Image59.jpg
      https://i.postimg.cc/rsDMB65H/Image60.jpg
      https://i.postimg.cc/BQ1JN0SL/Image61.jpg
      https://i.postimg.cc/RCYMcFBx/Image62.jpg
      https://i.postimg.cc/NjqBzzFN/Image63.jpg
      https://i.postimg.cc/9QdC5Yqc/Image64.jpg
      https://i.postimg.cc/nLnZH9vB/Image65.jpg
      https://i.postimg.cc/k5wCDMcZ/Image66.jpg
      https://i.postimg.cc/gJJWh9t0/Image67.jpg
      https://i.postimg.cc/G251JM6x/Image68.jpg
      https://i.postimg.cc/sxGCnYrd/Image69.jpg
      https://i.postimg.cc/h4NXKMhm/Image70.jpg
      https://i.postimg.cc/qBNtfWB0/Image71.jpg
      https://i.postimg.cc/m2MtkMF5/Image72.jpg
      https://i.postimg.cc/qvxqXTwc/Image73.jpg
      https://i.postimg.cc/wjp3mvXT/Image74.jpg
      https://i.postimg.cc/tgRTBMvK/Image75.jpg
      https://i.postimg.cc/TPkPFJZp/Image76.jpg
      https://i.postimg.cc/63yQXGXz/Image77.jpg
      https://i.postimg.cc/d1pVttQF/Image78.jpg
      https://i.postimg.cc/sfG2HSKg/Image79.jpg
      https://i.postimg.cc/VvtLSQ5C/Image80.jpg
      https://i.postimg.cc/HsGkqxP4/Image81.jpg
      https://i.postimg.cc/m2QgBsvx/Image82.jpg
      https://i.postimg.cc/3xYJwqhk/Image83.jpg
      https://i.postimg.cc/dV6QZ9Q4/Image84.jpg
      https://i.postimg.cc/N0PgpfHX/Image85.jpg
      https://i.postimg.cc/8CCpRrjD/Image86.jpg
      https://i.postimg.cc/76Gqc83W/Image87.jpg
      https://i.postimg.cc/Xq94jfDK/Image88.jpg
      https://i.postimg.cc/bYnz9PNG/Image89.jpg
      https://i.postimg.cc/Qxrj6zHf/Image90.jpg
      https://i.postimg.cc/02dPhCSP/Image91.jpg
      https://i.postimg.cc/2SkrYBdv/Image92.jpg
      https://i.postimg.cc/K80F8vQW/Image93.jpg
      https://i.postimg.cc/q7grhV5v/Image94.jpg
      https://i.postimg.cc/25JDncsF/Image95.jpg
      https://i.postimg.cc/3RvH1j7M/Image96.jpg
      https://i.postimg.cc/L5FFbq6J/Image97.jpg
      https://i.postimg.cc/br0fczs3/Image98.jpg
      https://i.postimg.cc/598VFmnL/Image99.jpg
      https://i.postimg.cc/ZKZhPyMg/Image100.jpg
      https://i.postimg.cc/W11LCcjw/Image101.jpg
      https://i.postimg.cc/pd3wm9js/Image102.jpg
      https://i.postimg.cc/8zXQVXzQ/Image103.jpg
      https://i.postimg.cc/7LCvP15C/Image104.jpg
      https://i.postimg.cc/1t6Lw9cs/Image105.jpg
      https://i.postimg.cc/Hn9RvBhN/Image106.jpg
      https://i.postimg.cc/Kj2C5dJL/Image107.jpg
      https://i.postimg.cc/PrdBvnLn/Image108.jpg
      https://i.postimg.cc/CLJ9jrDB/Image109.jpg
      https://i.postimg.cc/vZBkX7LP/Image110.jpg
      https://i.postimg.cc/Sxv5PXgm/Image111.jpg
      https://i.postimg.cc/W4qKc2yg/Image112.jpg
      https://i.postimg.cc/KzXWZ6XV/Image113.jpg
      https://i.postimg.cc/DZqMmxnz/Image114.jpg
      https://i.postimg.cc/1XB7r4gh/Image115.jpg
      https://i.postimg.cc/ncVPcK5H/Image116.jpg
      https://i.postimg.cc/BQhw8L92/Image117.jpg
      https://i.postimg.cc/htfZVDc6/Image118.jpg
      https://i.postimg.cc/132CHkzt/Image119.jpg
      https://i.postimg.cc/JnWTwjZC/Image120.jpg
      https://i.postimg.cc/nzY3nMGj/Image121.jpg
      https://i.postimg.cc/6qWYqwMH/Image122.jpg
      https://i.postimg.cc/SQdg52KH/Image123.jpg
      https://i.postimg.cc/Nf0dws9F/Image124.jpg
      https://i.postimg.cc/wTb0qCLV/Image125.jpg
      https://i.postimg.cc/Gm8zHXj1/Image126.jpg
      https://i.postimg.cc/t4KkPFrn/Image127.jpg
      https://i.postimg.cc/Zq6cL0g7/Image128.jpg
      https://i.postimg.cc/Y93zJZtQ/Image129.jpg
      https://i.postimg.cc/Kj8DFfYw/Image130.jpg
      https://i.postimg.cc/V61FZmPY/Image131.jpg
      https://i.postimg.cc/wM4cBNyv/Image132.jpg
      https://i.postimg.cc/RCgTdksB/Image133.jpg
      https://i.postimg.cc/DymPMxHb/Image134.jpg
      https://i.postimg.cc/bNM9cQfV/Image135.jpg
      https://i.postimg.cc/sgh9VvVj/Image136.jpg
      https://i.postimg.cc/HL10jdxQ/Image137.jpg
      https://i.postimg.cc/CKCGqXB9/Image138.jpg
      https://i.postimg.cc/xCtLsmPR/Image139.jpg
      https://i.postimg.cc/KzZnrftj/Image140.jpg
      https://i.postimg.cc/tJJW8gSH/Image141.jpg
      https://i.postimg.cc/MHLVw8Nf/Image142.jpg
      https://i.postimg.cc/9XgGZG0X/Image143.jpg
      https://i.postimg.cc/Yq4Q3hL6/Image144.jpg
      https://i.postimg.cc/GpjD2D6C/Image145.jpg
      https://i.postimg.cc/B6QK16G1/Image146.jpg
      https://i.postimg.cc/tTSVdjXv/Image147.jpg
      https://i.postimg.cc/J0SDg5Hb/Image148.jpg
      https://i.postimg.cc/XqrBQzqj/Image149.jpg
      https://i.postimg.cc/kMHbBqYB/Image150.jpg
      https://i.postimg.cc/tCVV6w8D/Image151.jpg
      https://i.postimg.cc/rwXRNgkT/Image152.jpg
      https://i.postimg.cc/P5Wp3ZXw/Image153.jpg
      https://i.postimg.cc/25CqP6yX/Image154.jpg
      https://i.postimg.cc/7LXCDkTP/Image155.jpg
      https://i.postimg.cc/cHHvLbQR/Image156.jpg
      https://i.postimg.cc/fySkxSqk/Image157.jpg
      https://i.postimg.cc/ZRMCBxc1/Image158.jpg
      https://i.postimg.cc/Lhd5v4GD/Image159.jpg
      https://i.postimg.cc/zDykdd9H/Image160.jpg
      https://i.postimg.cc/jdN4TDqs/Image161.jpg
      https://i.postimg.cc/bY494xhC/Image162.jpg
      https://i.postimg.cc/jjqHyvH5/Image163.jpg
      https://i.postimg.cc/RZBQZvqw/Image164.jpg
      https://i.postimg.cc/s2npmSmJ/Image165.jpg
      https://i.postimg.cc/Y9ZQKHJG/Image166.jpg
      https://i.postimg.cc/zvhKqQrd/Image167.jpg
      https://i.postimg.cc/ZYvrPWdr/Image168.jpg
      https://i.postimg.cc/HsGb6TwF/Image169.jpg
      https://i.postimg.cc/3Jgm6z9N/Image170.jpg
      https://i.postimg.cc/6ptnNz10/Image171.jpg
      https://i.postimg.cc/3x1prpsH/Image172.jpg
      https://i.postimg.cc/HLLMrnm8/Image173.jpg
      https://i.postimg.cc/9fN7Z2X8/Image174.jpg
      https://i.postimg.cc/NM9rxn5g/Image175.jpg
      https://i.postimg.cc/Qt2KYqTc/Image176.jpg
      https://i.postimg.cc/VstCr2xg/Image177.jpg
      https://i.postimg.cc/1XDnkNG2/Image178.jpg
      https://i.postimg.cc/TYXWrCG6/Image179.jpg
      https://i.postimg.cc/HkYcNnVv/Image180.jpg
      https://i.postimg.cc/QMVBXzgp/Image181.jpg
      https://i.postimg.cc/rpbDz9g7/Image182.jpg
      https://i.postimg.cc/cHnr38bC/Image183.jpg
      https://i.postimg.cc/J0Ct54fq/Image184.jpg
      https://i.postimg.cc/QCgC4Zsr/Image185.jpg
      https://i.postimg.cc/L4jJ6LP0/Image186.jpg
      https://i.postimg.cc/yYPW0Kvm/Image187.jpg
      https://i.postimg.cc/DyF8W0df/Image188.jpg
      https://i.postimg.cc/VkkvRhV3/Image189.jpg
      https://i.postimg.cc/mrcDxHRj/Image190.jpg
      https://i.postimg.cc/9MZQ0HDq/Image191.jpg
      https://i.postimg.cc/Y2NSwkc5/Image192.jpg
      https://i.postimg.cc/brPN2VnV/Image193.jpg
      https://i.postimg.cc/QdCN5TBD/Image194.jpg
      https://i.postimg.cc/9fvfcQQh/Image195.jpg
      https://i.postimg.cc/yYvYkP8n/Image196.jpg
      https://i.postimg.cc/BbCZ55cS/Image197.jpg
      https://i.postimg.cc/TYR3dSfp/Image198.jpg
      https://i.postimg.cc/fRPzvRX9/Image199.jpg
      https://i.postimg.cc/N0rgCv7P/Image200.jpg
      https://i.postimg.cc/26QCmdtQ/Image201.jpg
      https://i.postimg.cc/rmXqvZfy/Image202.jpg
      https://i.postimg.cc/C5wSKByW/Image203.jpg
      https://i.postimg.cc/HWtTh2XH/Image204.jpg
      https://i.postimg.cc/kXX73bvS/Image205.jpg
      https://i.postimg.cc/4NLsJxWS/Image206.jpg
      https://i.postimg.cc/y8DBWC5Y/Image207.jpg
      https://i.postimg.cc/Z5XmdDtP/Image208.jpg
      https://i.postimg.cc/LsfpBB2c/Image209.jpg
      https://i.postimg.cc/qRxHWJtQ/Image210.jpg
      https://i.postimg.cc/MTS8sMGv/Image211.jpg
      https://i.postimg.cc/XqN6bRdW/Image212.jpg
      https://i.postimg.cc/rshXFfNr/Image213.jpg
      https://i.postimg.cc/FFGQZKXH/Image214.jpg
      https://i.postimg.cc/dt1cSKJm/Image215.jpg
      https://i.postimg.cc/BnP94cLj/Image216.jpg
      https://i.postimg.cc/yYb4Mrdq/Image217.jpg
      https://i.postimg.cc/W4RR3FgX/Image218.jpg
      https://i.postimg.cc/1zDkNmKP/Image219.jpg
      https://i.postimg.cc/sXcbwT8N/Image220.jpg
      https://i.postimg.cc/ZRZ18GfN/Image221.jpg
      https://i.postimg.cc/sxgq8pCD/Image222.jpg
      https://i.postimg.cc/ryfv4Y5d/Image223.jpg
      https://i.postimg.cc/xT7hxJxn/Image224.jpg
      https://i.postimg.cc/jdCB4QhM/Image225.jpg
      https://i.postimg.cc/y8Z5w1t9/Image226.jpg
      https://i.postimg.cc/g0y72MY2/Image227.jpg
      https://i.postimg.cc/W4cKjRcy/Image228.jpg
      https://i.postimg.cc/d1qxk81m/Image229.jpg
      https://i.postimg.cc/mD86Qt1x/Image230.jpg
      https://i.postimg.cc/C55rJSbR/Image231.jpg
      https://i.postimg.cc/0j4WBFCc/Image232.jpg
      https://i.postimg.cc/gctTjLP8/Image233.jpg
      https://i.postimg.cc/28qXZjzJ/Image234.jpg
      https://i.postimg.cc/6pnjMH4f/Image235.jpg
      https://i.postimg.cc/tCLvt0Jg/Image236.jpg
      https://i.postimg.cc/XvW2mwwS/Image237.jpg
      https://i.postimg.cc/25xHDVwq/Image238.jpg
      https://i.postimg.cc/SsTDn3Hk/Image239.jpg
      https://i.postimg.cc/Gt4zGz1Y/Image240.jpg
      https://i.postimg.cc/mkKjwMbn/Image241.jpg
      https://i.postimg.cc/FF6TNtjx/Image242.jpg
      https://i.postimg.cc/TYWCPk0v/Image243.jpg
      https://i.postimg.cc/9Qdbdrsx/Image244.jpg
      https://i.postimg.cc/zfqj0qrq/Image245.jpg
      https://i.postimg.cc/cJTczPxw/Image246.jpg
      https://i.postimg.cc/d1xjsdT0/Image247.jpg
      https://i.postimg.cc/fLLvQ5yF/Image248.jpg
      https://i.postimg.cc/BZRRNPws/Image249.jpg
      https://i.postimg.cc/gcxfvHsN/Image250.jpg
      https://i.postimg.cc/sxG9vXp4/Image251.jpg
      https://i.postimg.cc/Rqr1fBd5/Image252.jpg
      https://i.postimg.cc/X7FmPNT5/Image253.jpg
      https://i.postimg.cc/bwhWfchB/Image254.jpg
      https://i.postimg.cc/GmxNc73h/Image255.jpg
      https://i.postimg.cc/hG4YhLh8/Image256.jpg
      https://i.postimg.cc/hGC5mX7k/Image257.jpg
      https://i.postimg.cc/XJpDknfp/Image258.jpg
      https://i.postimg.cc/3RVfLz19/Image259.jpg
      https://i.postimg.cc/HnMZF3Pm/Image260.jpg
      https://i.postimg.cc/44HSKN40/Image261.jpg
      https://i.postimg.cc/YqcyQKhC/Image262.jpg
      https://i.postimg.cc/3JgfBSvC/Image263.jpg
      https://i.postimg.cc/0yPWHYGg/Image264.jpg
      https://i.postimg.cc/7Z9sv5X5/Image265.jpg
      https://i.postimg.cc/fbbHMMgB/Image266.jpg
      https://i.postimg.cc/3wbtRzs7/Image267.jpg
      https://i.postimg.cc/cHgX8XW3/Image268.jpg
      https://i.postimg.cc/XJRxKdNz/Image269.jpg
      https://i.postimg.cc/SRcdgRJN/Image270.jpg
      https://i.postimg.cc/nVm3FR0b/Image271.jpg
      https://i.postimg.cc/3JHndXcy/Image272.jpg
      https://i.postimg.cc/Wb6SrdB5/Image273.jpg
      https://i.postimg.cc/Dwv6c2Fn/Image274.jpg
      https://i.postimg.cc/T3t97ZYm/Image275.jpg
      https://i.postimg.cc/hGw0gTmt/Image276.jpg
      https://i.postimg.cc/9fzBvJrk/Image277.jpg
      https://i.postimg.cc/63vfQqVL/Image278.jpg
      https://i.postimg.cc/3NQC0hnM/Image279.jpg
      https://i.postimg.cc/x8GGKZ4X/Image280.jpg
      https://i.postimg.cc/sf5JdBg3/Image281.jpg
      https://i.postimg.cc/gkdHYYx8/Image282.jpg
      https://i.postimg.cc/yYPXxwR5/Image283.jpg
      https://i.postimg.cc/CxxCqmHK/Image284.jpg
      https://i.postimg.cc/52KBqLnS/Image285.jpg
      https://i.postimg.cc/d078W3fP/Image286.jpg
      https://i.postimg.cc/d1rGYXv5/Image287.jpg
      https://i.postimg.cc/mr07KRxc/Image288.jpg
      https://i.postimg.cc/d3FrtBVw/Image289.jpg
      https://i.postimg.cc/NFxTyHKT/Image290.jpg
      https://i.postimg.cc/T2jnNZtw/Image291.jpg
      https://i.postimg.cc/7Yx0FmRN/Image292.jpg
      https://i.postimg.cc/yYvcs04C/Image293.jpg
      https://i.postimg.cc/P5JZxNTp/Image294.jpg
      https://i.postimg.cc/y8GRSB8f/Image295.jpg
      https://i.postimg.cc/zfRgCMLq/Image296.jpg
      https://i.postimg.cc/C1TfmNDk/Image297.jpg
      https://i.postimg.cc/j5Hn97Q9/Image298.jpg
      https://i.postimg.cc/QCjKrdfM/Image299.jpg
      `;
      return data.split("\n")[index];
  }
  
  const frameCount = 290;
  
  const images = [];
  const imageSeq = {
    frame: 0
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        scrub:2,
        pin:true,
        trigger:"#home",
    },
    onUpdate: render
  });
  
  images[0].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context)
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height,
    centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
  }
  
  gsap.to("#home canvas",{
    scale:0.8,
    scrollTrigger:{
        scrub:.2,
        trigger:"#home",
        start:"bottom 100%",
        // markers:true,
    },
  })
  ScrollTrigger.create({
    trigger:"#home",
    pin:true,
    start:"bottom 100%",
  })
  
  }
  dom()

  function page2Animation(){
  gsap.from("#page2 h4",{
    x:1350,
    stagger:0.2,
    duration:1,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 22%",
        end:"top 23%",
        //markers: true,
        scrub:6,
    }

})
    
gsap.from("#h1line1",{
  y:400,
  stagger:0.2,
  duration:1,
  scrollTrigger:{
      trigger:"#page2",
      scroller:"body",
      start:"top 22%",
      end:"top 23%",
      //markers: true,
      scrub:3,
  }
})
gsap.from("#page3 h4",{
  x:1350,
  stagger:0.2,
  duration:1,
  scrollTrigger:{
      trigger:"#h1line1",
      scroller:"body",
      start:"top 22%",
      end:"top 23%",
     //markers: true,
      scrub:6,
  }

})
gsap.from("#h1line2",{
y:400,
stagger:0.2,
duration:1,
scrollTrigger:{
    trigger:"#h1line1",
    scroller:"body",
    start:"top 24%",
    end:"top 25%",
   // markers: true,
    scrub:4,
}

})

}
page2Animation()
    
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