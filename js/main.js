// script.js
const marqueeText = document.querySelector('.marquee-text');

// Function to toggle marquee direction
function toggleDirection() {
  marqueeText.style.animationDirection = marqueeText.style.animationDirection === 'reverse' ? 'normal' : 'reverse';
}

// Toggle marquee direction every 30 seconds (adjust as needed)
setInterval(toggleDirection, 30000);











// Function to check if an element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to toggle the 'active' class based on section visibility
function toggleNavLinksColor() {
  const navLinks = document.querySelectorAll('.home');
  const sections = document.querySelectorAll('.section');

  sections.forEach((section, index) => {
    if (isElementInViewport(section)) {
      navLinks[index].classList.add('active');
    } else {
      navLinks[index].classList.remove('active');
    }
  });
}

// Event listener for scrolling
window.addEventListener('scroll', toggleNavLinksColor);
window.addEventListener('resize', toggleNavLinksColor); // Listen for window resize events
