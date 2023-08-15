/*
    ***** User Schema *****
    {
        mobileNumber: String,
        email: String,
        cartItems: [],
        boughtItems: []
    }
*/

var registeredUsers = [];
var currentLoggedInUser = {};

if (!localStorage.getItem(allEnums.registeredUsers)) {
  localStorage.setItem(allEnums.registeredUsers, "[]");
} else {
  registeredUsers = JSON.parse(localStorage.getItem(allEnums.registeredUsers));
}

if (!localStorage.getItem(allEnums.currentLoggedInUser)) {
  localStorage.setItem(allEnums.currentLoggedInUser, "{}");
} else {
  registeredUsers = JSON.parse(
    localStorage.getItem(allEnums.currentLoggedInUser)
  );
}

function SignUp() {
  let mobileNumberInput = document.getElementById("mobile-number-input");
  let emailInput = document.getElementById("email-input");

  let mobileNumber = mobileNumberInput.value;
  let email = emailInput.value;

  if (mobileNumber || email) {
    if (mobileNumber) {
      if (mobileNumber.length !== 10) {
        alert("Mobile number should be exactly 10 digits");
        return;
      }
    } else {
    }
  } else {
    //won't trigger
  }
}

function Login() {}

function validateMobileNumberInput(e) {
  console.log({ e });
}

function validateEmailAddressInput(e) {
  console.log({ e });
}

function switchEmailAndMobileInput() {
  let mobileNumberInput = document.getElementById("mobile-number-input");
  let emailInput = document.getElementById("email-input");

  let switchLoginMethodButton = document.getElementById(
    "switch-login-method-button"
  );

  if (switchLoginMethodButton.innerText.includes("Email")) {
    mobileNumberInput.style.display = "none";
    emailInput.style.display = "block";
    switchLoginMethodButton.innerText = "Login using Mobile Number";
  } else if (switchLoginMethodButton.innerText.includes("Mobile")) {
    mobileNumberInput.style.display = "block";
    emailInput.style.display = "none";
    switchLoginMethodButton.innerText = "Login using Email Address";
  }
}
