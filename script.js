document.addEventListener('DOMContentLoaded', () => {

    const url = 'https://api.thecatapi.com/v1/images/search?limit=10'

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Erro ao buscar dados')
            }
            return response.json()
        })
        .then((data) => {
            gerarImagem(data[0].url)
        })
        .catch((err) => {
            console.log(err)
        })
})

const gerarImagem = (urlImagem) => {

    const img = document.getElementById('cat')
    img.src = urlImagem
}

const gerar = document.getElementById('gerar')
gerar.addEventListener('click', () => {

    const url = 'https://api.thecatapi.com/v1/images/search?limit=10'
    
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Erro ao gerar gato")
            }
            return response.json()
        })
        .then((data) => {
            gerarImagem(data[0].url)
        })
        .catch((err) => console.log(err))
})
