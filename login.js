<<<<<<< HEAD
=======

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
>>>>>>> 06a9a4c2506a3e80be6cec3d42e8c65671163f38
function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    
<<<<<<< HEAD
    if(login == localStorage.getItem('email'),senha == ('1234')){location.href = "index.html";
    }
    else{document.getElementById('ErrorRecorder').style.display = "inline", document.getElementById('Errorsenha').style.display = 'inline';
=======
    if(login == "email"){location.href = "index.html";
    }
    else{document.getElementById('ErrorRecorder').style.display = "inline";
>>>>>>> 06a9a4c2506a3e80be6cec3d42e8c65671163f38
    }
            if(senha == "1234"){
                
            }
            else{document.getElementById("Errorsenha").style.display = "inline";}
}
function error(){
    var login = document.getElementById('errorEmail').value;

    if (!Email) {
        document.getElementById('ErrorRecorder').style.display = "block"
    }
<<<<<<< HEAD
function error(){
    var login = document.getElementById('errorEmail').value;

    if (!Email) {
        document.getElementById('ErrorRecorder').style.display = "block"
    }
=======
>>>>>>> 06a9a4c2506a3e80be6cec3d42e8c65671163f38
    
}
