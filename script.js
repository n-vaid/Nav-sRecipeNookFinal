document.addEventListener("DOMContentLoaded", function () {
  // Select the bowl image and define wiggle animation functions
  const bowlImage = document.getElementById("bowl");

  function startWiggle(element) {
    let angle = -5;
    element.style.transition = "transform 0.1s";
    const wiggleInterval = setInterval(() => {
      element.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
      angle = angle === -5 ? 5 : -5;
    }, 100);
    element.dataset.wiggleInterval = wiggleInterval;
  }

  function stopWiggle(element) {
    clearInterval(element.dataset.wiggleInterval);
    element.style.transform = "translate(-50%, -50%)";
  }

  if (bowlImage) {
    bowlImage.addEventListener("mouseover", function () {
      startWiggle(bowlImage);
    });
    bowlImage.addEventListener("mouseout", function () {
      stopWiggle(bowlImage);
    });
  }

  // Select images in favorite and right columns
  const favoriteImages = document.querySelectorAll(".favorite-column img");
  const rightColumnImages = document.querySelectorAll(".right-column img");
  const foodItemImages = document.querySelectorAll(".food-item img");

  // Function to add rotation animation
  function addRotationAnimation(images, duration) {
    images.forEach((img) => {
      img.addEventListener("mouseover", () => {
        img.style.transition = `transform ${duration}`;
        img.style.transform = "rotate(360deg)";
      });
      img.addEventListener("mouseout", () => {
        img.style.transform = "rotate(0deg)";
      });
    });
  }

  // Apply rotation animations
  addRotationAnimation(favoriteImages, "5s"); // For favorite column images
  addRotationAnimation(rightColumnImages, "8s"); // For right column images
  addRotationAnimation(foodItemImages, "3s"); // For food item images

  // Toggle visibility of category sections
  const icons = document.querySelectorAll(".category-icons .icon");

  icons.forEach((icon) => {
    icon.addEventListener("click", function () {
      const sectionId = icon.getAttribute("data-section");
      const section = document.getElementById(sectionId);
      const foodItemsContainer = section.querySelector(".food-items-container");

      section.classList.toggle("visible-section");
      if (foodItemsContainer) {
        foodItemsContainer.classList.toggle("food-items-show");
      }
    });
  });
});
