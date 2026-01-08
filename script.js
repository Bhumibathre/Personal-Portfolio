// year
document.getElementById("year").textContent = new Date().getFullYear();

// mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const navMobile = document.getElementById("nav-mobile");

menuBtn.addEventListener("click", () => {
  navMobile.style.display =
    navMobile.style.display === "flex" ? "none" : "flex";
});

// close mobile menu after click + smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      navMobile.style.display = "none";
    }
  });
});
