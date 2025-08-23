const login = document.getElementById('login');
const loginEmail = document.getElementById('loginEmail');
const loginPass = document.getElementById('loginPass');
const h1 = document.getElementById('h1');

login.addEventListener('click', login2);

function login2() {
    if (loginEmail.value === '' || loginPass.value === '') {
        alert('Empty fields');
        return;
    }
    console.log(loginEmail.value);
    Login(loginEmail.value, loginPass.value);
}

async function Login(email, password) {
    try {
        const user = await fetch('https://studysync-backend-da9k.onrender.com/App/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!user.ok) {
            alert('Login in successful.');
        } else {
            const data = await user.json();
            alert('Successful login');
            console.log('User data:', data);
            h1.innerHTML = email;
        }
    } catch (err) {
        console.error('Error logging in:', err);
        alert('Something went wrong. Try again later.');
    }
}
