const carouselImages = [
    "image1.png",
    "image2.jpg",
    "image3.jpg"
  ];
  
  let currentImageIndex = 0;
  
  function changeImage() {
    const carousel = document.querySelector(".carousel");
    carousel.innerHTML = `<img src="${carouselImages[currentImageIndex]}">`;
  
    currentImageIndex++;
  
    if (currentImageIndex === carouselImages.length) {
      currentImageIndex = 0;
    }
  
    setTimeout(changeImage, 4000);
  }
  
  changeImage();  