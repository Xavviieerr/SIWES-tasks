const signUpButton = document.getElementById('sign-up-btn');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email-input');
let passwordInput = document.getElementById('password-input');
let passwordConfirmation = document.getElementById('password-confirmation');
let emailErrorMessage = document.querySelector('#p-one');
let passwordErrorMessage = document.querySelector('#p-two');
let passwordConfirmErrorMessage = document.querySelector('#p-three');
let nameErrorMessage = document.querySelector('#p-zero');



signUpButton.addEventListener('click', (e) => {
e.preventDefault();
  if (nameInput.value === '') {
    nameErrorMessage.innerHTML = 'please enter your name';
  } else if(nameInput.value.trim().length < 3){
    nameErrorMessage.innerHTML = 'please enter a valid name';
  }else{
    nameErrorMessage.innerHTML = 'valid name';
  }




    if (emailInput.value ===  '') {
        emailErrorMessage.innerHTML = 'please enter a valid email';
    }else if (emailInput.value !== ''){
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      let result = emailRegex.test(emailInput.value);
      if(result == true){
        emailErrorMessage.innerHTML = ' valid email';
      }else if(result == false){
        emailErrorMessage.innerHTML = 'please enter a valid email';
      }
    }


     if(passwordInput.value === ''){
        passwordErrorMessage.innerHTML = 'please enter a valid password';
    }else if (passwordInput.value != ''){
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      let passwordResult = passwordRegex.test(passwordInput.value);

      if (passwordResult == true) {
        passwordErrorMessage.innerHTML = ' valid password';
      } else if(passwordResult == false){
        passwordErrorMessage.innerHTML = ' please enter a valid password';
      }
    } 



    if (passwordConfirmation.value === '') {
      passwordConfirmErrorMessage.innerHTML = 'Confirm password';
    }else if(passwordConfirmation.value != ''){
      const passwordRegex2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      let passwordResult2 = passwordRegex2.test(passwordConfirmation.value);

      if (passwordResult2 == true) {
        passwordConfirmErrorMessage.innerHTML = ' valid password';
      } else if(passwordResult2 == false){
        passwordConfirmErrorMessage.innerHTML = ' please enter a valid password';
      }
    }
    if (passwordConfirmation.value != passwordInput.value) {
      passwordConfirmErrorMessage.innerText = 'Confirm password again';
   }
});
