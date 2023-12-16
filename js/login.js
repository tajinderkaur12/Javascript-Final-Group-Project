const form = document.getElementById("login_form");
const passwordEl = document.getElementById("password");
const emailEL = document.getElementById("email");
const createAccountEl = document.querySelector(".create-account");

const serialize = function (obj) {
  let str = [];
  for (let p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
  const errorInputs = document.querySelectorAll(".input-wrapper.error");

  if (errorInputs.length === 0) {
    let emailValue = emailEL.value;
    let passwordValue = passwordEl.value.trim();
    const userInfo = JSON.parse(window.localStorage.getItem(emailValue));
    if (userInfo == null) {
      alert("Please Enter Valid Email");
      location.replace("login.html");
      return;
    }
    const checkPass = userInfo.password === passwordValue;
    if (userInfo !== null && checkPass) {
      window.location.href = "home.html"; // Redirect to home page after successful login
    } else {
      alert("Email or password does not exist");
      location.replace("home.html");
      return;
    }
  }
});

createAccountEl.addEventListener("click", () => {
  location.replace("register.html");
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

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
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
