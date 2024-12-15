document.getElementById("appointment-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const fullName = document.getElementById("full-name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const doctor = document.getElementById("doctor").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');

    
    let valid = true;
    let errorMessage = "";


    if (!fullName || !surname || !email || !age || !phone || !doctor || !gender) {
        valid = false;
        errorMessage = "Please fill in all the fields.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (valid && !emailRegex.test(email)) {
        valid = false;
        errorMessage = "Please enter a valid email address.";
    }

    
    if (valid && (isNaN(age) || age <= 0)) {
        valid = false;
        errorMessage = "Please enter a valid age.";
    }

    
    if (valid && (isNaN(phone) || phone.length < 9)) {
        valid = false;
        errorMessage = "Please enter a valid phone number.";
    }

    
    if (!valid) {
        alert(errorMessage);
    } else {
        alert("Your appointment has been successfully reserved!");
        
    }

    document.getElementById("appointment-form").reset();

});