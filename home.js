document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Clear previous errors
    document.querySelectorAll('.error').forEach(error => error.style.display = 'none');

    let hasErrors = false;

    // Validate name
    const name = document.getElementById('name').value;
    if (name === '') {
        document.getElementById('name-error').textContent = 'Le nom est requis.';
        document.getElementById('name-error').style.display = 'block';
        hasErrors = true;
    }

    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email-error').textContent = 'Veuillez entrer un email valide.';
        document.getElementById('email-error').style.display = 'block';
        hasErrors = true;
    }

    // Validate message
    const message = document.getElementById('message').value;
    if (message === '') {
        document.getElementById('message-error').textContent = 'Le message est requis.';
        document.getElementById('message-error').style.display = 'block';
        hasErrors = true;
    }

    if (!hasErrors) {
        alert('Formulaire soumis avec succès!');
        // Ici, vous pouvez ajouter le code pour envoyer les données du formulaire au serveur
        // Exemple : utiliser fetch ou XMLHttpRequest
        // fetch('/submit', { method: 'POST', body: new FormData(document.getElementById('contact-form')) });
    }
});
