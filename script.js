document.addEventListener('DOMContentLoaded', function() {
  // Add event listeners to the SVG shapes
  document.getElementById('circle').addEventListener('click', toggleAnimation);
  document.getElementById('rectangle').addEventListener('click', toggleAnimation);
  document.getElementById('polygon').addEventListener('click', toggleAnimation);
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


function toggleAnimation(event) {
  console.log("Shape clicked!");
  const shape = event.currentTarget;
  const animation = shape.querySelector('animate') || shape.querySelector('animateTransform');

  if (animation) {
    if (animation.getAttribute('begin') !== 'indefinite') {
      animation.setAttribute('begin', 'indefinite');
    } else {
      animation.removeAttribute('begin');
    }
  }
  
  // Toggle the visibility of the clicked shape
  shape.style.display = shape.style.display === 'none' ? 'block' : 'none';

  // Check if all shapes are hidden
  const shapes = document.querySelectorAll('.icon');
  const hiddenShapes = Array.from(shapes).filter(shape => shape.style.display === 'none');

  // If all shapes are hidden, trigger the function to make them reappear after 10 seconds
  if (hiddenShapes.length === shapes.length) {
    makeShapesReappear(shapes);
  }
}

function makeShapesReappear(shapes) {
  console.log("Waiting for 10 seconds before making shapes reappear...");
  setTimeout(() => {
    console.log("Shapes should reappear now!");
    shapes.forEach(shape => {
      shape.style.display = 'block';
    });
  }, 10000); // 10 seconds in milliseconds
}
