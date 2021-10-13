var MDOverLay = document.querySelector('.modal__overlay');
var authForm1 = document.querySelector('.auth-form1');
var authForm2 = document.querySelector('.auth-form2');
var loginBtn = document.querySelector('.login-btn');
var registerBtn = document.querySelector('.register-btn');
var exitBtn = document.querySelectorAll('.btn-nomal')
var modal = document.querySelector('.modal');
var switchLogin = document.querySelector('.switch-login')
var switchRegister = document.querySelector('.switch-register');
Array.from(exitBtn).forEach((e) => {
    e.onclick = () => {
        authForm2.style.display = 'none';
        authForm1.style.display = 'none';
        MDOverLay.style.display = 'none';
        modal.style.display = 'none';
    }
})
registerBtn.onclick = () => {
    modal.style.display = 'flex';
    authForm1.style.display = 'block';
    MDOverLay.style.display = 'block';
}
loginBtn.onclick = () => {
    modal.style.display = 'flex';
    authForm2.style.display = 'block';
    MDOverLay.style.display = 'block';
}

switchLogin.onclick = () => {
    authForm1.style.display = 'none';
    authForm2.style.display = 'block';
}
switchRegister.onclick = () => {
    authForm2.style.display = 'none';
    authForm1.style.display = 'block';
}