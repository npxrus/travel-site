import "lazysizes";

import "../styles/styles.css";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";

let modal;

new MobileMenu();
new StickyHeader();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);

document.querySelectorAll(".open-modal").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();

    if (typeof modal === "undefined") {
      import("./modules/Modal")
        .then((item) => {
          modal = new item.default();
          setTimeout(() => modal.openTheModal(), 20);
        })
        .catch((err) => console.error(err));
    } else {
      modal.openTheModal();
    }
  });
});

if (module.hot) {
  module.hot.accept();
}
