const suma = (...numeros) => {
  if (numeros.length === 0) return 0;
  if (!numeros.every((n) => typeof n === "number")) return null;
  return numeros.reduce((acumulador, elemento) => acumulador + elemento, 0);
};

export default suma;