const categories = document.querySelectorAll("#categories > li");

console.log(`Number of categories: ${categories.length}`);

categories.forEach(element => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});