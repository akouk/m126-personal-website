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
  const shape = event.target;
  const animation = shape.querySelector('animate') || shape.querySelector('animateTransform');

  if (animation) {
    if (animation.getAttribute('begin') !== 'indefinite') {
      animation.setAttribute('begin', 'indefinite');
    } else {
      animation.removeAttribute('begin');
    }
  }
  
  // Make the shape disappear when clicked
  shape.style.display = 'none';
}
