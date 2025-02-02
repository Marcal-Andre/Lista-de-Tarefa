let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = documentElementById('areaLista');


    

function addTarefa(){
    //Pegar o Valor digitado no Input
    let valorInput = input.value;

    //SE NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO
    if ((valorInput !=="") && (valorInput !== null) && (valorInput !== undefined)){

        let novoItem =` <div class="item">
                <div class="item-icone">
                    <i class="mdi mdi-circle-outline"></i>
    
                </div>
                <div class="item-nome">
                    Teste de Tarefa
    
                </div>
                <div class="item-botao">
                    <button class="delete"> <i class="mdi mdi-delete"></i>Deletar</button>
    
                </div>
                
            </div>;`

                main.innerHTML += novoItem;
    }


}