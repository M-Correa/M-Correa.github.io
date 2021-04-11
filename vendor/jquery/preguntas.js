function siguiente_click(){
    var nombre = document.getElementById('nombre').value;
    localStorage.setItem('nombre', nombre);
    var edad = document.getElementById('edad').value;
    localStorage.setItem('edad', edad);
    var carrera = document.getElementById('carrera').value;
    localStorage.setItem('carrera', carrera);
    var avance = document.getElementById('avance').value;
    localStorage.setItem('avance', avance);
    var durmio = document.getElementById('durmio').value;
    localStorage.setItem('durmio', durmio);
    var drogas = document.getElementById('drogas').value;
    localStorage.setItem('drogas', drogas);
    window.location = "dibujo.html";
}

