const create_accountEL = document.querySelector(".btn.create-account"); // Adjusted the selector

form.addEventListener("submit", (e) => {
  const errorInputs = document.querySelectorAll(".input-wrapper.error");

  e.preventDefault();
  if (errorInputs.length === 0) {
    let firstName = firstNameEL.value;
    let lastName = lastNameEL.value;
    let username = usernameEL.value;
    let password = passwordEL.value;
    let email = emailEL.value;
    let phoneNumber = phoneNumberEL.value;

    const userInformation = {
      firstName,
      lastName,
      username,
      password,
      email,
      phoneNumber,
    };

    window.localStorage.setItem(email, JSON.stringify(userInformation));

    location.replace("login.html");
  }
});

if (create_accountEL) { // Checking if the element exists before adding the event listener
  create_accountEL.addEventListener("click", () => {
    location.replace("login.html");
  });
}
