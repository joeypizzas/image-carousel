# Image carousel planning

## Does the program have a user interace?

1. Background color for entire page.
2. Image carousel is centered in the page.
3. Vertically centered wide div contains all slides and encompasses entire viewpoint width.
4. 5 equal divs that make up that wide div. Center one is the "picture frame" that shows current carousel item. Others are hidden.
5. Arrows on each side of the carousel with SVGs that control moving forward and backwards in the carousel.
6. Set of five horizontal circles below the picture frame portion of the carousel. Likely with SVGs. Tapping anyone enables jumping directly to that slide in the frame.

## What inputs will the program have and where do they come from?

1. Inputs are to navigate between different slides in the carousel. They come from:
   - Forward and back arrows, which indicate to move to the next or prior slide.
   - Dots at the bottom, which indicate to go to a specific slide.
   - Timeout, which moves automatically to the next slide every 5 seconds.

## What's the desired output?

1. When one of the navigate actions occurs, the correct slideshow image is shown in the view part of the carousel with the others hidden.

## What are steps to achieve output?

1. Create the UI and add hover and click event listeners.
2. Array of objects with:
   - Image unique ID.
   - Image src.
   - Selected: yes/no.
3. Image unique ID is added to corresponding dot for its placement at that time in the carousel.
4. Print carousel items function that:
   - Adds the image SRCs and IDs to the carousel, and maybe indicates which one is selected?
   - Adds them to the UI such that the selected image is always in the third position in the carousel. This will be done by creating a new array via map that returns the new order to add the elements into the UI.
5. App state methods needed:
   - Get array for UI: Takes in ID as parameter, finds that in the OG array and maps a new array where it is in the third position. Returns array, which is then passed as parameter when setting new array in UI.
6. UI methods needed:
   - Move forward function: select 4th item in the index of carousel pictures UI item (since that has the current order you want to move forward from), when , get array for UI with that picture's ID and then add it to UI.
   - Move backward function: select 2nd item in the index of carousel pictures UI item (since that has the current order you want to move forward from), when , get array for UI with that picture's ID and then add it to UI.
   - Add carousel to UI: Adds imgs with SRCs, data-IDs, and selectors to img elements. Also adds data-ids to dots. Takes image order array as parameter.
   - Remove carousel images from UI: Removes IMGs from UI and data-ids from dots.
