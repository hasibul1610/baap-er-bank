// Login Submit Event Handler 
document.getElementById('login-submit-button').addEventListener('click',function(){

    // getting User Email 
    const emailField = document.getElementById('input-email');
    const userEmail = emailField.value ;
    

    // getting Uaer Password 
    const passwordField = document.getElementById('input-password');
    const userPassword = passwordField.value;
    

    // validating the user 
    if(userEmail=='shanto@gmail.com' && userPassword== 'shanto'){
        window.location.href = 'banking.html';
    }


})