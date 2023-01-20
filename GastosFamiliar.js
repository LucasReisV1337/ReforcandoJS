const readline = require('readline-sync');
let Receitausr = parseInt(readline.question("Insira sua receita: "));
let Despesausr = parseInt(readline.question("Insira sua despesa: "));
let receitas = []
let despesas = []

receitas.push(Receitausr);
despesas.push(Despesausr);

let GastosFamiliar = {
    receitas,
    despesas
}

function TotalDeReceitas(GastosFamiliar) {
    let totalReceita = GastosFamiliar.receitas.reduce((a, b) => a + b);
    let totalDespesa = GastosFamiliar.despesas.reduce((a, b) => a + b);
    console.log(`Os valores de receita são ${totalReceita} e os valores de despesa são ${totalDespesa} resultarem em ${totalReceita + totalDespesa} `);
    return totalReceita + totalDespesa;
}
console.log(TotalDeReceitas(GastosFamiliar))
