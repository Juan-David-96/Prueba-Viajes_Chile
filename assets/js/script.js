// Funcion que oculta el texto de la tarjeta
$(document).ready(function() {
    $('.destacados-carta-texto').click(function() {
        $(this).hide();
    });
    // Esta funcion busca las ultimas modificaciones de la clase destacados-carta-texto y la muestras
    $('.destacados-carta-img').click(function() {
        $(this).closest('.card').find('.destacados-carta-texto').show();
    });
});
// Funcion que muestra una alerta al precionar el boton enviar del formulario
$(document).ready(function() {
    $('.contacto-boton').click(function() {
        // Se guardan los valores de los inputs y textarea con .val()
        // Si la variable guardada es vacia devuelve un boleano = False
        var nombre = $('#nombre').val();
        var asunto = $('#asunto').val();
        var mensaje = $('#mensaje').val();
        // Se valida la existencia de texto en todos los campos
        if (nombre && asunto && mensaje) {
            alert('Su mensaje fue enviado con exito!');
        } else {
            alert('Por favor complete todos los campos');
        }
    });
});