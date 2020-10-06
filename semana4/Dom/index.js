
function adicionaTarefa() {
  const meuInput = document.getElementById("meu-input");

  let divdomingo = document.getElementById("domingo");
  let divsegunda = document.getElementById("segunda");
  let divterca = document.getElementById("terca");
  let divquarta = document.getElementById("quarta");
  let divquinta = document.getElementById("quinta");
  let divsexta = document.getElementById("sexta");
  let divsabado = document.getElementById("sabado");

  let diaEscolhido = document.getElementById("semana");

  switch (diaEscolhido) {
    case divsegunda:
      const minhaLista = document.getElementById("minha-lista");

      minhaLista.innerHTML += `<li>${meuInput.value}</li>`;
      meuInput.value = "";
      break;

    case divterca:
      const minhalista2 = document.getElementById("minha-lista2");

      minhaLista2.innerHTML += `<li>${meuInput.value}</li>`;
      meuInput.value = "";
      break;
    case divquarta:
      const minhaLista3 = document.getElementById("minha-lista3");

      minhaLista3.innerHTML += `<li>${meuInput.value}</li>`;
      meuInput.value = "";
      break;
    case divquinta:
      const minhaLista4 = document.getElementById("minha-lista4");

      minhaLista4.innerHTML += `<li>${meuInput.value}</li>`;
      meuInput.value = "";
      break;
    case divsexta:
      const minhaLista5 = document.getElementById("minha-lista5");

      minhaLista5.innerHTML += `<li>${meuInput.value}</li>`;
      meuInput.value = "";
      break;
    case divsabado:
      const minhaLista6 = document.getElementById("minha-lista6");

      minhaLista6.innerHTML += `<li>${meuInput.value}</li>`;
      meuInput.value = "";
      break;
    case divdomingo:
      const minhaLista7 = document.getElementById("minha-lista7");

      minhaLista7.innerHTML += `<li>${meuInput.value}</li>`;
      meuInput.value = "";
      break;
    case "":
      break;
    default:
  }
}



// let cliques = 0;

// function adicionaTarefa() {
//   const meuInput = document.getElementById("meu-input");

//   if (meuInput.value !== "") {
//     const minhaLista = document.getElementById("minha-lista");

//     minhaLista.innerHTML += `<li>${meuInput.value}</li>`;
//     meuInput.value = "";
//   }
// }

// let cliques2 = 0;

// function adicionaTarefa2() {
//   const meuInput2 = document.getElementById("meu-input2");

//   if (meuInput2.value !== "") {
//     const minhaLista2 = document.getElementById("minha-lista2");

//     minhaLista2.innerHTML += `<li>${meuInput2.value}</li>`;
//     meuInput2.value = "";
//   }
// }

// let cliques3 = 0;

// function adicionaTarefa3() {
//   const meuInput3 = document.getElementById("meu-input3");

//   if (meuInput3.value !== "") {
//     const minhaLista3 = document.getElementById("minha-lista3");

//     minhaLista3.innerHTML += `<li>${meuInput3.value}</li>`;
//     meuInput3.value = "";
//   }
// }
