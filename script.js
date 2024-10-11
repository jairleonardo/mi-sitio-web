// Función para mostrar el horario de cortes de luz según la provincia seleccionada
function mostrarHorario() {
    const selectedProvince = document.getElementById('region').value;
    const scheduleImageDiv = document.getElementById('schedule-image');
    
    // Limpiar el contenido anterior
    scheduleImageDiv.innerHTML = '';

    // Horarios de cortes por provincia
    const horarios = {
        "Azuay": "08:00 AM - 12:00 PM",
        "Bolívar": "08:00 AM - 10:00 AM",
        "Cañar": "09:00 AM - 11:00 AM",
        "Carchi": "10:00 AM - 12:00 PM",
        "Chimborazo": "11:00 AM - 01:00 PM",
        "Cotopaxi": "09:00 AM - 01:00 PM",
        "El Oro": "07:00 AM - 09:00 AM",
        "Esmeraldas": "01:00 PM - 03:00 PM",
        "Galápagos": "11:00 AM - 01:00 PM",
        "Guayas": "08:00 AM - 12:00 PM",
        "Imbabura": "10:00 AM - 12:00 PM",
        "Loja": "12:00 PM - 02:00 PM",
        "Los Ríos": "08:00 AM - 10:00 AM",
        "Manabí": "09:00 AM - 11:00 AM",
        "Morona Santiago": "11:00 AM - 01:00 PM",
        "Napo": "10:00 AM - 12:00 PM",
        "Orellana": "09:00 AM - 11:00 AM",
        "Pastaza": "08:00 AM - 10:00 AM",
        "Pichincha": "11:00 AM - 01:00 PM",
        "Santa Elena": "10:00 AM - 12:00 PM",
        "Santo Domingo de los Tsáchilas": "01:00 PM - 03:00 PM",
        "Sucumbíos": "08:00 AM - 10:00 AM",
        "Tungurahua": "12:00 PM - 02:00 PM",
        "Zamora-Chinchipe": "09:00 AM - 11:00 AM"
    };

    // Mostrar el horario correspondiente si se selecciona una provincia
    if (selectedProvince) {
        const horario = horarios[selectedProvince];
        scheduleImageDiv.innerHTML = `<p>Horario de corte de luz para ${selectedProvince}: ${horario}</p>`;
    }
}
function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const arrow = element.querySelector('.arrow');
    
    // Alternar la visibilidad del contenido
    if (content.style.display === "block") {
        content.style.display = "none";
        arrow.textContent = "▼"; // Cambiar la flecha hacia abajo
    } else {
        content.style.display = "block";
        arrow.textContent = "▲"; // Cambiar la flecha hacia arriba
    }

    // Añadir la clase 'active' para rotar la flecha si el contenido está visible
    element.classList.toggle("active");
}

// Función para agregar un nuevo comentario
function agregarComentario(event) {
    event.preventDefault(); // Evita que la página se recargue al enviar el formulario

    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value;

    // Verifica si el comentario está vacío
    if (commentText.trim() !== "") {
        const commentList = document.getElementById('comment-list');

        // Crear un nuevo div para el comentario
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.textContent = commentText;

        // Añadir el comentario a la lista
        commentList.appendChild(newComment);

        // Limpiar el campo de entrada
        commentInput.value = '';
        return false;
    }
}

// Función para gestionar la suscripción
document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita la recarga de la página

    const emailInput = document.querySelector('#subscribe-form input[type="email"]');
    const subscribeMessage = document.getElementById('subscribe-message');

    if (emailInput.value) {
        subscribeMessage.textContent = "Te has suscrito exitosamente con: " + emailInput.value;
        subscribeMessage.style.color = 'green';
        emailInput.value = ''; // Limpiar el campo de entrada
    } else {
        subscribeMessage.textContent = "Por favor, ingresa un correo válido.";
        subscribeMessage.style.color = 'red';
    }
});
