// JS for carousel view

import { images } from "./carousel.js";

const root = document.documentElement;

export function initCarouselListeners() {
  const arrowButtons = document.querySelectorAll(".arrow-button");
  const dotButtons = document.querySelectorAll(".dot-button");

  arrowButtons.forEach((arrow) => {
    const arrowSVG = arrow.querySelector(".arrow-svg");
    arrow.addEventListener("mouseover", () => {
      arrowSVG.style.stroke =
        getComputedStyle(root).getPropertyValue("--button-hover");
    });
    arrow.addEventListener("mouseout", () => {
      arrowSVG.style.stroke =
        getComputedStyle(root).getPropertyValue("--button");
    });
    arrow.addEventListener("mousedown", () => {
      arrowSVG.style.stroke =
        getComputedStyle(root).getPropertyValue("--button-click");
    });
    arrow.addEventListener("mouseup", () => {
      arrowSVG.style.stroke =
        getComputedStyle(root).getPropertyValue("--button-hover");
      if (arrow.id === "arrow-forwards") {
        moveForward();
      }
      if (arrow.id === "arrow-backwards") {
        moveBackwards();
      }
    });
  });

  dotButtons.forEach((dot) => {
    const dotSVG = dot.querySelector(".dot-svg");
    dot.addEventListener("mouseover", () => {
      if (!dot.classList.contains("selected-dot")) {
        dotSVG.style.stroke =
          getComputedStyle(root).getPropertyValue("--button-hover");
      }
    });
    dot.addEventListener("mouseout", () => {
      if (!dot.classList.contains("selected-dot")) {
        dotSVG.style.stroke =
          getComputedStyle(root).getPropertyValue("--button");
      }
    });
    dot.addEventListener("mousedown", () => {
      if (!dot.classList.contains("selected-dot")) {
        dotSVG.style.stroke =
          getComputedStyle(root).getPropertyValue("--button-click");
      }
    });
    dot.addEventListener("mouseup", () => {
      if (!dot.classList.contains("selected-dot")) {
        unselectDot();
        dot.classList.add("selected-dot");
        selectDot();
      }
      addCarouselImagesToUI(images.reorderImagesForDisplay(dot.dataset.id)); // Need to get dots to match OG order here at all times, use ID from original array
    });
  });
}

function selectDot() {
  const newSelectedDot = document.querySelector(".selected-dot");
  const newSelectedDotSVG = newSelectedDot.querySelector(".dot-svg");
  newSelectedDotSVG.style.stroke =
    getComputedStyle(root).getPropertyValue("--button-hover");
  newSelectedDotSVG.style.fill =
    getComputedStyle(root).getPropertyValue("--button-hover");
}

function unselectDot() {
  const formerSelectedDot = document.querySelector(".selected-dot");
  if (formerSelectedDot) {
    const formerSelectedDotSVG = formerSelectedDot.querySelector(".dot-svg");
    formerSelectedDotSVG.style.fill =
      getComputedStyle(root).getPropertyValue("--page-background");
    formerSelectedDotSVG.style.stroke =
      getComputedStyle(root).getPropertyValue("--button");
    formerSelectedDot.classList.remove("selected-dot");
  }
}

export function addCarouselImagesToUI(carouselImageArr) {
  const imagesToShow = carouselImageArr;
  const carouselImgs = document.querySelectorAll(".carousel-img");
  const dotButtons = document.querySelectorAll(".dot-button");

  carouselImgs.forEach((img, i) => {
    img.src = imagesToShow[i].src;
    img.alt = imagesToShow[i].alt;
    img.dataset.id = imagesToShow[i].id;
    if (i !== 2) {
      img.classList.add("hidden");
    }
  });

  dotButtons.forEach((dot, i) => {
    dot.dataset.id = imagesToShow[i].id;
    //if (i === 2) { Look into logic here!
    //  if (!dot.classList.contains("selected-dot")) {
    //    dot.classList.add("selected-dot");
    //    selectDot();
    //  }
    //}
  });
}

function moveForward() {
  const carouselImgs = document.querySelectorAll(".carousel-img");
  addCarouselImagesToUI(
    images.reorderImagesForDisplay(carouselImgs[3].dataset.id),
  );
}

function moveBackwards() {
  const carouselImgs = document.querySelectorAll(".carousel-img");
  addCarouselImagesToUI(
    images.reorderImagesForDisplay(carouselImgs[1].dataset.id),
  );
}
