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

// loading

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});
