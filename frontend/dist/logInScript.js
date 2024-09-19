const password = document.querySelector('#password');
const eyeOpen = document.querySelector('#eye_open');
const eyeClose = document.querySelector('#eye_close');

function togglePasswordVisibility() {
    if (password.type === 'password') {
        password.type = 'text';
        eyeOpen.classList.remove('hidden');
        eyeClose.classList.add('hidden');
    } else {
        password.type = 'password';
        eyeOpen.classList.add('hidden');
        eyeClose.classList.remove('hidden');
    }
}

eyeOpen.addEventListener('click', togglePasswordVisibility);
eyeClose.addEventListener('click', togglePasswordVisibility);
