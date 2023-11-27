function validateInput(event){
    event.preventDefault();
    let firstName = document.getElementById("fname").value; 
    console.log(firstName);
    let lastName = document.getElementById("lname").value; 
    console.log(lastName);
    let zip = document.getElementById("zip").value; 
    console.log(zip);

    let firstLast = firstName + " " + lastName;
    console.log(firstName); 

    if(firstLast.length < 20){
        alert("Not Enough Characters. First and last name must have at least 20 characters.");
        return;
    }
    console.log("valid first and last name!");

    // ceck if zip has 5 characters and is numbers.
    const zipRegExp = /\b\d{5}\b/;

    if(!zipRegExp.toLocaleString(zip)){
        alert("Invalid zip code. Zip must be a number of 5 digits. ");
        console.log(typeof zip)
        return false;
    }

    console.log("Validated!");

}
window.addEventListener("DOMContentLoaded", (event) =>{
    const form = document.getElementById("myForm");
    if(form){
        form.addEventListener("submit", validateInput)
    }
})
