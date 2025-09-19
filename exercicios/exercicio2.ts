// Criando o array de cidades
const cidades: string[] = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba", "Salvador"];

// Função para listar as cidades no console
function listarCidades(cidades: string[]): void {
    cidades.forEach(cidade => {
        console.log(cidade);
    });
}

// Chamando a função para listar as cidades
listarCidades(cidades);
