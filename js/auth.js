let users = [];

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('registerForm').addEventListener('submit', registerUser);
    document.getElementById('loginForm').addEventListener('submit', loginUser);
});

function registerUser(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword'),
        registrationDate: new Date().toISOString()
    };

    if (userData.password !== userData.confirmPassword) return alert('Las contraseñas no coinciden');
    if (users.find(user => user.email === userData.email)) return alert('Correo ya registrado');

    users.push(userData);
    alert('¡Registro exitoso!');
    switchTab('login');
    document.querySelector('.tab-button').click();
    e.target.reset();
}

function loginUser(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = users.find(u => u.email === formData.get('email') && u.password === formData.get('password'));

    if (user) {
        alert(`¡Bienvenido, ${user.name}!`);
        closeModal();
        e.target.reset();
    } else {
        alert('Credenciales incorrectas');
    }
}
