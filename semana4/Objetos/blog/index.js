

function cliqueAqui() {
  const mostrartitulo = document.getElementById("titulo-post")
  const mostrarautor = document.getElementById("autor-post")
  const mostrarconteudo = document.getElementById("conteudo-post")

  const postar = {
     
      titulo: mostrartitulo,
      autor: mostrarautor,
      conteudo: mostrarconteudo,
     
  }
  
console.log (arraydeObjeto.value)
console.log(mostrartitulo.value)
console.log(mostrarautor.value)
console.log(mostrarconteudo.value)

 nomedalet.value = ""
}

function mostrarArray() {


  const arraydeObjeto = {
    ... postar,
    arrayCopia : [... postar]
  
  }
console.log(arraydeObjeto)
const adicione = arraydeObjeto.push('')
}


