// Seleccionamos el botón y el párrafo donde se mostrará el mensaje
const button = document.getElementById('myButton');
const message = document.getElementById('message');

// Añadimos un evento al botón para que cuando se haga clic, se muestre un mensaje
button.addEventListener('click', function() {
    message.textContent = "¡Has hecho clic en el botón!";
    message.style.color = 'green';
});
