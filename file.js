const aggiungiAppuntamento = (submitEvent) => {
  submitEvent.preventDefault();

  const form = submitEvent.target;
  const inputList = form.elements;

  const appuntamento = {};
  for (let i = 0; i < inputList.length; i++) {
    if (inputList[i].tagName !== "Button") {
      console.log(inputList);

      const valoreInput = inputList[i].value;
      const idInput = inputList[i].id;
      appuntamento[idInput] = valoreInput;
    }
  }
  console.log(appuntamento);

  const conferma = confirm("sei sicuro?");
  if (conferma) {
    const container = document.querySelector(".appuntamenti");
    const li = document.createElement("li");
    li.innerText = ` ${appuntamento.nome}`;
    container.appendChild(li);
  } else alert("operazione annullata");
};
