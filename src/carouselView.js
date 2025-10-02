// JS for carousel view

import { CarouselImage, images } from "./carousel.js";

export function initCarouselListeners() {
  const root = document.documentElement;
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
    });
  });

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
}
