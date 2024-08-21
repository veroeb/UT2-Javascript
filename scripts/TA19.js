const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const passwordInput = document.getElementById("password");
const emailInput = document.getElementById("email");

const nameError = document.getElementById("nameError");
const passwordError = document.getElementById("passwordError");
const emailError = document.getElementById("emailError");

const validateName = () => {
  if (nameInput.value.trim() === "") {
    nameError.style.display = "block";
    nameInput.classList.add("input-error");
  } else {
    nameError.style.display = "none";
    nameInput.classList.remove("input-error");
  }
};

const validatePassword = () => {
  if (passwordInput.value.length < 8) {
    passwordError.style.display = "block";
    passwordInput.classList.add("input-error");
  } else {
    passwordError.style.display = "none";
    passwordInput.classList.remove("input-error");
  }
};

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.style.display = "block";
    emailInput.classList.add("input-error");
  } else {
    emailError.style.display = "none";
    emailInput.classList.remove("input-error");
  }
};

nameInput.addEventListener("input", validateName);
passwordInput.addEventListener("input", validatePassword);
emailInput.addEventListener("input", validateEmail);

form.addEventListener("submit", function (event) {
  validateName();
  validatePassword();
  validateEmail();

  if (
    nameInput.classList.contains("input-error") ||
    passwordInput.classList.contains("input-error") ||
    emailInput.classList.contains("input-error")
  ) {
    event.preventDefault();
  }
});
