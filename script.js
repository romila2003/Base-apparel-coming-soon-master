const form = document.querySelector("form");
const email = document.getElementById("email");
const text = document.getElementById("email-text");
const button = document.querySelector("button");

let emailFormat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

button.addEventListener("click", () => {
    if(email.value === "") {
        email.classList.add("invalid");
        email.classList.remove("valid");
        email.classList.add("error");
        text.innerHTML = "Email cannot be empty";
    } else if(!email.value.match(emailFormat)) {
        email.classList.add("invalid");
        email.classList.add("error");
        text.innerHTML = "Please provide a valid email";
    } else {
        email.classList.remove("invalid");
        email.classList.add("valid");
        email.classList.remove("error");
        text.innerHTML = "";
    }
})