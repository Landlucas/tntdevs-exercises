/**
 * Exercise 7
 * Source Url: https://www.delltechnologies.com/pt-br/what-we-do.htm
 * Using JavaScript or jQuery, prevent the button below from loading the video when clicked.
 */

// Selects the overlay trigger element contained in the hero section, adds an event listener.
document.querySelector('.hero01-view .content .overlay-video-trigger').addEventListener('click', (e) => {
  // Prevents any default behavior on clicking the element.
  e.preventDefault();
  // Prevents event propagation and bubbling on this event.
  e.stopPropagation()
});