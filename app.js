alert("Boas vindas ao nosso site!");

let nome = "lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

alert("Erro! Preencha todos os campos");

let mensagemDeErro = "Erro! Preencha todos os campos";

alert = (mensagemDeErro);

let nomeDoUsuario = prompt("Digite seu nome: ");

let idadeDoUsuario = prompt("Digite sua idade: ");

if (idadeDoUsuario >= 18) {
    alert("Pode tirar habilitação");
} else {
    alert("Desculpe, voce precisa ter mais de 18 anos");
}
