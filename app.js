document.addEventListener("DOMContentLoaded", () => {
  const signInOptions = document.querySelector(".sign-in-options");
  const optionsButton = document.querySelector(".sign-in-options-btn");
  const formGroup = document.querySelector(".form-group");
  const backButton = document.querySelector("#back-btn");

  const toggleOptions = () => {
    signInOptions.classList.toggle("active");
    formGroup.classList.toggle("inactive");
    optionsButton.classList.toggle("hide");
  };

  optionsButton.addEventListener("click", toggleOptions);
  backButton.addEventListener("click", toggleOptions);
});
