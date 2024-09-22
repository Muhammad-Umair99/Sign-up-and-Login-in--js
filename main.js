let signUpBtn = document.querySelector(".signupbtn");
let signInBtn = document.querySelector(".signinbtn");
let nameField = document.querySelector(".namefield");
let title = document.querySelector(".title");
let underline = document.querySelector(".underline");
let text = document.querySelector(".text");


// Function to get users from localStorage
function getUsers() {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
}

// Sign In handling
signInBtn.addEventListener("click", () => {
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    text.innerHTML = "Lost PAssword"
    signUpBtn.classList.add("disable");
    signInBtn.classList.remove("disable");
    underline.style.transform = "translateX(35px)";

    // **SIGN IN CODE**
    const email = document.getElementById('email').value; // Get email
    const password = document.getElementById('password').value; // Get password

    const users = getUsers();

    // Check if the entered email and password match any stored user
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert('Sign in successful!');
    } else {
        alert('Invalid email or password.');
    }
});

// Sign Up handling
signUpBtn.addEventListener("click", () => {
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    text.innerHTML = "Password Suggestions"
    signUpBtn.classList.remove("disable");
    signInBtn.classList.add("disable");
    underline.style.transform = "translateX(0)";

    // **SIGN UP CODE**
    const name = document.getElementById('name').value; // Get name
    const email = document.getElementById('email').value; // Get email
    const password = document.getElementById('password').value; // Get password

    const users = getUsers();

    // Check if the email already exists
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        alert('Email already registered.');
        return;
    }

    // Add new user
    users.push({ name, email, password }); // Store name as well
    localStorage.setItem('users', JSON.stringify(users));

    alert('Sign up successful!');
    document.getElementById('userForm').reset(); // Clear the form
});