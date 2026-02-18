// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "#0f172a";
    navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
  } else {
    navbar.style.background = "transparent";
    navbar.style.boxShadow = "none";
  }
});

// Book Now button scroll to contact section
document.querySelector(".btn").addEventListener("click", () => {
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
});

// Contact form submit message
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent successfully! We will contact you soon 😊");
  form.reset();
});
