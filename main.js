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