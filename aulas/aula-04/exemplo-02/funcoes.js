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

export { getDataHoraCorrente };