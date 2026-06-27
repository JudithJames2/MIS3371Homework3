

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

    let first = document.getElementById("firstname").value;
    let middle = document.getElementById("middle").value;
    let last = document.getElementById("lastname").value;
    let dob = document.getElementById("dob").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let userid = document.getElementById("userid").value;
    let pain = document.getElementById("pain").value;

    let message =
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
