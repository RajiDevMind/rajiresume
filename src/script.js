const overlay = document.querySelector(".overlay");
const btn = document.querySelector(".popup");
const btnS = document.querySelector(".popups");

const closeBtn = document.querySelector(".close-btn");

btnS.addEventListener("click", function () {
  overlay.classList.toggle("open-modal");
});
btn.addEventListener("click", function () {
  if (!overlay.classList.contains("open-modal")) {
    overlay.classList.add("open-modal");
  }
  // overlay.classList.toggle("open-modal");
});
closeBtn.addEventListener("click", function () {
  overlay.classList.remove("open-modal");
});

// switchbtn and pause video
const switchBtn = document.querySelector(".switch-btn");
const videoContainer = document.querySelector(".video-container");

switchBtn.addEventListener("click", function () {
  if (!switchBtn.classList.contains("slide")) {
    switchBtn.classList.add("slide");
    videoContainer.pause();
  } else {
    switchBtn.classList.remove("slide");
    videoContainer.play();
  }
});
