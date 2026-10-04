import { getDataHoraCorrente } from './funcoes.js';

function atualizarDataHora() {
    const dataHoraElemento = document.querySelector('#data-horario');
    dataHoraElemento.textContent = getDataHoraCorrente();    
}

const botao = document.querySelector('button');
botao.addEventListener('click', atualizarDataHora);

document.addEventListener('DOMContentLoaded', atualizarDataHora);

setInterval(atualizarDataHora, 1000);