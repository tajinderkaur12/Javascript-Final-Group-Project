const form = document.getElementById("login_form");
const passwordEl = document.getElementById("password");
const emailEL = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
  const errorInputs = document.querySelectorAll(".input-wrapper.error");

  if (errorInputs.length === 0) {
    const emailValue = emailEL.value;
    const passwordValue = passwordEl.value.trim();
    const userInfo = JSON.parse(window.localStorage.getItem(emailValue));
    if (userInfo == null) {
      alert("Please Enter Valid Email");
      return;
    }
    const checkPass = userInfo.password === passwordValue;
    if (checkPass) {
      window.location.href = "home.html"; // Redirect to home page after successful login
    } else {
      alert("Email or password does not exist");
      return;
    }
  }
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validateInputs = () => {
  const emailValue = emailEL.value;
  const passwordValue = passwordEl.value.trim();

  if (emailValue === "") {
    setError(emailEL, "Email must be provided");
  } else {
    setSuccess(emailEL);
  }

  if (passwordValue === "") {
    setError(passwordEl, "Password must be provided");
  } else if (passwordValue.length < 8) {
    setError(passwordEl, "Password must be at least 8 characters long");
  } else {
    setSuccess(passwordEl);
  }
};
