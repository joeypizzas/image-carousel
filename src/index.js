// Image carousel JS index

import "./style.css";
import { initCarouselListeners } from "./carouselView.js";
import garlicKnotsImage from "./assets/garlic_knots.png";
import meatballsImage from "./assets/meatballs.png";
import tomatoPieImage from "./assets/tomato_pie.png";
import mozzarellaImage from "./assets/mozz_pie.png";
import pepperoniImage from "./assets/pepperoni_pie.png";
import { CarouselImage, images } from "./carousel.js";

const mozzPie = new CarouselImage(mozzarellaImage, "Mozz pie");
const pepperoniPie = new CarouselImage(pepperoniImage, "Pepperoni pie");
const tomatoPie = new CarouselImage(tomatoPieImage, "Tomato pie");
const meatballs = new CarouselImage(meatballsImage, "Meatballs");
const garlicKnots = new CarouselImage(garlicKnotsImage, "Garlic knots");

images.addNewImage(mozzPie);
images.addNewImage(pepperoniPie);
images.addNewImage(tomatoPie);
images.addNewImage(meatballs);
images.addNewImage(garlicKnots);

initCarouselListeners();
