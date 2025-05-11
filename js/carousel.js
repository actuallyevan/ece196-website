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
    
    carousel3: [
      {
        src: "./images/pcbanno.png",
        caption: "PCB layout",
      },
      {
        src: "./images/schematicanno.png",
        caption: "Schematic with annotations",
      },
      {
        src: "./images/3dviewer.png",
        caption: "Top side of PCB in 3D viewer",
      },
      {
        src: "./images/3dviewer1.png",
        caption: "Bottom side of PCB in 3D viewer",
      },
    ],
  };

  function initializeCarousel(carouselId) {
    const carouselImagesContainer = document.getElementById(
      `${carouselId}-images`
    );
    
    // Check if the carousel exists on this page
    if (!carouselImagesContainer) {
      console.log(`Carousel ${carouselId} not found on this page, skipping initialization.`);
      return null;
    }
    
    const carouselImages = carouselImageSets[carouselId];
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

  // Only initialize carousels that exist on the current page
  if (document.getElementById("carousel1-images")) {
    initializeCarousel("carousel1");
  }
  
  if (document.getElementById("carousel2-images")) {
    initializeCarousel("carousel2");
  }
  
  if (document.getElementById("carousel3-images")) {
    initializeCarousel("carousel3");
  }
});
