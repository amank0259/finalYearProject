let loaderAnimation = function(){
  var tl2 = gsap.timeline();

tl2.to("#main",{
  dsiaplay: "none",
  opacity: "0",
  height: "0vh"
})
.to(".loader-text-content",{
    marginTop: "0vh",
    duration: 1,
})
.to(".loader-text-content",{
    marginTop: "-14vh",
    duration: 1,
})
.to(".loader-text-content",{
    marginTop: "-28vh",
    duration: 1,
})
.to(".loader-text-content",{
    marginTop: "-42vh",
    duration: 1,
})
.to(".loader-text-content",{
    marginTop: "-56vh",
    duration: 1,
})
.to(".loader-text-content",{
    marginTop: "-70vh",
    duration: 1,
})
.to(".loader-text-content",{
    marginTop: "-84vh",
    duration: 1,
})
.to(".loader-text-content",{
    marginTop: "-98vh",
    duration: 1,
})
.to(".loader-img",{
    width: "100%",
    height: "100vh",
    opacity: "0"
},'same')
.to("#loader",{
    dsiaplay: "none",
    opacity: "0",
},'same')
.to("#loader",{
    marginTop: "-49%",
})
.to("#main",{
  dsiaplay: "block",
  opacity: 1,
  height: "300vh"
})

var nike = document.getElementById("loader");
var tilt = 0;
var diftilt = 0;
nike.addEventListener("mousemove",function(detail){
    tilt = detail.clientX;
    diftilt = detail.clientX - tilt;
    gsap.to("#nike",{
        ease: Power1,
        top: detail.clientY,
        left: detail.clientX,
        xPercent: -170,
        yPercent: -90,
        rotate: gsap.utils.clamp(-80,80, diftilt * 0.5)
    })
})
}

let magnetForIcon = function(){

let cursor = document.getElementById("cursor"),
  item = document.querySelector(".magnet-area"),
  icon = document.querySelector(".magnet"),
  itemData;

document.addEventListener("mousemove", moveCursor);
item.addEventListener("pointerenter", stickCursor);

item.addEventListener("mousemove", (e) => {
  event.stopPropagation();
  const position = item.getBoundingClientRect();

  let x = e.pageX - position.left - position.width / 2;
  let y = e.pageY - position.top - position.height / 2;

  item.style.transform = `translate( ${x * 0.25}px, ${y * 0.25}px)`;
  cursor.style.transform = `translate( ${x * 0.25}px, ${y * 0.25}px)`;
  icon.style.transform = `translate( ${x * 0.25}px, ${y * 0.25}px)`;

  icon.style.transition = `all .3s cubic-bezier(0.16, 1, 0.3, 1)`;
});

item.addEventListener("mouseout", (e) => {
  const position = item.getBoundingClientRect();

  let x = e.pageX - position.left - position.width / 2;
  let y = e.pageY - position.top - position.height / 2;

  item.style.transform = `translate( 0px, 0px)`;
  cursor.style.transform = `translate( 0px, 0px)`;
  icon.style.transform = `translate( 0px, 0px)`;

  item.style.transition = `all .3s cubic-bezier(0.16, 1, 0.3, 1)`;
});

item.addEventListener("pointerleave", resetCursor);

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
  cursor.style.transform = `translate(-50%,-50%)`;
}

function getData() {
  itemData = item.getBoundingClientRect();
}

function centerCursor(e) {
  getData();
  cursor.style.height = `${itemData.height}px`;
  cursor.style.width = `${itemData.width}px`;
  cursor.style.top = `${itemData.y}px`;
  cursor.style.left = `${itemData.x}px`;
  cursor.style.borderRadius = `8px`;
  cursor.style.transition = `all .25s cubic-bezier(0.16, 1, 0.3, 1)`;
}

function stickCursor() {
  event.stopPropagation();
  document.removeEventListener("mousemove", moveCursor);
  centerCursor();
}

function resetCursor() {
  event.stopPropagation();
  document.addEventListener("mousemove", moveCursor);
  cursor.style.height = `48px`;
  cursor.style.width = `48px`;
  cursor.style.borderRadius = `50%`;
  cursor.style.transition = `height 0.3s cubic-bezier(0.16, 1, 0.3, 1), width 0.3s cubic-bezier(0.16, 1, 0.3, 1)`;
}
}

let leftImageChange = function(){
    document.querySelector(".img-1").addEventListener("mouseover", function() {
        this.classList.add("img-change");
      });
      
      document.querySelector(".img-1").addEventListener("mouseout", function() {
        this.classList.remove("img-change");
      });
      
}

let rightImageChange = function(){
    document.querySelector(".right-img").addEventListener("mouseover", function() {
        this.classList.add("img-change-2");
      });
      
      document.querySelector(".right-img").addEventListener("mouseout", function() {
        this.classList.remove("img-change-2");
      });
      
}

let serviceListHover = function(){
  document.querySelector(".ser-1").addEventListener("mousemove", function(){
    document.querySelector(".h-div-1").style.top="0%";
    document.querySelector(".ser-1").style.cursor="pointer";
  })
  document.querySelector(".ser-1").addEventListener("mouseleave",function(){
    document.querySelector(".h-div-1").style.top="100%";
  })
  
  document.querySelector(".ser-2").addEventListener("mousemove", function(){
    document.querySelector(".h-div-2").style.top="0%";
    document.querySelector(".ser-2").style.cursor="pointer";
  })
  document.querySelector(".ser-2").addEventListener("mouseleave",function(){
    document.querySelector(".h-div-2").style.top="100%";
  })
  
  document.querySelector(".ser-3").addEventListener("mousemove", function(){
    document.querySelector(".h-div-3").style.top="0%";
    document.querySelector(".ser-3").style.cursor="pointer";
  })
  document.querySelector(".ser-3").addEventListener("mouseleave",function(){
    document.querySelector(".h-div-3").style.top="100%";
  })
  
  document.querySelector(".ser-4").addEventListener("mousemove", function(){
    document.querySelector(".h-div-4").style.top="0%";
    document.querySelector(".ser-4").style.cursor="pointer";
  })
  document.querySelector(".ser-4").addEventListener("mouseleave",function(){
    document.querySelector(".h-div-4").style.top="100%";
  })
  
}

let bannerAnimation = function(){
var tll = gsap.timeline({scrollTrigger:{
  trigger:".part-2",
  start:"-30% 30%",
  end:"100% 100%",
  scrub: true,
  // markers: true
}})

tll.to(".banner-1",{
  left: "-30%",
  delay: 0,
},'a')
.to(".banner-2",{
  right: "-20%",
  delay: 0
},'a')
}

loaderAnimation();
magnetForIcon();
leftImageChange();
rightImageChange();
serviceListHover();
bannerAnimation();