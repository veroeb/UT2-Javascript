const text = document.querySelector("p.text");
const button = document.querySelector("button.btn-change-text");

const handleClick = () => {
    text.textContent = "Texto cambiado";
}

// changeText.addEventListener("click", function() {
//     text.textContent = "Texto cambiado";
// });