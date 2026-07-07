
/* ==========================
 Date
========================== */

function displayDate() {
    const today = new Date();

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    document.getElementById("today").innerHTML =
        today.toLocaleDateString("en-US", options);
}

/* ==========================
   Validate Form (Before Submit)
========================== */

function validateForm() {
    let errorCount = 0;
    let errors = "";
    
    // Clear previous error messages
    document.getElementById("errorMessages").innerHTML = "";
    document.getElementById("submitBtn").disabled = true;

    // Get form values
    let first = document.getElementById("firstname").value.trim();
    let middle = document.getElementById("middle").value.trim();
    let last = document.getElementById("lastname").value.trim();
    let dob = document.getElementById("dob").value.trim();
    let ssn = document.getElementById("ssn").value.trim();
    let address1 = document.getElementById("address1").value.trim();
    let city = document.getElementById("city").value.trim();
    let state = document.getElementById("state").value.trim();
    let zipcode = document.getElementById("zipcode").value.trim();
    let email = document.getElementById("email").value.trim().toLowerCase();
    let phone = document.getElementById("phone").value.trim();
    let userid = document.getElementById("userid").value.trim();
    let password = document.getElementById("password").value;
    let passwordConfirm = document.getElementById("password_confirm").value;
 
 const history =
document.querySelectorAll('input[name="history[]"]:checked');

if(history.length === 0){
    errorCount++;
    errors +=
    "• Please select at least one Medical History item.<br>";
}
    
    // Update email to lowercase
    document.getElementById("email").value = email;

    // ===== PERSONAL INFO VALIDATION =====
    
    // First Name
    if (first == "") {
        errorCount++;
        errors += "• First Name is required.<br>";
    }
    else if (!/^[A-Za-z' -]+$/.test(first)) {
        errorCount++;
        errors += "• First Name contains invalid characters.<br>";
    }

    // Middle Initial
    if (middle != "" && !/^[A-Za-z]$/.test(middle)) {
        errorCount++;
        errors += "• Middle Initial must be one letter.<br>";
    }

    // Last Name
    if (last == "") {
        errorCount++;
        errors += "• Last Name is required.<br>";
    }
    else if (!/^[A-Za-z' -]+$/.test(last)) {
        errorCount++;
        errors += "• Last Name contains invalid characters.<br>";
    }

    // Date of Birth
    if (dob == "") {
        errorCount++;
        errors += "• Date of Birth is required.<br>";
    }

    // Social Security Number
    if (ssn == "") {
        errorCount++;
        errors += "• Social Security Number is required.<br>";
    }
    else if (!/^\d{3}-\d{2}-\d{4}$/.test(ssn)) {
        errorCount++;
        errors += "• Social Security Number format is invalid (XXX-XX-XXXX).<br>";
    }

    // ===== ADDRESS VALIDATION =====

    // Address Line 1
    if (address1 == "") {
        errorCount++;
        errors += "• Address Line 1 is required.<br>";
    }

    // City
    if (city == "") {
        errorCount++;
        errors += "• City is required.<br>";
    }

    // State
    if (state == "") {
        errorCount++;
        errors += "• State is required.<br>";
    }

    // Zip Code
    if (zipcode == "") {
        errorCount++;
        errors += "• Zip Code is required.<br>";
    }
    else if (!/^\d{5}(-\d{4})?$/.test(zipcode)) {
        errorCount++;
        errors += "• Zip Code format is invalid (12345 or 12345-6789).<br>";
    }

    // ===== CONTACT VALIDATION =====

    // Email
    if (email == "") {
        errorCount++;
        errors += "• Email is required.<br>";
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorCount++;
        errors += "• Email format is invalid.<br>";
    }

    // Phone
    if (phone == "") {
        errorCount++;
        errors += "• Phone is required.<br>";
    }
    else if (!/^\d{3}-\d{3}-\d{4}$/.test(phone)) {
        errorCount++;
        errors += "• Phone format is invalid (000-000-0000).<br>";
    }

    // ===== GENDER VALIDATION =====
    let genderSelected = document.querySelector('input[name="gender"]:checked');
    if (!genderSelected) {
        errorCount++;
        errors += "• Gender is required.<br>";
    }

    // ===== VACCINATION STATUS VALIDATION =====
    let vaccineSelected = document.querySelector('input[name="vaccine"]:checked');
    if (!vaccineSelected) {
        errorCount++;
        errors += "• Vaccination status is required.<br>";
    }

    // ===== INSURANCE STATUS VALIDATION =====
    let insuranceSelected = document.querySelector('input[name="insurance"]:checked');
    if (!insuranceSelected) {
        errorCount++;
        errors += "• Insurance status is required.<br>";
    }

    // ===== CREDENTIALS VALIDATION =====

    // User ID
    if (userid == "") {
        errorCount++;
        errors += "• User ID is required.<br>";
    }
    else if (userid.length < 4 || userid.length > 15) {
        errorCount++;
        errors += "• User ID must be 4-15 characters long.<br>";
    }
    else if (!/^[a-zA-Z0-9]+$/.test(userid)) {
        errorCount++;
        errors += "• User ID must contain only letters and numbers.<br>";
    }

    // Password
    if (password == "") {
        errorCount++;
        errors += "• Password is required.<br>";
    }
    else if (password.length < 8 || password.length > 20) {
        errorCount++;
        errors += "• Password must be 8-20 characters long.<br>";
    }
    else if (!/(?=.*[a-z])/.test(password)) {
        errorCount++;
        errors += "• Password must contain at least one lowercase letter.<br>";
    }
    else if (!/(?=.*[A-Z])/.test(password)) {
        errorCount++;
        errors += "• Password must contain at least one uppercase letter.<br>";
    }
    else if (!/(?=.*\d)/.test(password)) {
        errorCount++;
        errors += "• Password must contain at least one number.<br>";
    }
    else if (!/(?=.*[!@#%^&*()\-\_=+\\\/><.,`~])/.test(password)) {
        errorCount++;
        errors += "• Password must contain at least one special character (!@#%^&*etc).<br>";
    }

    // Password Confirmation
    if (passwordConfirm == "") {
        errorCount++;
        errors += "• Password confirmation is required.<br>";
    }
    else if (password !== passwordConfirm) {
        errorCount++;
        errors += "• Passwords do not match.<br>";
    }

    // Password cannot be same as User ID
    if (userid && password && password === userid) {
        errorCount++;
        errors += "• Password cannot be the same as User ID.<br>";
    }

    // Password cannot contain User ID
    if (userid && password && password.toLowerCase().includes(userid.toLowerCase())) {
        errorCount++;
        errors += "• Password cannot contain your User ID.<br>";
    }

    // Password cannot contain name
    if ((first || last) && password) {
        const pwLower = password.toLowerCase();
        const firstLower = first.toLowerCase();
        const lastLower = last.toLowerCase();
        if ((first && pwLower.includes(firstLower)) || (last && pwLower.includes(lastLower))) {
            errorCount++;
            errors += "• Password cannot contain your name.<br>";
        }
    }

    // ===== DISPLAY RESULTS =====
const submitBtn = document.getElementById("submitBtn");
    if (errorCount > 0) {

    document.getElementById("errorMessages").innerHTML =
        "<h3 style='color:#c90808;'>Please correct the following errors:</h3>" +
        errors +
        "<br><strong>Total Errors: " + errorCount + "</strong>";

    submitBtn.style.display = "none";
    submitBtn.disabled = true;

    return false;

}

document.getElementById("errorMessages").innerHTML =
    "<span style='color:green;font-weight:bold;'>✔ Validation Successful! No errors were found. You may now submit the form.</span>";

submitBtn.style.display = "inline-block";
submitBtn.disabled = false;

return true;
}

/* ==========================
   Review Before Submit
========================== */

function reviewForm() {

    if (!validateForm()) {
        alert("Please click VALIDATE and correct the errors before submitting.");
        return false;
    }

    const first =
        document.getElementById("firstname").value;

    const middle =
        document.getElementById("middle").value;

    const last =
        document.getElementById("lastname").value;

    const dob =
        document.getElementById("dob").value;

    const email =
        document.getElementById("email").value;

    const phone =
        document.getElementById("phone").value;

    const userid =
        document.getElementById("userid").value;

    const pain =
        document.getElementById("pain").value;

    const gender =
        document.querySelector('input[name="gender"]:checked');

    const vaccine =
        document.querySelector('input[name="vaccine"]:checked');

    const insurance =
        document.querySelector('input[name="insurance"]:checked');

    const message =
        "PLEASE REVIEW YOUR INFORMATION\n\n" +
        "Name: " + first + " " + middle + " " + last + "\n" +
        "Date of Birth: " + dob + "\n" +
        "Gender: " + gender.value + "\n\n" +
        "Email: " + email + "\n" +
        "Phone: " + phone + "\n\n" +
        "User ID: " + userid + "\n" +
        "Vaccinated: " + vaccine.value + "\n" +
        "Insurance: " + insurance.value + "\n" +
        "Pain Level: " + pain + "/10\n\n" +
        "Click OK to submit.\n" +
        "Click Cancel to continue editing.";

    return confirm(message);

}
/* ==========================
   Helper Function - Count Errors
========================== */


    // Password validation - comprehensive checks
    if (!password) {
        errorCount++;
    } else {
        if (password.length < 8 || password.length > 20) errorCount++;
        if (!/(?=.*[a-z])/.test(password)) errorCount++;
        if (!/(?=.*[A-Z])/.test(password)) errorCount++;
        if (!/(?=.*\d)/.test(password)) errorCount++;
        if (!/(?=.*[!@#%^&*()\-\_=+\\\/><.,`~])/.test(password)) errorCount++;
    }
    
    if (!passwordConfirm || password !== passwordConfirm) errorCount++;

    return errorCount;
}



