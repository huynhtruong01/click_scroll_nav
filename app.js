const items = document.querySelector('.items');
const slider = document.querySelector('.items__container');
let scrollLeft;
let isDown = false;
let startX;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - items.offsetLeft;
  scrollLeft = items.scrollLeft;
  // console.log(startX, scrollLeft);
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return; //stop function running

  e.preventDefault();

  const x = e.pageX - items.offsetLeft;
  const walk = x - startX;
  items.scrollLeft = scrollLeft - walk;
  // console.log(x, startX, items.scrollLeft);
});
