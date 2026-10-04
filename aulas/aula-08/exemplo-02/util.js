const getNumeroAleatorio = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const getNumerosAleatorios = (min, max, qtd) => {
  const numerosAleatorios = [];

  for (let i = 0; i < qtd; i++) {
      numerosAleatorios.push(getNumeroAleatorio(min, max));
  }

  return numerosAleatorios;
};

export { getNumeroAleatorio, getNumerosAleatorios };