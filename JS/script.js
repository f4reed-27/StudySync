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

const pass = document.getElementById('pass');
const confirmPass = document.getElementById('confirm');
const register = document.getElementById('register');
const email = document.getElementById('email');

register.addEventListener('click', checkingConfirmPassword);

function checkingConfirmPassword() {
    if (email.value === '' || pass.value === '') {
        alert('Email or Password is missing');
        return;
    }
    if (pass.value !== confirmPass.value) {
        alert('The password does not match. Try again.');
        return;
    }
    console.log(email.value, pass.value, confirmPass.value);
    signIn(email.value, pass.value, confirmPass.value);
}

async function signIn(email, password, passwordConfirm) {
    try {
        const response = await fetch('https://studysync-backend-da9k.onrender.com/App/Register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, passwordConfirm }),
        });

        if (!response.ok) {
            alert('Sign UP successfull. You can login now');
        } else {
            alert('An error occured. Re-register');
        }

        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error('Error registering:', err);
        alert('Something went wrong. Try again later.');
    }
}
