document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    if (username === "" || password === "") {
        alert("Username and Password are required!");
        return; 
    }

    
    if (password.length < 8) {
        alert("Password must be at least 8 characters long!");
        return; 
    }

    alert("You have successfully logged in!");

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
});
