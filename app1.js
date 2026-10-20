const form = document.querySelector("#rform");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const PasswordInput = document.querySelector("#pass");
const confirmPasswordInput= document.querySelector("#Cpass");
const ageInput= document.querySelector("#age");
// -------------------------------------------------------------
const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const confirmPasswordError = document.querySelector("#confirmPasswordError");
const ageError = document.querySelector("#ageError");
const successMsg = document.querySelector("#successMsgError");
//---------------------------------------------------------------
form.addEventListener ("submit" , (event)=>{
   event.preventDefault() ;

            nameError.textContent = "";
            emailError.textContent = "";
            passwordError.textContent = "";
            confirmPasswordError.textContent = "";
            ageError.textContent = "";
            successMsg.textContent = "";

            let IsValid=true;
            const nameVal =nameInput.value.trim();
            if (nameVal=== ""){
                nameError.textContent="Name is required.";
                IsValid=false;
            }

            const emailVal=emailInput.value.trim();
            const matchingPattern= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailVal===""){
                emailError.textContent="Email is required.";
                IsValid=false;
            } 
            else if (!matchingPattern.test(emailVal)) {
                emailError.textContent = "Please enter a valid email address.";
                IsValid = false;
            }
            const passwordval = PasswordInput.value;
            if (passwordval===""){
                passwordError.textContent= "Password is required.";
                IsValid=false;
            }
            else if (passwordval.length<8){
                passwordError.textContent = "Password must be at least 8 characters.";
                IsValid = false;
            }
            const confirmPasswordVal= confirmPasswordInput.value
            if (confirmPasswordVal==="" ){
                confirmPasswordError.textContent = "Please confirm your password.";
                IsValid = false;
            }
            else if (confirmPasswordVal!==passwordval) {
                confirmPasswordError.textContent = "Passwords do not match.";
                IsValid = false;
            }
            const ageVal=Number (ageInput.value.trim())
            if (ageInput.value.trim() === ""){
                ageError.textContent = "Age is required.";
                IsValid = false;
            }
            else if (isNaN(ageVal) || ageVal<1 || ageVal >120) {
                ageError.textContent = "Please enter a valid age between 1 and 120.";
                IsValid = false;
            }

            if (IsValid) {
                successMsg.textContent = "Registration successful!";
                form.reset();
            }
})
