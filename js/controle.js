let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');




function addTarefa() {
    //Pegar o Valor digitado no Input
    let valorInput = input.value;

    //SE NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO
    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
        ++contador;

        let novoItem = `<div id="${contador}" class="item">
                <div onclick="marcarTarefa(${contador})" class="item-icone">
                    <i class="mdi mdi-circle-outline"></i>
    
                </div>
                <div onclick="marcarTarefa(${contador})" class="item-nome">
                     ${valorInput}    
                </div>
                <div class="item-botao">
                    <button onclick="deletar(${contador})" class="delete"> <i class="mdi mdi-delete"></i>Deletar</button>
    
                </div>
                
            </div>`;

            //Adicionar um novo item no main

        main.innerHTML += novoItem;
            //zerar os campinhos
            input.value = "";
            input.focus();
    }

}

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}
function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if(classe.includes('marcado')) {
        item.classList.remove('marcado');
        item.style.textDecoration = 'none';
        item.style.backgroundColor = '';
    } else {
        item.classList.add('marcado');
        item.style.textDecoration = 'line-through';
        item.style.backgroundColor = '#a0efac';
    }
main.appendChild(item);

    if(classe == "item") {
        item.classList.add('marcado');
        var icone = item.querySelector('.item-icone i');
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');
    } else {
        item.classList.remove('marcado');
        var icone = item.querySelector('.item-icone i');
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}

input.addEventListener("keyup", function(event){
    //Se teclou enter (13)
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();

    };
});