/**
 * Exercise 9
 */

/**
 * Returns a color string given a selected quick link element.
 * @param {HTMLElement} quickLink 
 * @returns {string}
 */
const getColor = (quickLink) => {
  console.log(quickLink)
  if (quickLink.parentElement.previousElementSibling === null) {
    return 'purple';
  } else if (quickLink.parentElement.nextElementSibling === null) {
    return 'orange';
  } else {
    return 'green';
  }
}

/**
 * Return the section element given a title string.
 * @param {NodeList} sections 
 * @param {String} title 
 * @returns {HTMLElement}
 */
const getSection = (sections, title) => {
  return [...sections].find((section) => {
    if (section.querySelector('.inner-module-banner h2').textContent === title) {
      return true;
    } else {
      return false;
    }
  })
}

/**
 * Init element refs.
 */
let quickLinks = document.querySelectorAll('.quick-link a');
let sections = document.querySelectorAll('#topcontent .half-hero');
let networkingSection = getSection(sections, 'Networking');
let camerasSection = getSection(sections, 'Cameras, Photo & Video');
let powerSection = getSection(sections, 'Power, Batteries & Adapters');
let sectionImages = document.querySelectorAll('#topcontent .half-hero .half-image-module');

/**
 * Add and handle click events on quick links.
 */
for (quickLink of quickLinks) {
  quickLink.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation()
    const colorToChange = getColor(e.target.parentElement);
    for (sectionImage of sectionImages) {
      sectionImage.style.backgroundColor = colorToChange;
    }
  });
}

/**
 * Swap network section images for camera section images.
 */
let networkingImages = networkingSection.querySelector('.half-modules-outer-container');
networkingImages.remove();
let camerasImages = camerasSection.querySelector('.half-modules-outer-container');
networkingSection.insertAdjacentElement('beforeend', camerasImages.cloneNode(true));

/**
 * Calculates and alert the sum of all "Power, Batteries & Adapters" product prices.
 */
(function(){
  let sum = 0;
  const priceEls = [...powerSection.querySelectorAll('.half-hero-pricing')];
  for (priceEl of priceEls) {
    let priceStr = priceEl.textContent;
    let priceStrVect = priceStr.split(' ');
    for (priceStrWord of priceStrVect) {
      if (priceStrWord.startsWith('$')) {
        sum += parseFloat(priceStrWord.substring(1).slice(0, -2));
      }
    }
  }
  alert(`Result: $${sum}`);
})();