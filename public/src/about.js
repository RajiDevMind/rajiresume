// about page start here

const tabBtns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const dataId = e.target.dataset.id;
  if (dataId) {
    // remove active class from btns
    tabBtns.forEach(function (btn) {
      btn.classList.remove("active");
      // add active class to select btn
    });
    e.target.classList.add("active");
    // lets hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const displayEl = document.getElementById(dataId);
    displayEl.classList.add("active");
  }
});
window.addEventListener("DOMContentLoaded", function () {
  articles.forEach(function (article) {
    article.classList.remove("active");
  });
});

// loading

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});
