/**
 * Exercise 8
 * Source Url: https://www.dell.com/en-us/member/shop
 * Using JavaScript or jQuery, dynamically store the first word of each category
 * and add it to the respective sub-links like the image below - this is a sample, 
 * it should be applied for all product categories respectively.
 */

const categories = document.querySelectorAll('#bottomcontent .category-links');

for (category of categories) {
  const catName = category.querySelector('.feature a').textContent;
  const catFirstWord = catName.split(' ').shift();
  let catLinks = category.querySelectorAll('.sub-category li a');
  for (catLink of catLinks) {
    let catLinkOrigText = catLink.textContent;
    catLink.textContent = `${catFirstWord} - ${catLinkOrigText}`;
  }
}