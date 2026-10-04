import { getHorarioCorrente, getCumprimento } from './funcoes.js';

function atualizarInformacoes() {
    const horarioElemento = document.querySelector('#horario');
    horarioElemento.textContent = getHorarioCorrente();;    

    const horarioCumprimento = document.querySelector('#cumprimento');
    horarioCumprimento.textContent = getCumprimento();
}

document.addEventListener('DOMContentLoaded', atualizarInformacoes);