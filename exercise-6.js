/**
 * Exercise 6
 * Source Url: https://www.delltechnologies.com/pt-br/what-we-do/it-transformation.htm
 * Using JavaScript, move the top section of the page - the one highlighted in red on the image below - to just above the "Escolha um modelo de consumo..." section.
 */

// Queries the section element objects by their respective ids and select the wrapper element.
let heroSectionWrapper = document.querySelector('#solncat-hero').parentElement;
let offeringSectionWrapper = document.querySelector('#solncat-offering').parentElement;

// Inserts the hero section wrapper before the beggining of the offering section wrapper.
offeringSectionWrapper.insertAdjacentElement("beforebegin", heroSectionWrapper);