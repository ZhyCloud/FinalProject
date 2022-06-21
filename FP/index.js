function validateForm() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let linkedin = document.getElementById("linkedin").value;
    let valid = true;

    // This statement is used to determine if the input values for first and last names are  only alpha characters.
    if (testExec(firstName) == false || testExec(lastName) == false) {
        valid = false;
    }

    // This statement is used to determine if the length of input values for first and last names are longer than two.
    // and if the facilitator's name in the flist array.
    if (firstName.length < 2 || lastName.length < 2) {
        valid = false;
    }

    if (valid == false) {
        alert("Input wrong!");
        document.getElementById("firstName").style.border = "1px solid red";
        document.getElementById("lastName").style.border = "1px solid red";
        document.getElementById("validA").innerHTML = "The length of firstname and lastname must be longer than two and only alpha characters!";
        document.getElementById("validB").innerHTML = "You should give some valid address!";
    }
    return valid;
}

function testExec(inputtxt) {
    let myRegex = new RegExp("^[a-zA-Z]+$");
    if (inputtxt.match(myRegex)) {
        return true;
    } else {
        return false;
    }
}