/**
 * Exercise 10
 */

const categoryElements = document.querySelectorAll('.anavmfe__accordion__item');
const urlBase = 'https://www.dell.com/en-us/member/shop/dell-laptops/sr/laptops';

// Map categories and their refinement ids. 
let categories = []
for (categoryElement of categoryElements) {
  const refinementInputs = categoryElement.querySelectorAll('input');
  const refinements = [...refinementInputs].map((input) => {
    return input.value;
  })
  categories.push({
    name: categoryElement.querySelector('.anavmfe__accordion__item__name').textContent,
    refinements: refinements
  })
}

// Render the category list using the mapped categories with refinement ids.
const renderCatLink = (category) => {
  return `<a href="${urlBase}?appliedRefinements=${category.refinements.join(',')}">${category.name}</a>`;
}
document.querySelector('#cat-fran-rows').insertAdjacentHTML('afterBegin', `<div>${categories.map(renderCatLink).join(' ')}</div>`);
