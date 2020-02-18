let alunos = ["Guilherme", "Edson", "Bruno", "Gustavo"];
let idades = [25, 19, 24, 27];
//alterar mantendo o mesmo tamanho do array (.map)
let alunosComSobrenome = alunos.map(aluno => {
  return aluno + " Souza";
});

console.log(alunosComSobrenome)
console.log(alunos); // .map() nao altera o valro da variavel

//alterar e dimnuir o tamanho do array (.filter)
let alunosNomePequeno = alunos.filter(aluno => {
  return aluno.length <= 6;
});

//somar os valores da array (.reduce)
let totalIdade = idades.reduce((acumulador, idade) => {
  return acumulador + idade;
});

console.log(alunosNomePequeno)
console.log(totalIdade)