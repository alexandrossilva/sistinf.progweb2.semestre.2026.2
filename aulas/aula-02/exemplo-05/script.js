function maiorNumero() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.querySelector("#n2").value;

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
}

const botao = document.querySelector("input[type=button]");
botao.addEventListener("click", maiorNumero)