
// Hamburger menu in navbar
const hamburger = document.querySelector('#hamburger');
const innerNav = document.querySelector('#inner-nav');

hamburger.addEventListener('click', () => {
  innerNav.style.transform === 'scaleY(1)' 
    ? innerNav.style.transform = 'scaleY(0)' 
    : innerNav.style.transform = 'scaleY(1)';
});


// Click functionality for Portfolio imgs
const projectImages = document.querySelectorAll('.img-container');
const projectDetails = Array.from(document.querySelectorAll('.project-detail'));
const body = document.querySelector('body');
console.log("projectImages:", projectImages);
console.log("projectDetails:", projectDetails);

projectImages.forEach((image) => {
  image.addEventListener('click', () => {
    console.log(`Clicked ${image}`);
    const projectId = image.getAttribute('data-project');
    console.log(projectId);
    const detail = projectDetails.find((project) => project.getAttribute('data-project') === projectId);
    console.log(detail);
    detail.style.display = 'block';
    body.style.overflow = 'hidden';
    
    const close = document.querySelector(`[data-project='${projectId}'] .close-project-detail`);
    console.log(close);
    close.addEventListener('click', () => {
      console.log('Clicked close!', close);
      detail.style.display = 'none';
      body.style.overflow = 'auto';
    });
  });
});



