const overlay = document.querySelector(".overlay");
const btn = document.querySelector(".popup");
const btnS = document.querySelector(".popups");

const projects = [
  {
    img: "./images/SelloutLogo.png",
    url: "https://selloutapp.vercel.app",
    title: "Sellout is an e-commerce",
    desc: "Sellout app is designed to streamline online shopping. Built with ReactJS, Hosted on Vercel",
  },
  {
    img: "./images/oncampus.PNG",
    url: "https://bit.ly/campus_updates",
    title: "Social Connecting App",
    desc: "a social app that allow user to create post and chat with one another. Built with vanilla JS, Hosted on Netlify",
  },
  {
    img: "./images/logistics.jpg",
    url: "https://rajidevmind.github.io/logistics/",
    title: "Logistics Agency",
    desc: "Logistics services in airline services. Built with vanilla JS, Hosted on Github pages",
  },
  {
    img: "./images/getfit.jpg",
    url: "https://animated-figolla-ea63a9.netlify.app/",
    title: "Club House",
    desc: "A gyming center that provide profession body fitness services. Built with reactJs, hosted on netlify",
  },
  {
    img: "./images/SOURCE.jpg",
    url: "https://rajidevmind.github.io/Source-Creations/",
    title: "Source-Creations",
    desc: "advertising showcasing pro services. Built with vanilla JS, Hosted on Github pages",
  },
];

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

// const container = document.querySelector(".project-disp");
const container = document.querySelector(".project-containers");
// mapping and display projects to the dom
container.innerHTML = projects.map((box, index) => {
  // <img src="${img}" alt="" loading="lazy" />
  const { img, title, url, desc } = box;
  return `<div class="box" key="${index}">
    <a target="_blank" href="${url}">
      <div class="box-text">
        <h2>${title}</h2>
        <p>${desc}</p>
      </div>
    </a>
  </div>`;
});
