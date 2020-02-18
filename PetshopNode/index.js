const http = require("http");  //Traz um modulo adicional para o js pelo node
const petshop = require("./petshop");  //adiciona o modulo local (mesmo diretorio)
const url = require("url");

const server = http.createServer((req, res) => {  //Cria um servidor
res.writeHead(200, { "Content-Type": "text;plain; charset=UTF-8" })  //adiconar informacao durante o request
res.write("**Bem vindo ao Petshop**") // O cliente que acessou recebe de retorno a string para a pagina

let urlCompleta = url.parse(req.url, true);  //retorna obj com partes da url
let queryString = urlCompleta.query;
let rota = urlCompleta.pathname;

switch (rota) {
    case "/pets":
    res.write(`
        Listando pets...`);
    const pets = petshop.listarPets();
    pets.length > 0 ? res.write(pets) : res.write("Nenhum pet cadastrado.");
    break;
    case "/pets/add":
    let novoPet = queryString;
    if (petshop.adicionarPet(novoPet)) {
    res.write(`
    ${novoPet.nome} adicionado com Sucesso`);
    } else {
        res.write(`
        Ops,algo deu errado!`)
    }
    break;
    case "/pets/buscar":
    let petsEncontrados = petshop.buscarPet(queryString.nome);
    res.write(`
    Buscando pet`);
    petsEncontrados.length > 0 ? res.write( `
    Encontramos ${petsEncontrados.length} pets com o nome ${queryString.nome}`) : res.write(`
    Ops, não encontramos nenhum pet co esse nome!`)
    break;
    default:
    res.write("** Petshop DH **")
};

res.end(); //Finaliza o programa 
}).listen(3000, "localhost", () => { //Ativa o servidor em uma porta
    console.log("Servidor atviado na porta 3000");
});