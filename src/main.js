"use strict";
import "./styles/main.scss";

const selectElement = (elementSelector) => {
  const element = document.querySelector(elementSelector);

  if (!element) {
    console.error(
      `Element with selector ${elementSelector} does not exist. Check for any spelling mistakes`,
    );
    return;
  }
  return element;
};

// NAVBAR LOGIC
const openBtn = selectElement("#openMenu");
const closeBtn = selectElement("#closeMenu");
const navMenu = selectElement(".nav");

openBtn?.addEventListener("click", () => {
  openBtn.setAttribute("aria-expanded", "true");
  closeBtn.setAttribute("aria-expanded", "true");
  navMenu.classList.remove("close-nav");
});

closeBtn?.addEventListener("click", () => {
  openBtn.setAttribute("aria-expanded", "false");
  closeBtn.setAttribute("aria-expanded", "false");
  navMenu.classList.add("close-nav");
});
