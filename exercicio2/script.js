/*let idade;
let isMaiorIdade;
let isCursandoOutraFaculdade;

if(){

}else{
	
}
*/
const idade = Number (prompt("Qual a sua idade?"));
let colegial = confirm("Você terminou o ensino médio?");
let faculdade = confirm("Você cursa faculdade?");

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
    console.log("Você não é maior de idade.")
}
if (colegial == true) {
  console.log("Você já terminou o ensino médio!");
} else {
    console.log("Você não terminou o ensino médio.")
}
if (faculdade == true) {
  console.log("Você faz faculdade!");
} else {
  console.log("Você não é maior de idade");
}
