const projects = [
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
const container = document.querySelector(".containers");

// mapping and display projects to the dom
container.innerHTML = projects.map((box) => {
  const { img, title, url, desc } = box;
  return `<div class="box">
    <a target="_blank" href="${url}">
      <img src="${img}" alt="" loading="lazy" />
      <div class="box-text">
        <h2>${title}</h2>
        <p>${desc}</p>
      </div>
    </a>
  </div>`;
});

// loading
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});
