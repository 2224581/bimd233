function displayCredentials() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    console.log("Username: " + username);
    console.log("Password: " + password);


    var usernameElement = document.createElement("p");
    usernameElement.textContent = "Username: " + username;
    document.body.appendChild(usernameElement);


    var passwordElement = document.createElement("p");
    passwordElement.textContent = "Password: " + password;
    document.body.appendChild(passwordElement);
}