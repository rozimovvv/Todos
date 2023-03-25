var elButton = document.querySelector("#addtodo");
var elTodocontainer = document.querySelector("#todocontainer");
var elInput = document.querySelector("#inputodo");

elButton.addEventListener("click", function () {
  var parahraph = document.createElement("p");
  parahraph.classList.add("parahraph-style");
  parahraph.innerText = elInput.value;
  elTodocontainer.appendChild(parahraph);

  elInput.value = "";
});
