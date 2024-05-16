var group = document.querySelectorAll(".group");
var exit = document.querySelector(".exit");
var modal = document.querySelector(".modal");
var arrow_right = document.querySelector(".arrow_right");
var arrow_left = document.querySelector(".arrow_left");
var img_show = document.querySelector(".modal>img");
var album_img = document.querySelectorAll(".group img");

let currentIndex = 0;

album_img.forEach((img, index) => {
  img.addEventListener("click", function () {
    currentIndex = index;
    showImage()
    
  });
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("visible");
  }
  console.log(e.key);
});
exit.addEventListener("click", (e) => {
  modal.classList.remove("visible");
});

arrow_right.addEventListener("click", (e) => {
  if (currentIndex < album_img.length - 1) {
    currentIndex++;
      showImage()
    }
});
arrow_left.addEventListener("click", () => {
    if (currentIndex  > 0) {
      currentIndex--;
      showImage()
    }
});

// Delete Arrows at first image and last image
function showImage() {
  currentIndex == album_img.length - 1
    ? arrow_right.classList.add("hide")
    : arrow_right.classList.remove("hide");
  currentIndex == 0
    ? arrow_left.classList.add("hide")
    : arrow_left.classList.remove("hide");
    img_show.src = album_img[currentIndex].src;
    modal.classList.add("visible");
}
