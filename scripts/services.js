const imageCollections = [
  {
    images: ["images/construction_image6.webp", "images/construction_image5.webp", "images/construction_image7.webp", "images/construction_image8.webp", "images/construction_image9.webp", "images/construction_image10.webp"],
    title: "Kitchen",
    description: "Transform your cooking space into a culinary masterpiece with our innovative designs and high-quality finishes."
  },
  {
    images: ["images/construction_image11.webp", "images/construction_image12.webp", "images/construction_image13.webp", "images/construction_image14.webp", "images/construction_image15.webp", "images/construction_image16.webp"],
    title: "Bathrooms",
    description: "Indulge in a spa-like retreat at home with our luxurious and functional bathroom renovations."
  },
  {
    images: ["images/construction_image17.webp", "images/construction_image18.webp", "images/construction_image19.webp", "images/construction_image20.webp", "images/construction_image21.webp", "images/construction_image22.webp"],
    title: "Interiors",
    description: "Elevate your living spaces with our bespoke interior solutions that blend style and comfort seamlessly."
  },
  {
    images: ["images/construction_image23.webp", "images/construction_image24.webp", "images/construction_image25.webp", "images/construction_image26.webp", "images/construction_image27.webp", "images/construction_image28.webp"],
    title: "Additions",
    description: "Expand your horizons! Our expertly crafted additions enhance both space and value for your home."
  },
  {
    images: ["images/construction_image29.webp", "images/construction_image30.webp", "images/construction_image31.webp", "images/construction_image32.webp", "images/construction_image33.webp", "images/construction_image34.webp"],
    title: "Exteriors",
    description: "Boost curb appeal and durability with our stunning exterior renovations that stand the test of time."
  },
  {
    images: ["images/construction_image35.webp", "images/construction_image36.webp", "images/construction_image37.webp", "images/construction_image38.webp", "images/construction_image39.webp", "images/construction_image40.webp"],
    title: "Sunrooms",
    description: "Let the light in! Our sunrooms create a bright, airy sanctuary for relaxation and enjoyment."
  }
];

let currentCollectionIndex = 0;
let currentImageIndex = 0;

function openImageModal(index) {
  currentCollectionIndex = index;
  currentImageIndex = 0;
  document.getElementById("imageModal").style.display = "block";
  loadModalContent();
}

function loadModalContent() {
  const collection = imageCollections[currentCollectionIndex];
  document.getElementById("modalImage").src = collection.images[currentImageIndex];
  document.getElementById("imageTitle").innerText = collection.title;
  document.getElementById("imageDescription").innerText = collection.description;
}

function closeImageModal() {
  document.getElementById("imageModal").style.display = "none";
}

function changeImage(step) {
  const collection = imageCollections[currentCollectionIndex];
  currentImageIndex = (currentImageIndex + step + collection.images.length) % collection.images.length;
  loadModalContent();
}

function toggleFullScreen() {
  const img = document.getElementById("modalImage");
  if (!document.fullscreenElement) {
    img.requestFullscreen().catch(err => console.log(err));
  } else {
    document.exitFullscreen();
  }
}