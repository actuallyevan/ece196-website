document.addEventListener("DOMContentLoaded", () => {
  const carouselImageSets = {
    carousel1: [
      {
        src: "./images/placeholder.jpeg",
        caption: "Initial design sketch of our monitoring system",
      },
      {
        src: "./images/placeholder.jpeg",
        caption: "Block diagram of our solution architecture",
      },
      {
        src: "./images/placeholder.jpeg",
        caption: "Project development timeline",
      },
      // Add more images as needed
    ],

    carousel2: [
      {
        src: "./images/placeholder.jpeg",
        caption: "Software architecture diagram",
      },
      {
        src: "./images/placeholder.jpeg",
        caption: "Development milestone timeline",
      },
      {
        src: "./images/placeholder.jpeg",
        caption: "UI/UX wireframe designs",
      },
      // Add more images as needed
    ],
  };

  function initializeCarousel(carouselId) {
    const carouselImages = carouselImageSets[carouselId];
    const carouselImagesContainer = document.getElementById(
      `${carouselId}-images`
    );
    const carouselCaption = document.getElementById(
      `caption${carouselId.slice(-1)}`
    );
    const prevButton = document.getElementById(`prev${carouselId.slice(-1)}`);
    const nextButton = document.getElementById(`next${carouselId.slice(-1)}`);

    let currentImageIndex = 0;

    function initCarousel() {
      carouselImages.forEach((image, index) => {
        const imgElement = document.createElement("img");
        imgElement.src = image.src;
        imgElement.alt = image.caption;
        imgElement.classList.add("carousel-image");

        if (index === 0) {
          imgElement.classList.add("active");
          carouselCaption.textContent = image.caption;
        }

        carouselImagesContainer.appendChild(imgElement);
      });
    }

    function showImage(index) {
      if (index < 0) index = carouselImages.length - 1;
      if (index >= carouselImages.length) index = 0;

      const images =
        carouselImagesContainer.querySelectorAll(".carousel-image");

      images[currentImageIndex].classList.remove("active");

      currentImageIndex = index;
      images[currentImageIndex].classList.add("active");

      carouselCaption.textContent = carouselImages[currentImageIndex].caption;
    }

    prevButton.addEventListener("click", () => {
      showImage(currentImageIndex - 1);
    });

    nextButton.addEventListener("click", () => {
      showImage(currentImageIndex + 1);
    });

    initCarousel();

    return {
      showImage,
      getCurrentIndex: () => currentImageIndex,
    };
  }

  initializeCarousel("carousel1");
  initializeCarousel("carousel2");
});
