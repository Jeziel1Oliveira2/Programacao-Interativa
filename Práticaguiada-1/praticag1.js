function Aluno(nome,qtdFaltas,notas){
    this.nome = nome,
    this.qtdFaltas= qtdFaltas, 
    this.notas= notas,
    this.media=function() {
        let somaNotas = this.notas.reduce(function(acumulador,notas){
           return acumulador + notas;
        });
        let arrayNotas = this.notas.length;  
        return somaNotas / arrayNotas;
    }
    console.log(Array)
    this.add=function(){
       return this.qtdFaltas + 1;
    }
};

module.exports = Aluno;