var inputTarea = document.getElementById("tarea");
var btnAgregar = document.getElementById("agregar");
var listado = document.getElementById("listado");
var btnBorrar = document.getElementById("borrar-tareas");

btnAgregar.onclick = function() {
    if (inputTarea.value == "") {
        return;
    }

    var elemento = inputTarea.value;
    var li = document.createElement("li");

    var Texto = document.createElement("span");
    Texto.textContent = elemento;
    Texto.style.cursor = "pointer";
    Texto.onclick = function() {
        li.classList.toggle("tachado");
    };

    li.appendChild(Texto);

    var btnEliminar = document.createElement("span");
    btnEliminar.textContent = "X";
    li.appendChild(btnEliminar);

    btnEliminar.onclick = function() {
        li.remove();
    };

    listado.appendChild(li);
    inputTarea.value = "";
};

btnBorrar.onclick = function() {
    listado.innerHTML = "";
};