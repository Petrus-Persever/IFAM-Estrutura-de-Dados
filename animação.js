function getRandomAnimation(element, animations) {
  if (!element || !animations || animations.length === 0) {
    return;
  }

  const randomIndex = Math.floor(Math.random() * animations.length);
  const animation = animations[randomIndex];

  element.style.animation = animation;

  element.addEventListener('animationend', function() {
    element.style.animation = ''; // Remove the animation after it finishes
  }, { once: true });
}

// Example usage:
// const myElement = document.getElementById('myElement');
// const animationList = ['fadeIn 1s', 'slideInLeft 0.5s', 'zoomIn 0.8s'];
// getRandomAnimation(myElement, animationList);