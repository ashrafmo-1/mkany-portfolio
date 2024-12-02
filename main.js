const header = document.getElementById("header");
const handleScroll = () => {
  if (window.scrollY > 0) {
    header.classList.add("pinned");
  } else {
    header.classList.remove("pinned");
  }
};
window.addEventListener("scroll", handleScroll);


const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".arrow-next",
    prevEl: ".arrow-prev",
  },
});


const btnToggleSide = document.querySelector(".btn-sidebarToggle");
btnToggleSide.addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
});