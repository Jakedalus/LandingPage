const hamburger = document.querySelector('#hamburger');
const innerNav = document.querySelector('#inner-nav');

hamburger.addEventListener('click', () => {
  innerNav.style.transform === 'scaleY(1)' 
    ? innerNav.style.transform = 'scaleY(0)' 
    : innerNav.style.transform = 'scaleY(1)';
});