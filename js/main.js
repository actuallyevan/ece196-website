// Main JavaScript file for the ECE 196 Project website

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Enable animations when elements enter the viewport
  const animatedElements = document.querySelectorAll(".animate__animated");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Check if the element already has an animation class
          let hasAnimationClass = false;
          let existingAnimation = null;

          entry.target.classList.forEach((cls) => {
            if (cls.startsWith("animate__") && cls !== "animate__animated") {
              hasAnimationClass = true;
              existingAnimation = cls;
            }
          });

          // If no existing animation class, add one based on data attribute or default
          if (!hasAnimationClass) {
            const animation = entry.target.dataset.animation || "fadeIn";
            entry.target.classList.add(`animate__${animation}`);
          }

          // Stop observing this element after it has been animated
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
  );

  // Start observing all animated elements
  animatedElements.forEach((el) => {
    observer.observe(el);
  });

  // We've removed the code that was wrapping arrow button text in spans
});
