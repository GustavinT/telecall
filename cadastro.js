function saveDataToLocalStorage() {
    const tarefa = document.querySelector("#tarefa").value;
    localStorage.setItem("email", tarefa);
    console.log(tarefa);
  }