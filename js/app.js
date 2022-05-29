let adicionaProduto =  () => {
  document.querySelector(".botaoAdiciona").addEventListener("click" , (e) => {
    e.preventDefault();
    
    let nomeDoProduto = document.querySelector(".produtoNome");
    let lista = document.querySelector(".lista");
    
    let div = document.createElement("div");
    let li = document.createElement("li");
    
    let removeProduto = document.createElement("button");
    removeProduto.textContent = "remover";
    removeProduto.setAttribute("class","botaoRemover");
     
    function removeItem () {
      removeProduto.addEventListener("click" , function (e) {
        e.preventDefault();
        this.parentNode.remove();
      })
    }
    removeItem();

    li.textContent = nomeDoProduto.value;
    div.appendChild(li);
    div.appendChild(removeProduto);
    lista.appendChild(div);
  
    nomeDoProduto.value = "";
    nomeDoProduto.focus();
  })
}
adicionaProduto();