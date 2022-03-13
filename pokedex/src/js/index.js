const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
const pokemonCard= document.querySelectorAll('.cartao-pokmeon')

listaSelecaoPokemon.forEach(pokemon => {
    pokemon.addEventListener('click', () =>{
        const cartaoPokemonAberto =document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value
        const cartaoPokemonParaAbrir=document.getElementById('cartao-' + idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const iconeAtivo = document.querySelector('.ativo')
        iconeAtivo.classList.remove('ativo')

        const iconeSelecinado = document.getElementById(idPokemonSelecionado)
        iconeSelecinado.classList.add('ativo')
    })
})