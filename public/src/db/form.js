const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const msgInput = document.getElementById("message");
const notice = document.querySelector(".notice");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  await fetch("/message", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    credentials: "include",
    body: JSON.stringify({
      name: nameInput.value,
      email: emailInput.value,
      message: msgInput.value,
    }),
  });

  nameInput.value = "";
  emailInput.value = "";
  msgInput.value = "";

  navigator.vibrate(500);
  notice.textContent = "Raji will get to you soon!!!";
  notice.classList.add("notify");

  setTimeout(function () {
    notice.textContent = "";
    notice.classList.remove("notify");
  }, 2000);
});

// loading
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});
