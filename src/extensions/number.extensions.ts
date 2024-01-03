interface Number {
  toCurrency(prefix?: string): string;
}

Number.prototype.toCurrency = function (prefix = 'R$'): string {
  const formattedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(this);

  return `${formattedValue}`;
};
