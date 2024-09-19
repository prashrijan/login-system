const password = document.querySelector('#password')
const confirmPassword = document.querySelector("#confirm_password")
const eyeOpens = document.querySelectorAll('#eye_open')
const eyeCloses = document.querySelectorAll('#eye_close')

function togglePasswordVisibility(passwordInput, eyeOpen, eyeClose) {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeOpen.classList.remove('hidden');
        eyeClose.classList.add('hidden');
    } else {
        passwordInput.type = 'password';
        eyeOpen.classList.add('hidden');
        eyeClose.classList.remove('hidden');
    }
}


[password, confirmPassword].forEach((input, index) => {
    eyeOpens[index].addEventListener('click', () => togglePasswordVisibility(input, eyeOpens[index], eyeCloses[index]));
    eyeCloses[index].addEventListener('click', () => togglePasswordVisibility(input, eyeOpens[index], eyeCloses[index]));
});




