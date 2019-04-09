
// Hamburger menu in navbar
const hamburger = document.querySelector('#hamburger');
const innerNav = document.querySelector('#inner-nav');

// open and close nav links on click hamburger
hamburger.addEventListener('click', () => {
  innerNav.style.transform === 'scaleY(1)' 
    ? innerNav.style.transform = 'scaleY(0)' 
    : innerNav.style.transform = 'scaleY(1)';
});


// Click functionality for Portfolio imgs
const projectImages = document.querySelectorAll('.img-container'); // the thumbnails in the portfolio
const projectDetails = Array.from(document.querySelectorAll('.project-detail')); // the detailed project modals
const body = document.querySelector('body');
console.log("projectImages:", projectImages);
console.log("projectDetails:", projectDetails);

projectImages.forEach((image) => {
  image.addEventListener('click', () => {
    console.log(`Clicked ${image}`);
    const projectId = image.getAttribute('data-project'); // get the projectId of the image clicked
    console.log(projectId);
    // find the project detail modal with the same projectId in their data-project attr
    const detail = projectDetails.find((project) => project.getAttribute('data-project') === projectId); 
    console.log(detail);
    detail.style.display = 'block';
    body.style.overflow = 'hidden'; // stop page from scrolling in the background
    
    // update top and opacity styles .2s after change display to block
    setTimeout(() => {
      detail.style.top = '50%';  // creates slight top down movement animation
      detail.style.opacity = '1';
    }, 200);
    
    const close = document.querySelector(`[data-project='${projectId}'] .close-project-detail`);
    console.log(close);
    close.addEventListener('click', () => {
      console.log('Clicked close!', close);
      detail.style.top = '45%';
      detail.style.opacity = '0';
      body.style.overflow = 'auto';
      
      // remove from document flow after animations are finished
      setTimeout(() => {
        detail.style.display = 'none';
      }, 200);
    
    });
  });
});



