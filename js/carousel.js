document.addEventListener("DOMContentLoaded", () => {
  const carouselImageSets = {
    carouselBuildsDesigns: [
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

    carouselSchematicsDiagrams: [
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
    
    carouselPcbDesign: [
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
    
    carouselUpdate1: [
      {
        src: "./images/pinbudgetsheet.png",
        caption: "Pin budget section of Google sheet",
      },
      {
        src: "./images/featherfootprint.png",
        caption: "Custom Adafruit Feather V2 Footprint",
      },
      {
        src: "./images/feathersymbol.png",
        caption: "Custom Adafruit Feather V2 Symbol",
      },
      {
        src: "./images/ldoschematic.png",
        caption: "LDO regulator setup for extra rail",
      },
    ],
    
    carouselUpdate2: [
      {
        src: "./images/displaytesting.png",
        caption: "Testing the display",
      },
      {
        src: "./images/placeholder.jpeg",
        caption: "Component breadboarding",
      },
      {
        src: "./images/placeholder.jpeg",
        caption: "Soldering headers onto breakout",
      },
      {
        src: "./images/placeholder.jpeg",
        caption: "Code for testing the breakouts",
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
    // Construct the full ID for caption, prev, and next buttons
    const captionId = `caption${carouselId.substring('carousel'.length)}`;
    const prevButtonId = `prev${carouselId.substring('carousel'.length)}`;
    const nextButtonId = `next${carouselId.substring('carousel'.length)}`;

    const carouselCaption = document.getElementById(captionId);
    const prevButton = document.getElementById(prevButtonId);
    const nextButton = document.getElementById(nextButtonId);

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
  if (document.getElementById("carouselBuildsDesigns-images")) {
    initializeCarousel("carouselBuildsDesigns");
  }
  
  if (document.getElementById("carouselSchematicsDiagrams-images")) {
    initializeCarousel("carouselSchematicsDiagrams");
  }
  
  if (document.getElementById("carouselPcbDesign-images")) {
    initializeCarousel("carouselPcbDesign");
  }
  
  if (document.getElementById("carouselUpdate1-images")) {
    initializeCarousel("carouselUpdate1");
  }
  
  if (document.getElementById("carouselUpdate2-images")) {
    initializeCarousel("carouselUpdate2");
  }
});
