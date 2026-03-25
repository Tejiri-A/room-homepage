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

// CAROUSEL LOGIC
// Data structure for content
// keeping track of what to render
// the controls
const carouselData = [
  {
    header: "Discover innovative ways to decorate",
    body: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    imgAlt:
      "Two white modern chairs next to a wooden dining table with a small bonsai tree.",
  },
  {
    header: "We are available all across the globe",
    body: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    imgAlt:
      "A sleek, minimalist black folding chair against a dark background.",
  },
  {
    header: "Manufactured with the best materials",
    body: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    imgAlt: "Three modern minimalist chairs in yellow, light green, and white.",
  },
];

const carouselHeading = selectElement("#carouselHeading");
const carouselParagraph = selectElement("#carouselParagraph");
const leftBtn = selectElement("#prevSlide");
const rightBtn = selectElement("#nextSlide");
const carouselImg = selectElement("#carouselImg");
const carouselDesktopImg = selectElement("#carouselDesktopImg");

let currIndex = 0;

const updateSlider = (currIndex) => {
  let currData = carouselData[currIndex];
  carouselHeading.textContent = currData.header;
  carouselParagraph.textContent = currData.body;
  carouselImg.src = `/mobile-image-hero-${currIndex + 1}.jpg`;
  carouselImg.alt = currData.imgAlt;
  carouselDesktopImg.srcset = `/desktop-image-hero-${currIndex + 1}.jpg`;
};

leftBtn.addEventListener("click", () => {
  currIndex =
    currIndex === 0
      ? carouselData.length - 1
      : (currIndex - 1) % carouselData.length;
  updateSlider(currIndex);
});

rightBtn.addEventListener("click", () => {
  currIndex = (currIndex + 1) % carouselData.length;
  updateSlider(currIndex);
});
