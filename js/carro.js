// Seleciona o contêiner que contém todas as imagens do carrossel
const car_imgs = document.querySelector('.carousel')
// Seleciona todas as imagens dentro do contêiner do carrossel
const imgs = document.querySelectorAll('.carousel-slide')
// Seleciona o botão de controle "anterior" do carrossel
const anterior = document.querySelector('#prevBtn')
// Seleciona o botão de controle "próximo" do carrossel
const proximo = document.querySelector('#nextBtn')

// Inicializa o índice para acompanhar a imagem atual visível
let index = 0

// Função para mostrar a imagem com base no índice fornecido
function showImage(idx) {
    // Calcula a quantidade de deslocamento necessário para mostrar a imagem correta
    const translateX = -idx * 100
    // Aplica o deslocamento ao contêiner de imagens para mostrar a imagem correta
    car_imgs.style.transform = `translateX(${translateX}%)`
}

// Adiciona um evento de clique ao botão "próximo" para navegar para a próxima imagem
proximo.addEventListener('click', () => {
    // Atualiza o índice para a próxima imagem, ou volta à primeira imagem se estiver na última
    index = (index < imgs.length - 1) ? index + 1 : 0
    // Mostra a imagem correspondente ao novo índice
    showImage(index)
})

// Adiciona um evento de clique ao botão "anterior" para navegar para a imagem anterior
anterior.addEventListener('click', () => {
    // Atualiza o índice para a imagem anterior, ou volta à última imagem se estiver na primeira
    index = (index > 0) ? index - 1 : imgs.length - 1
    // Mostra a imagem correspondente ao novo índice
    showImage(index)
})

// Função para passar automaticamente para a próxima imagem a cada 5 segundo
function autoSlide() {
    // Atualiza o índice para a próxima imagem, ou volta à primeira imagem se estiver na última
    index = (index < imgs.length - 1) ? index + 1 : 0
    // Mostra a imagem correspondente ao novo índice
    showImage(index)
}

// Configura um intervalo para chamar a função autoSlide a cada 5 segundos (5000 milissegundos)
setInterval(autoSlide, 18000)