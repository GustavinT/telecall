

var email = document.querySelector('Cadastro')

function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    

    if (login == localStorage.getItem("Cadastro") &&  senha == localStorage.getItem("Senha")){location.href ='index.html'}
    else{document.getElementById('ErrorRecorder').style.display = "inline", document.getElementById('Errorsenha').style.display = 'inline';
    }}
