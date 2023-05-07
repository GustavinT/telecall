
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
    
    if(login == "email"){location.href = "index.html";
    }
    else{document.getElementById('ErrorRecorder').style.display = "inline";
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
    
}
