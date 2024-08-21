const input = document.getElementById("input");

input.addEventListener("focusin", () => {
  input.classList.add("focused");
});

input.addEventListener("focusout", () => {
  input.classList.remove("focused");
});
