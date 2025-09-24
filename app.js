let Amigos = [];

function agregar_Amigo() {
  const amigo = document.getElementById("amigo").value.trim();

  if (amigo === "") {
    alert("Es necesario agregar un nombre");
    return;
  }
  Amigos.push(amigo);
  document.getElementById("amigo").value = "";
  document.getElementById("amigo").focus();
  document.getElementById("resultado").innerHTML = "";
  actualizar_Amigos();
}

function actualizar_Amigos() {
  document.getElementById("listaAmigos").innerHTML = "";
  for (let amigo of Amigos) {
    document.getElementById("listaAmigos").innerHTML += `<li>${amigo}</li>`;
  }
}


function sortear_Amigo() {
  
  if (Amigos.length < 1) {
    alert("Debes agregar el nombre de al menos dos amigos");
    return;
  }
  const indice = Math.floor(Math.random() * Amigos.length);
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById(
    "resultado"
  ).innerHTML = `<li>${Amigos[indice]}</li>`;
 
  Amigos = [];
}