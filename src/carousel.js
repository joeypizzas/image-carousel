// JS for carousel application state

export class CarouselImage {
  // Instantiate objs to store image attributes
  constructor(src, alt) {
    this.src = src;
    this.alt = alt;
    this.id =
      Date.now().toString(36) + Math.random().toString(36).substring(2, 8);
  }
}

export const images = (function imageList() {
  // Arr + methods to store imgs & reordered arr to put specific img on display
  let allImages = [];

  function addNewImage(newImage) {
    allImages.push(newImage);
  }

  function getImages() {
    return allImages;
  }

  function reorderImagesForDisplay(displayImageID) {
    const imageIndex = allImages.findIndex(
      // Find index of img to display in original arr
      (image) => image.id === displayImageID,
    );

    // new arr starts 2 positions before so correct img is displayed
    let startIndex = imageIndex - 2;
    if (startIndex < 0) {
      startIndex += allImages.length;
    }

    // new img to display is in middle position of concat arr
    return allImages.slice(startIndex).concat(allImages.slice(0, startIndex));
  }

  return {
    addNewImage,
    getImages,
    reorderImagesForDisplay,
  };
})();
