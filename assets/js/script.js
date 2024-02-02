const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(function () {
    $("#enviar-form").on("click", function () {
        alert("¡Formulario enviado! Pronto nos pondremos en contacto contigo");
    });
});