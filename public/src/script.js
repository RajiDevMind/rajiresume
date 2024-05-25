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
export default function loadingState() {
  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
      document.body.removeChild("loader");
    });
  });
}
loadingState();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  //   linksContainer.classList.toggle("show-links");
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});
