var arr = [];
var sen = [];
var contar = 0;


function addItem(){
  if (localStorage.Cadastro){             
     arr = localStorage.getItem('Cadastro'),location.href = 'login.html'; 
  }
  

  let novoItem = document.getElementById("v").value;
  arr.push(novoItem);
  document.getElementById("v").value = "";
  localStorage.Cadastro = arr;

 
  if (localStorage.Senha){             
    sen = localStorage.getItem('Senha'); 
 }
  let novaSenha = document.getElementById("s").value;
  sen.push(novaSenha);
  document.getElementById("s").value = "";
  localStorage.Senha = sen;

}