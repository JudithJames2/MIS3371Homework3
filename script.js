
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
   Review Before Submit
========================== */
function reviewForm() {
    // Collect values
    const first = (document.getElementById("firstname").value || "").trim();
    const middle = (document.getElementById("middle").value || "").trim();
    const last = (document.getElementById("lastname").value || "").trim();
    const dob = (document.getElementById("dob").value || "").trim();
    const email = (document.getElementById("email").value || "").trim();
    const phone = (document.getElementById("phone").value || "").trim();
    const userid = (document.getElementById("userid").value || "").trim();
    const pain = (document.getElementById("pain").value || "").trim();
    const password = (document.getElementById("password").value || "");
    const passwordConfirm = (document.getElementById("password_confirm").value || "");

    // Basic password checks
    if (password !== passwordConfirm) {
        alert("Passwords do not match. Please re-enter your password.");
        return false; // prevent submission
    }
    if (userid && password === userid) {
        alert("Password cannot be the same as User ID.");
        return false;
    }
    if (userid && password.includes(userid)) {
        alert("Password cannot contain your User ID.");
        return false;
    }

    const pwLower = password.toLowerCase();
    const firstLower = first.toLowerCase();
    const lastLower = last.toLowerCase();

    if ((first && pwLower.includes(firstLower)) || (last && pwLower.includes(lastLower))) {
        alert("Password cannot contain your name.");
        return false;
    }
  
    // Build review message (do not include password/SSN)
    const message =
        "PLEASE REVIEW YOUR INFORMATION\n\n" +
        "First Name: " + first + "\n" +
        "Middle Initial: " + middle + "\n" +
        "Last Name: " + last + "\n\n" +
        "Date of Birth: " + dob + "\n\n" +
        "Email: " + email + "\n" +
        "Phone: " + phone + "\n\n" +
        "User ID: " + userid + "\n\n" +
        "Pain Level: " + pain + "/10\n\n" +
        "Click OK to submit your registration.\n" +
        "Click Cancel to return to the form and edit your information.";

    return confirm(message);
}

  //validation
function validateForm() {
      alert("Validate button clicked!");

    let errors = "";
    let errorCount = 0;

    const submitBtn = document.getElementById("submitBtn");

    submitBtn.style.display = "none";
    submitBtn.disabled = true;

    document.getElementById("errorMessages").innerHTML = "";

    const first = document.getElementById("firstname").value.trim();
    const middle = document.getElementById("middle").value.trim();
    const last = document.getElementById("lastname").value.trim();
    const dob = document.getElementById("dob").value;
    const ssn = document.getElementById("ssn").value.trim();
    const address1 = document.getElementById("address1").value.trim();
    const address2 = document.getElementById("address2").value.trim();
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value;
    const zipcode = document.getElementById("zipcode").value.trim();
    const emailField = document.getElementById("email");
    const email = emailField.value.trim().toLowerCase();
    emailField.value = email;
    const phone = document.getElementById("phone").value.trim();
    const userid = document.getElementById("userid").value.trim();
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("password_confirm").value;
    
    if (first === "") {
    errors += "First name is required.<br>";
    errorCount++;
}
else if (!/^[A-Za-z' -]+$/.test(first)) {
    errors += "First name contains invalid characters.<br>";
    errorCount++;
}

    if (middle !== "" && !/^[A-Za-z]$/.test(middle)) {
    errors += "Middle initial must be one letter.<br>";
    errorCount++;
}

    if (last === "") {
    errors += "Last name is required.<br>";
    errorCount++;
}
else if (!/^[A-Za-z' -]+$/.test(last)) {
    errors += "Last name contains invalid characters.<br>";
    errorCount++;
}

if (!/^\d{3}-\d{2}-\d{4}$/.test(ssn)) {
    errors += "SSN must be XXX-XX-XXXX.<br>";
    errorCount++;
}
    if (address1 === "") {
    errors += "Address is required.<br>";
    errorCount++;
}
    if (city === "") {
    errors += "City is required.<br>";
    errorCount++;
}
else if (!/^[A-Za-z .'-]+$/.test(city)) {
    errors += "Invalid city.<br>";
    errorCount++;
}
    if (state === "") {
    errors += "Select a state.<br>";
    errorCount++;
}
    if (!/^\d{5}(-\d{4})?$/.test(zipcode)) {
    errors += "Invalid ZIP code.<br>";
    errorCount++;
}
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors += "Invalid email address.<br>";
    errorCount++;
}
    if (!/^\d{3}-\d{3}-\d{4}$/.test(phone)) {
    errors += "Phone must be 000-000-0000.<br>";
    errorCount++;
}
    if (!document.querySelector('input[name="gender"]:checked')) {
    errors += "Select a gender.<br>";
    errorCount++;
}
    
    if (!document.querySelector('input[name="vaccine"]:checked')) {
    errors += "Select vaccination status.<br>";
    errorCount++;
}
    if (!document.querySelector('input[name="insurance"]:checked')) {
    errors += "Select insurance status.<br>";
    errorCount++;
}
    if (document.querySelectorAll('input[name="history[]"]:checked').length === 0) {
    errors += "Select at least one medical history item.<br>";
    errorCount++;
}
    if (!/^[A-Za-z0-9]{4,15}$/.test(userid)) {
    errors += "Invalid User ID.<br>";
    errorCount++;
}
    if (password !== confirm) {
    errors += "Passwords do not match.<br>";
    errorCount++;
}

if (password === userid) {
    errors += "Password cannot equal User ID.<br>";
    errorCount++;
}

if (password.toLowerCase().includes(userid.toLowerCase())) {
    errors += "Password cannot contain User ID.<br>";
    errorCount++;
}

if (password.toLowerCase().includes(first.toLowerCase()) ||
    password.toLowerCase().includes(last.toLowerCase())) {

    errors += "Password cannot contain your name.<br>";
    errorCount++;
}
    if (errorCount > 0) {

    document.getElementById("errorMessages").innerHTML =
        "<h3>Please correct the following:</h3>" +
        errors +
        "<br>Total Errors: " + errorCount;

    return false;
}

document.getElementById("errorMessages").innerHTML =
    "<span style='color:green;font-weight:bold;'>✔ Validation Successful! Click Submit.</span>";

submitBtn.style.display = "inline-block";
submitBtn.disabled = false;
return true;
}
//fetch api
function submitForm() {

    const patient = {

        firstname:
            document.getElementById("firstname").value,

        lastname:
            document.getElementById("lastname").value,

        dob:
            document.getElementById("dob").value,

        email:
            document.getElementById("email").value,

        phone:
            document.getElementById("phone").value,

        userid:
            document.getElementById("userid").value,

        pain:
            document.getElementById("pain").value

    };

    fetch("submit.php", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(patient)

    })

    .then(response => response.json())

    .then(data => {

        alert("Registration Successful");

        window.location.href = "thanks.html";

    })

    .catch(error => {

        console.log(error);

    });

}
//fixed header
window.addEventListener("scroll", function(){
    let header = document.getElementById("header");

    if(window.scrollY > 100){
        header.classList.add("fixed");
    }
    else{
        header.classList.remove("fixed");
    }
});
    
