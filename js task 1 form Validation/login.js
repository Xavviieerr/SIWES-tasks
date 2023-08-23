const loginButton = document.getElementById('login-button');
let emailMessage = document.querySelector('#email-input');
let passwordMessage = document.querySelector('#password-input');
let emailErrorMessage = document.querySelector('#p-one');
let passwordErrorMessage = document.querySelector('#p-two');

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
     
    if (emailMessage.value ===  '') {
        emailErrorMessage.innerHTML = 'please enter a valid email';
    }else if (emailMessage.value !== ''){
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      let result = emailRegex.test(emailMessage.value);
      if(result == true){
        emailErrorMessage.innerHTML = ' valid email';
      }else if(result == false){
        emailErrorMessage.innerHTML = 'please enter a valid email';
      }
    }


     if(passwordMessage.value === ''){
        passwordErrorMessage.innerHTML = 'please enter a valid password';
    }else if (passwordMessage.value != ''){
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      let passwordResult = passwordRegex.test(passwordMessage.value);

      if (passwordResult == true) {
        passwordErrorMessage.innerHTML = ' valid password';
      } else if(passwordResult == false){
        passwordErrorMessage.innerHTML = ' please enter a valid password';
      }
    } 
}
);