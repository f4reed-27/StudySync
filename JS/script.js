// const { post } = require("../../Routes/RegisterRoute");



function show() {

    document.getElementById('menu-bar').style.cssText = "left:0%!important;";
    document.getElementById('click').className = "fa fa-times icon";
    document.getElementById('click').setAttribute("onclick", "hide()");

}

function hide() {

    document.getElementById('menu-bar').style.cssText = "left:-100%!important;";
    document.getElementById('click').className = "fa fa-bars icon";
    document.getElementById('click').setAttribute("onclick", "show()");

}


const pass = document.getElementById('pass')
const confirmPass = document.getElementById('confirm')

const register = document.getElementById('register')
const email = document.getElementById('email')


register.addEventListener('click', checkingConfrimPassword)


function checkingConfrimPassword() {

    if (email.value === '' || pass.value === '') {
        alert('Email or Password is missing')
    }
    if (pass.value != confirmPass.value) {
        alert('The password does not match. Try Again.')
    }
    console.log(email.value, pass.value, confirmPass.value);
    signIn(email.value, pass.value, confirmPass.value)

}

async function signIn(email, password, passwordConfirm) {
    const response = await fetch('/App/Register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
            passwordConfirm


        }),
    })
    if (!response.ok) {
        alert('User already exists. Please login ')
    }
    else {
        alert('Sign In Successful.You can login now')
    }
    const data = await response.json()
    console.log(data);
}

// Creating login functionality
