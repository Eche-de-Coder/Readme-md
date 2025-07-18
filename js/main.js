// Hamburger Menu and Side Menu
const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");
const menuOverlay = document.getElementById("menuOverlay");

function closeMenuHandler() {
 sideMenu.classList.remove("show-menu");
 menuOverlay.classList.remove("show-overlay");
 hamburger.classList.remove("open");
 hamburger.addEventListener("click", openMenu);
}

function toggleMenu() {
 const isOpen = sideMenu.classList.contains("show-menu");
 sideMenu.classList.toggle("show-menu");
 menuOverlay.classList.toggle("show-overlay");
 hamburger.classList.toggle("open");
}

hamburger.addEventListener("click", toggleMenu);


/*slide in animation*/
const elements = document.querySelectorAll('.slide-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});
elements.forEach(el => observer.observe(el));

function openModal() {
  alert('We are Sorry! Our Affiliate programs are not available at the moment');
}
