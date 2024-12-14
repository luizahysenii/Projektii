document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Get data
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const birthDate = document.getElementById('birthDate').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const address = document.getElementById('address').value;
    const country = document.getElementById('country').value;
    const city = document.getElementById('city').value;

    
    if (fullName.trim() === "") {
        alert("Full Name is required.");
        return;
    }

    
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    
    if (!/^\d{9}$/.test(phoneNumber)) {
        alert("Please enter your phone number.");
        return;
    }

    
    if (!birthDate) {
        alert("Birth Date is required.");
        return;
    }


    if (!gender) {
        alert("Please select a gender.");
        return;
    }

    if (address.trim() === "") {
        alert("Address is required.");
        return;
    }

    if (country === "Country") {
        alert("Please select a country.");
        return;
    }

    if (city.trim() === "") {
        alert("City is required.");
        return;
    }

    alert("Form submitted successfully!");

    document.getElementById('fullName').value = "";
    document.getElementById('email').value= "";
    document.getElementById('phoneNumber').value = "";
    document.getElementById('birthDate').value = "";
    document.querySelector('input[name="gender"]:checked').value= "";
    document.getElementById('address').value= "";
    document.getElementById('country').value= "";
    document.getElementById('city').value= "";

});