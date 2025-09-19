// Definindo a interface Livro
interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

// Criando um objeto do tipo Livro
const livro: Livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954
};

// Função para exibir as informações do livro
function exibirLivro(livro: Livro): void {
    console.log(`Título: ${livro.titulo}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Ano de Publicação: ${livro.anoPublicacao}`);
}

// Chamando a função para exibir o livro
exibirLivro(livro);
