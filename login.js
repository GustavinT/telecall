function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    
    if(login == localStorage.getItem('email'),senha == ('1234')){location.href = "index.html";
    }
    else{document.getElementById('ErrorRecorder').style.display = "inline", document.getElementById('Errorsenha').style.display = 'inline';
    }
    }
function error(){
    var login = document.getElementById('errorEmail').value;

    if (!Email) {
        document.getElementById('ErrorRecorder').style.display = "block"
    }
    
}
