

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
function isValidUserId(userId) {

  const regex = /^[a-zA-Z_]/;
  return regex.test(userId);
}
function isValidUserId(userId) {
    // Regex allows only uppercase, lowercase, and numbers
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(userId);
}
function validateUserId(userId) {
  if (userId.length < 5 || userId.length > 20) {
    return "User ID must be between 5 and 20 characters long.";
  }
  return "User ID is valid.";
}
function validateForm() {

    let errorCount = 0;
    let errors = "";
  document.getElementById("submitBtn").disabled = true;
     let first = document.getElementById("firstname").value.trim();
    let middle = document.getElementById("middle").value.trim();
    let last = document.getElementById("lastname").value.trim();
    let email = document.getElementById("email").value.trim().toLowerCase();
    let userid = document.getElementById("userid").value.trim();
    let phone = document.getElementById("phone").value.trim();
  document.getElementById("email").value = email;
   if (first == "") {
        errorCount++;
        errors += "• First Name is required.<br>";
    }
    else if (!/^[A-Za-z' -]+$/.test(first)) {
        errorCount++;
        errors += "• First Name contains invalid characters.<br>";
    }
     if (middle != "" && !/^[A-Za-z]$/.test(middle)) {
        errorCount++;
        errors += "• Middle Initial must be one letter.<br>";
    }

 if (last == "") {
        errorCount++;
        errors += "• Last Name is required.<br>";
    }
    else if (!/^[A-Za-z' -]+$/.test(last)) {
        errorCount++;
        errors += "• Last Name contains invalid characters.<br>";
    }
  if (email == "") {
        errorCount++;
        errors += "• Email is required.<br>";
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorCount++;
        errors += "• Email format is invalid.<br>";
    }
     if (phone != "" &&
        !/^[0-9()\-\s]+$/.test(phone)) {

        errorCount++;
        errors += "• Phone number is invalid.<br>";
    }
   if (userid == "") {
        errorCount++;
        errors += "• User ID is required.<br>";
    }
   if (errorCount > 0) {

        document.getElementById("errorMessages").innerHTML =
            "<h3>Please correct the following errors:</h3>" +
            errors +
            "<br><strong>Total Errors: " + errorCount + "</strong>";

        document.getElementById("submitBtn").disabled = true;

    }
    else {

        document.getElementById("errorMessages").innerHTML =
            "<span style='color:green;font-weight:bold;'>✔ Validation Successful! No errors were found.</span>";

        document.getElementById("submitBtn").disabled = false;

    }

}
