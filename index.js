const nomePetshop = "Petshop DH";
//console.log("** " + nomePetshop + " **");
console.log(`** ${nomePetshop} **`) // sintaxe: uso de crases e ${valor} para adicionar dentro da string

let pets = [
  {
    nome: "Batman",
    tipo: "cão",
    raca: "labrador",
    idade: 5,
    genero: "M",
    vacinado: false,
    servicos: ["banho", "tosa"]
  },
  {
    nome: "Costelinha",
    tipo: "cão",
    raca: "vira-lata",
    idade: 10,
    genero: "M",
    vacinado: true,
    servicos: ["banho"]
  },
  {
    nome: "Scooby Doo",
    tipo: "cão",
    raca: "Dogue Alemão",
    idade: 51,
    genero: "M",
    vacinado: false,
    servicos: ["banho", "tosa"]
  },
  {
    nome: "Tom",
    tipo: "gato",
    raca: "poodle",
    idade: 5,
    genero: "M",
    vacinado: false,
    servicos: ["corte de unha"]
  },
  {
    nome: "Ada",
    tipo: "iguana",
    raca: "albina",
    idade: 5,
    genero: "F",
    vacinado: true,
    servicos: ["banho"]
  }
];

const contarVacinados = () => {
let vacinados = pets.filter(pet => pet.vacinado).length;
let naoVacinados = pets.filter(pet => !pet.vacinado).length;

console.log(`-----------------------------------
Temos ${vacinados} pets vacinados.
Temos ${naoVacinados} pets NÂO vacinados.`)
};

const listarPets = () => {
  for (let i of pets) {
    console.log(`--------------------------------------
    Nome: ${i.nome}
    Tipo: ${i.tipo}
    Raça: ${i.raca}
    Idade: ${i.idade} anos
    Genero: ${(i.genero == "F" ? "femea" : "macho")}
    Vacinado: ${(i.vacinado ? "sim" : "não")}
    Serviços: ${i.servicos}`);
  }
  console.log("--------------------------------------");
};

const vacinarPet = pet => {
  if (!pet.vacinado) {
    pet.vacinado = true;
    console.log(`${pet.nome} foi vacinado com sucesso!`);
  } else {
    console.log(`Ops, ${pet.nome} já está vacinado!`);
  }
};

const campanhaVacina = () => {
  console.log("Campanha de vacina 2020");
  console.log("vacinando...");

  let contador = 0;
  let petVacinadosCampanha = 0;
  while (contador < pets.length) {
    if (!pets[contador].vacinado) {
      vacinarPet(pets[contador]);
      petVacinadosCampanha++;
    }
    contador++;
  }
  console.log(`${petVacinadosCampanha} pets foram vaciados nessa campanha!`);
};

const validarDados = novoPet => {
  return (
    novoPet.nome &&
    novoPet.idade &&
    novoPet.tipo &&
    novoPet.raca &&
    novoPet.genero
  );
};

const adicionarPet = novoPet => {
  if (typeof novoPet == "object" && validarDados(novoPet)) {
    // adiciona o pet
    novoPet.nome = String(novoPet.nome);
    novoPet.idade = parseInt(novoPet.idade);

    if (!novoPet.servicos) {
      novoPet.servicos = [];
    }

    pets.push(novoPet);
  } else {
    console.log("Ops, insira um argumento valido!");
  }
};

/*adicionarPet({
    nome:"Pepeu",
   tipo: "Cachorro",
    raca: "Vira-lata",
    idade: 5,
    genero: "M",
   vacinado: true,
    servicos: undefined,
}) 
console.log(listarPets());*/

const darBanhoPet = pet => {
  pet.servicos.push("banho");
  console.log(`${pet.nome} está de banho tomado!`);
};

const tosarPet = pet => {
  pet.servicos.push("tosa");
  console.log(`${pet.nome} está com cabelinho na régua :)`);
};

const apararUnhasPet = pet => {
  pet.servicos.push("corte de unhas");
  console.log(`${pet.nome} está de unhas aparadas!`);
};

const atenderPet = (pet, servicos) => {
  console.log(`Bem vindo, ${pet.nome}`);

  for (let i of servicos) {
    i(pet);
  }

  const pagar = () => {
    console.log("Pagamento realizado com sucesso!");
  };

  pagar();

  console.log(`Volte sempre, ${pet.nome}`);
};

// desafio: atenderPet que executa varios serviços de uma vez
atenderPet(pets[0], [darBanhoPet, tosarPet, apararUnhasPet]);

atenderPet(pets[2], [apararUnhasPet]);

atenderPet(pets[1], [tosarPet, apararUnhasPet]);

const buscarPet = pet => {
  let arr = [];
pets.map(nome => {
if (nome.nome == pet) {
arr.push(nome);
};     
 })
 return arr;
};
console.log(buscarPet("Costelinha"))
