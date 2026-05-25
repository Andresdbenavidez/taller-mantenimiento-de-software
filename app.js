const input = document.getElementById('nuevaTarea');
const boton = document.getElementById('btnAgregar');
const lista = document.getElementById('listaTareas');

// Cargar tareas guardadas al iniciar
cargarTareas();

boton.addEventListener('click', () => {
    if(input.value.trim() !== '') {
        agregarTareaDOM(input.value);
        guardarTareaLocal(input.value);
        input.value = ''; 
    }
});

lista.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI') {
        e.target.style.textDecoration = 'line-through';
    }
});

function agregarTareaDOM(texto) {
    const li = document.createElement('li');
    li.textContent = texto;
    lista.appendChild(li);
}

function guardarTareaLocal(texto) {
    let tareas = JSON.parse(localStorage.getItem('misTareas')) || [];
    tareas.push(texto);
    localStorage.setItem('misTareas', JSON.stringify(tareas));
}

function cargarTareas() {
    let tareas = JSON.parse(localStorage.getItem('misTareas')) || [];
    tareas.forEach(tarea => agregarTareaDOM(tarea));
}