import PromptSync = require('prompt-sync')
const prompt = PromptSync ()

const imc = (peso:number, altura:number) => {return peso / (Math.pow(altura,2))
}

const pesoText = prompt ('Digite seu peso: ')
const peso = Number(pesoText);

const alturaText = prompt (('Digite sua altura: '))
const altura = Number (alturaText);

const Resultado = imc (peso, altura)
console.log(`Seu IMC é ${Resultado}`)