// Função principal para encapsular todo o código e evitar poluir o escopo global
function meuEscopo() {
    // Seleciona o formulário pela classe 'form'
    const form = document.querySelector('.form');
    // Seleciona a div onde os resultados serão exibidos (classe 'resultado')
    const resultado = document.querySelector('.resultado');

    // Cria um array vazio para armazenar os dados das pessoas cadastradas
    const pessoas = [];

    // Função que será chamada ao enviar o formulário
    function recebeEventoForm(evento) {
        // Previne o comportamento padrão do formulário (não recarrega a página)
        evento.preventDefault();

        // Captura os elementos do formulário utilizando suas classes específicas
        const nome = form.querySelector('.nome'); // Campo do nome
        const sobrenome = form.querySelector('.sobrenome'); // Campo do sobrenome
        const peso = form.querySelector('.peso'); // Campo do peso
        const altura = form.querySelector('.altura'); // Campo da altura

        // Adiciona os dados do formulário ao array 'pessoas' como um objeto
        pessoas.push({
            nome: nome.value, // Valor digitado no campo nome
            sobrenome: sobrenome.value, // Valor digitado no campo sobrenome
            peso: parseFloat(peso.value), // Converte o peso para número decimal
            altura: parseFloat(altura.value), // Converte a altura para número decimal
        });

        // Exibe no console o array atualizado com os dados cadastrados
        console.log(pessoas);

        // Adiciona as informações do formulário à div de resultados no HTML
        // O conteúdo é formatado como um parágrafo contendo os dados
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }

    // Adiciona um evento ao formulário para capturar o envio (submit)
    // Quando o evento ocorrer, chama a função 'recebeEventoForm'
    form.addEventListener('submit', recebeEventoForm);
}

// Executa a função principal para inicializar o código
meuEscopo();

/* 
resumo dos comentarios feito pelo chatgpt::
1- Descrição de Objetivos: Explica o propósito de cada parte do código.
2- Seleção de Elementos: Comenta como os elementos HTML são selecionados e para que serão usados.
3- Função de Manipulação de Evento: Detalha como os dados do formulário são capturados e processados.
4- Eventos: Comenta a lógica de adicionar eventos, como submit, ao formulário

*/