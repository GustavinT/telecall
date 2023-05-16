

var email = document.querySelector('email')

function cadastrar(){
    

    if (localStorage.cont) {
        localStorage.cont = Number(localStorage.cont)+1
    } else {
        localStorage.cont = 1;
    }
    }
    cadastri = document.getElementById('email').value;
    localStorage.setItem("cad_"+localStorage.cont,cad);
function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    

    if (login == localStorage.getItem("email") &&  senha == localStorage.getItem("senha")){location.href ='index.html'}
    else{document.getElementById('ErrorRecorder').style.display = "inline", document.getElementById('Errorsenha').style.display = 'inline';
    }}
