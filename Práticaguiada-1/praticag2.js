const aluno = require ("./praticag1");

let aluno1 = new Aluno ('Samuel Xavier',8,[6,10,9,10,5]); 
let aluno2 = new Aluno ('Rafael',8,[6,9,9,10,5]);
let aluno3 = new Aluno ('Jeziel',8,[6,7,9,10,5]);
let aluno4 = new Aluno ('Matheus',8,[7,9,9,10,5]);

const curso = {
    nome: "Developer",
    notaAprovacao: 7.5,
    faltasMax: 3,
    listasEstudantes:[aluno1, aluno2, aluno3, aluno4]
};

console.log(curso.listasEstudantes);