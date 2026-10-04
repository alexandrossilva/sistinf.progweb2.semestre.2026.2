function getDataHoraCorrente() {
    const dataHoraCorrente = new Date();    

    const dia = dataHoraCorrente.getDay();
    const mes = dataHoraCorrente.getMonth() + 1;
    const ano = dataHoraCorrente.getFullYear();
    const horas = dataHoraCorrente.getHours();
    const minutos = dataHoraCorrente.getMinutes();
    const segundos = dataHoraCorrente.getSeconds();

    const dataFormatada = `${dia}/${mes}/${ano}`;
    const horaFormatada = `${horas}:${minutos}:${segundos}`;

    return `${dataFormatada} ${horaFormatada}`;
}

function atualizarDataHora() {
    const dataHoraElemento = document.querySelector('#data-horario');
    dataHoraElemento.textContent = getDataHoraCorrente();    
}

const botao = document.querySelector('button');
botao.addEventListener('click', atualizarDataHora);

document.addEventListener('DOMContentLoaded', atualizarDataHora);

setInterval(atualizarDataHora, 1000);