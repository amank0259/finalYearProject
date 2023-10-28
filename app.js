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

magnetForIcon();
leftImageChange();
rightImageChange();