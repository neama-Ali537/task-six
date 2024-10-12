// start logic register home
let registerForm = document.querySelector(".registerform");

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let inputEmail = document.querySelector(".input-email").value;
  let inputPass = document.querySelector(".input-pass").value;

  if (inputEmail && inputPass) {
    localStorage.setItem("email", inputEmail);
    localStorage.setItem("password", inputPass);
    window.location.href = "test.html";
  } else {
    alert("You must write your Data!");
  }
});
let logOut = document.querySelector(".logout");
logOut.addEventListener("click", function () {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
});
// End logic register home

