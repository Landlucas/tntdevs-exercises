### Question

How to apply a click event to all paragraphs except for the last?

### Answer

A query with a selector such as `Document.querySelectorAll('p:not(:last-child)')` will filter out the last paragraph, if the paragraph element is also the last child element of the container. Otherwise, the `NodeList` returned from `Document.querySelectorAll('p')` can be manually filtered.

Using the `NodeList` with all the paragraph elements, a click event can be simulated through the `HTMLElement.click()` method for all elements in the list.