const form = document.getElementById("register_form");
const firstNameEL = document.getElementById("firstName");
const lastNameEL = document.getElementById("lastName");
const usernameEL = document.getElementById("username");
const passwordEL = document.getElementById("password");
const emailEL = document.getElementById("email");
const phoneNumberEL = document.getElementById("phoneNumber");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateInputs()) {
    storeDataLocally();
    window.location.href = 'login.html'; // Redirect to login page after successful validation and storage
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

const isValidEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  let isValid = true;

  const firstName = firstNameEL.value.trim();
  const lastName = lastNameEL.value.trim();
  const username = usernameEL.value.trim();
  const password = passwordEL.value.trim();
  const email = emailEL.value.trim();
  const phoneNumber = phoneNumberEL.value.trim();

  if (firstName === "") {
    setError(firstNameEL, "First Name is required");
    isValid = false;
  } else if (!/^[a-zA-Z]+$/.test(firstName)) {
    setError(firstNameEL, "First Name must contain only alphabets");
    isValid = false;
  } else {
    setSuccess(firstNameEL);
  }

  if (lastName === "") {
    setError(lastNameEL, "Last Name is required");
    isValid = false;
  } else if (!/^[a-zA-Z]+$/.test(lastName)) {
    setError(lastNameEL, "Last Name must contain only alphabets");
    isValid = false;
  } else {
    setSuccess(lastNameEL);
  }

  if (username === "") {
    setError(usernameEL, "Username is required");
    isValid = false;
  } else if (!/^[a-zA-Z]+$/.test(username)) {
    setError(usernameEL, "Username must contain only alphabets");
    isValid = false;
  } else {
    setSuccess(usernameEL);
  }

  if (password === "") {
    setError(passwordEL, "Password is required");
    isValid = false;
  } else if (password.length < 8) {
    setError(passwordEL, "Password must be at least 8 characters");
    isValid = false;
  } else {
    setSuccess(passwordEL);
  }

  if (email === "") {
    setError(emailEL, "Email is required");
    isValid = false;
  } else if (!isValidEmail(email)) {
    setError(emailEL, "Enter a valid email address");
    isValid = false;
  } else {
    setSuccess(emailEL);
  }
  
  if (phoneNumber === "") {
    setError(phoneNumberEL, "Phone Number is required");
    isValid = false;
  } else if (!/^\d{10}$/.test(phoneNumber)) {
    setError(phoneNumberEL, "Phone Number must be 10 digits");
    isValid = false;
  } else {
    setSuccess(phoneNumberEL);
  }
  return isValid;

};


const storeDataLocally = () => {
  const user = {
    firstName: firstNameEL.value.trim(),
    lastName: lastNameEL.value.trim(),
    username: usernameEL.value.trim(),
    password: passwordEL.value.trim(),
    email: emailEL.value.trim(),
    phoneNumber: phoneNumberEL.value.trim()
  };

  localStorage.setItem('user', JSON.stringify(user));
};
