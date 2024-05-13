//page loading
window.addEventListener("load", () => {
  document.querySelector(".load-page").classList.remove("visible");
  document.body.style.overflowY = "visible";
  clearInterval(dotInterval);
});

Fancybox.bind('[data-fancybox="gallery"]', {
  Slideshow: {
    playOnStart: true,
  },
});

new Carousel(
  document.getElementById("myCarousel"),
  {
    Autoplay: {
      pauseOnHover: false,
      timeout: 2000,
    },
  },
  {
    Autoplay,
  }
);
