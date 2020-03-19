const petModel = require("../model/pet");

const petController = {
index: (req, res) => {
    
res.send(`<font size="50">
** Petshop DH **<br>
${petModel.listarPets()}`)
},
add: (req, res) => {
    let novoPet = req.params;
    petModel.adicionarPet(novoPet);
    res.send(`<font size="5">
    ${novoPet.nome} foi adicionado com sucesso!`)
},
buscar: (req, res) => {
    let nomePet = req.params.nome;
    let petsEncontrados = petModel.buscarPet(nomePet)
    petsEncontrados.length > 0 ? res.send(`<font size="5">
    Foram encontrados ${petsEncontrados.length} pets`) : res.send(`<font size="5">
    Não foram encontrados nenhum pet chamado ${nomePet}`);
    
}
};

module.exports = petController;