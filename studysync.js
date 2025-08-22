  // Select the menu button and nav
const menuButton = document.querySelector(".meany-button");
const navMenu = document.querySelector(".nav");

// Toggle the 'active' class when the menu button is clicked
menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("nav-active");
});

  
  
document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile menu toggle logic
    const menuButton = document.querySelector(".meany-button");
    const nav = document.querySelector(".nav");
    const contactButton = document.querySelector(".contact-button");

    let menuOpen = false;

    menuButton.addEventListener("click", () => {
      menuOpen = !menuOpen;
      nav.style.display = menuOpen ? "flex" : "none";
      contactButton.style.display = menuOpen ? "block" : "none";
      nav.style.flexDirection = "column";
      nav.style.backgroundColor = "#fff";
      nav.style.position = "absolute";
      nav.style.top = "4.5rem";
      nav.style.right = "1rem";
      nav.style.padding = "1rem";
      nav.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";
      nav.style.borderRadius = "0.5rem";
    });

    // 2. Responsive layout adjustments on resize
    window.addEventListener("resize", () => {
      const screenWidth = window.innerWidth;

      // Reset styles if above 768px
      if (screenWidth > 768) {
        nav.style.display = "flex";
        nav.style.flexDirection = "row";
        contactButton.style.display = "block";
      } else if (!menuOpen) {
        nav.style.display = "none";
        contactButton.style.display = "none";
      }
    });
});


// Collapse footer sections on mobile
const headings = document.querySelectorAll(".footer-heading");

headings.forEach(heading => {
  heading.style.cursor = "pointer";
  heading.addEventListener("click", () => {
    const list = heading.nextElementSibling;
    list.style.display = list.style.display === "none" ? "flex" : "none";
  });
});

// Hide initially on small screens
window.addEventListener("load", () => {
  if (window.innerWidth < 768) {
    document.querySelectorAll(".footer-link-list").forEach(list => {
      list.style.display = "none";
    });
  }
});

