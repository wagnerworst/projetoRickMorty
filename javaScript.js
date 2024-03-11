async function executarBusca()
{
    let id = document.getElementById("codigoPersonagem");
    let personagem = await(comunicaApi(id.value));

    let divNomeResultado = document.getElementById("nomePersonagemResultado");
    let divImagemResultado = document.getElementById("imagemPersonagemResultado");
    divNomeResultado.innerHTML = personagem.name;
    divImagemResultado.src = personagem.image;

    
}

async function comunicaApi(id)
{
    const url = 'https://rickandmortyapi.com/api/character/' + id;
    const retorno = await fetch(url);
    return retorno.json();
}
//coloquei esse trecho pra evitar do site ficar quebrado ao inicializar
window.onload = executarBusca();