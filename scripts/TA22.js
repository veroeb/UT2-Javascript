const sizeInfo = document.getElementById("sizeInfo");

const updateWindowSize = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  sizeInfo.textContent = `Window size: ${width}px x ${height}px`;
};

updateWindowSize();

window.addEventListener("resize", updateWindowSize);
