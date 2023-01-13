const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", (e) => {
    let accordionBtn = accordion.querySelector("button");
    accordion.classList.toggle("active");
    if (accordionBtn.textContent === "+") {
      accordionBtn.textContent = "-";
    } else {
      accordionBtn.textContent = "+";
    }
  });
});

(function () {
  function scrollH(e) {
    e.preventDefault();
    e.window.event || e;
    let delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
    document.querySelector(".review-cards").scrollLeft -= delta * 40;
  }
  if (document.querySelector(".review-card").addEventListener) {
    document
      .querySelector(".review-card")
      .addEventListener("mousewheel", scrollH, false);
    document
      .querySelector(".review-card")
      .addEventListener("DOMMouseScroll", scrollH, false);
  }
});
