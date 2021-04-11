function email_click(){
    miStorage = window.localStorage;
    var email = document.getElementById('email').value;
    localStorage.setItem('email', email);
    window.location = "preguntas.html";
}