function getHorarioCorrente() {
    const dataHoraCorrente = new Date();    

    const horas = dataHoraCorrente.getHours();
    const minutos = dataHoraCorrente.getMinutes();

    if (horas < 10) { horas = `0${horas}`; }
    if (minutos < 10) { minutos = `0${minutos}`; }

    return `${horas}:${minutos}`;
}

function getCumprimento() {
    const dataHoraCorrente = new Date();

    const horas = dataHoraCorrente.getHours();

    if (horas < 12) {
        return "Bom Dia";
    } else if (horas < 18) {
        return "Boa Tarde";
    } else {
        return "Boa Noite";
    }
}

export { getHorarioCorrente, getCumprimento };