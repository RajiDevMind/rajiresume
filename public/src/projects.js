const projects = [
  {
    img: "./images/logistics.jpg",
    url: "https://rajidevmind.github.io/logistics/",
    title: "Logistics Agency",
    desc: "Logistics services in airline services",
  },
  {
    img: "./images/SOURCE.jpg",
    url: "https://rajidevmind.github.io/Source-Creations/",
    title: "Source-Creations",
    desc: "advertising showcasing pro services",
  },
];
const container = document.querySelector(".containers");

// display projects to the dom
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
