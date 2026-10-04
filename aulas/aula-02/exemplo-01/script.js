let n1 = prompt("Digite o primeiro número:");
let n2 = prompt("Digite o segundo número:");

n1 = parseFloat(n1);
n2 = parseFloat(n2);

if (n1 == n2) {
    alert("Os dois números são iguais.");
}
else {
    let maior;
    if (n1 > n2) { 
        maior = n1;
    } 
    else {
        maior = n2;
    }
    
    alert(`O maior número é: ${maior}`);
}