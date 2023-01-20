const readline = require('readline-sync');
let NotaAluno = readline.question("Insira sua nota: ");

if(NotaAluno >= 90) {
  console.log("A nota do aluno foi A");
}
else if(NotaAluno >= 80 && NotaAluno <= 89) {
  console.log("A nota do aluno foi B");
}
else if(NotaAluno >= 70 && NotaAluno <= 79) {
  console.log("A nota do aluno foi C");
}
else if(NotaAluno >= 60 && NotaAluno <= 69) {
  console.log("A nota do aluno foi D");
}
else{
  console.log("A nota do aluno foi E");
}