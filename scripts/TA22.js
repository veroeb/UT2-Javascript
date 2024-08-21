const sizeInfo = document.getElementById("sizeInfo");

const updateWindowSize = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  sizeInfo.textContent = `Tamaño de la ventana: ${width}px x ${height}px`;
};

updateWindowSize();

window.addEventListener("resize", updateWindowSize);
