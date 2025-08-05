document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        alert(`¡Gracias ${formData.get('name')}! Tu mensaje ha sido enviado.`);
        e.target.reset();
    });

    // Escape para cerrar modal
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && document.getElementById('loginModal').style.display === 'block') {
            closeModal();
        }
    });

    // Triple click en logo para admin
    let logoClickCount = 0;
    document.addEventListener('click', e => {
        if (e.target.classList.contains('logo')) {
            logoClickCount++;
            if (logoClickCount === 3) {
                const adminPassword = prompt('Contraseña de admin:');
                if (adminPassword === 'admin123') {
                    if (users.length === 0) return alert('No hay usuarios registrados.');
                    let msg = users.map((u, i) => `${i + 1}. ${u.name} - ${u.email}`).join('\n');
                    alert('USUARIOS:\n' + msg);
                } else {
                    alert('Contraseña incorrecta');
                }
                logoClickCount = 0;
            }
            setTimeout(() => { logoClickCount = 0; }, 2000);
        }
    });
});
