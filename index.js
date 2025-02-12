const btn = document.getElementById('button');
const form = document.getElementById('form');

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_ejsm0hu';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Enviar';
            alert('Mensaje enviado!');
            form.reset(); // Limpia los inputs después de enviar
        }, (err) => {
            btn.value = 'Enviar';
            alert(JSON.stringify(err));
        });
});