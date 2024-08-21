const img = document.getElementById("hoverImage");

const hoverImageSrc = "./resources/Rhaenyra.webp";

img.addEventListener("mouseover", () => {
  img.src = hoverImageSrc;
});

img.addEventListener("mouseout", () => {
  img.src = "./resources/Daenerys.webp";
});
