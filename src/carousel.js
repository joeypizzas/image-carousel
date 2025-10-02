// JS for carousel application state

export class CarouselImage {
  constructor(src, alt) {
    this.src = src;
    this.alt = alt;
    this.id =
      Date.now().toString(36) + Math.random().toString(36).substring(2, 8);
  }
}

export const images = (function imageList() {
  let allImages = [];

  function addNewImage(newImage) {
    allImages.push(newImage);
  }

  function getImages() {
    return allImages;
  }

  function reorderImagesForDisplay(displayImageID) {
    const imageIndex = allImages.findIndex(
      (image) => image.id === displayImageID,
    );

    let startIndex = imageIndex - 2;
    if (startIndex < 0) {
      startIndex += allImages.length;
    }

    return allImages.slice(startIndex).concat(allImages.slice(0, startIndex));
  }

  return {
    addNewImage,
    getImages,
    reorderImagesForDisplay,
  };
})();
