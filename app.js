const input = document.getElementById('nuevaTarea');
const boton = document.getElementById('btnAgregar');
const lista = document.getElementById('listaTareas');

boton.addEventListener('click', () => {
    if(input.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;
        lista.appendChild(li);
        input.value = ''; 
    }
});