const eyeButton = document.getElementsByClassName("eye")[0];
eyeButton.addEventListener("click", () => {
  const icon = eyeButton.querySelector(".icon");
  const isSlash = icon.getAttribute("data-slash");
  const passwordInput = document.getElementById("password");
  if (isSlash === "true") {
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
    icon.setAttribute("data-slash", "false");
    passwordInput.setAttribute("type", "text");
  } else {
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
    icon.setAttribute("data-slash", "true");
    passwordInput.setAttribute("type", "password");
  }
});