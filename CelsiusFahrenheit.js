const readline = require('readline-sync');

let Descobrir = readline.question("Voce quer descobrir a sua temperatura e em Celsius ou em Fahrenheit?");
let conversao = Descobrir.toLocaleLowerCase()


if (conversao === "celsius") {
    let valorCelsius = readline.question("Digite o valor da temperatura em celsius")
    function CelsiusParaFahrenheit(valorCelsius) {
        let valorfinalCelsius = (valorCelsius*9/5) + 32
        console.log(`O valor final da temperatura que você digitou ${valorCelsius}, em fahrenheit é ${valorfinalCelsius}`)
    }
    CelsiusParaFahrenheit(valorCelsius)
}

else if (conversao === "fahrenheit") {
    let valorFahrenheit = readline.question("Digite o valor da temperatura em fahrenheit")
    function FahrenheitParaCelsius(valorFahrenheit) { 
        let valorfinalFahrenheit = (valorFahrenheit - 32) / 1.8
        console.log(`O valor final da temperatura que você digitou ${valorFahrenheit}, em celsius é ${valorfinalFahrenheit}`)
    }
    FahrenheitParaCelsius(valorFahrenheit)
}

else {
    return console.log("Essa opção não existe")
}





