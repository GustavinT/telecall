function saveDataToLocalStorage() {
    const tarefa = document.querySelector("#tarefa").value;
    const pass = document.querySelector("#pass").value;



    localStorage.setItem("email", tarefa);
    console.log(tarefa);
    localStorage.setItem("senha", pass);
    console.log(pass);
  }