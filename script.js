const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const message = document.getElementById("message");

//Main Functionn
form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkingForm();
});

// Function for form validation
function checkingForm() {
  //check username
  if (username.value === "") {
    showError(username, "Please input your name");
  } else {
    showSuccess(username);
  }

  //check email
  if (email.value === "") {
    showError(email, "Please input your email");
  } else if (!isEmail(email.value)) {
    showError(email, "Please check your e-mail address is correct");
  } else {
    showSuccess(email);
  }

  //check message
  if (message.value === "") {
    showError(message, "Please include a message");
  } else {
    showSuccess(message);
    showToast();
  }

  //clear form when submitted
  if (username.value && isEmail(email.value) && message.value) {
    username.value = "";
    email.value = "";
    message.value = "";
  }
}

// show error input
function showError(input, message) {
  const subform = input.parentElement;
  subform.className = "subForm error";
  const small = subform.querySelector("small");
  small.innerText = message;
}

// show success input
function showSuccess(input) {
  const subform = input.parentElement;
  subform.className = "subForm success";
}

// Funtion to check email (regex)
function isEmail(email) {
  const valid =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return valid.test(email);
}

// Navigation scrolling
document.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 0) {
    navbar.classList.add("scrolling");
  } else {
    navbar.classList.remove("scrolling");
  }
});

//diasplay an alert
function showToast() {
  if (username.value !== "" && email.value !== "") {
    Toastify({
      text: "Your message was sent successfully",
      duration: 2500,
      gravity: "top",
      singleToast: true,
      className: "toastify",
      backgroundColor: "#a9bd12",
    }).showToast();
  }
}
