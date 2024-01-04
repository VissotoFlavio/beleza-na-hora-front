interface Number {
  toCurrency(prefix?: string): string;
  toMonthYearString(): string;
  formatNumber(): string;
}

Number.prototype.toCurrency = function (prefix = 'R$'): string {
  const formattedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(this);

  return `${formattedValue}`;
};

// Adiciona o método toMonthYearString ao protótipo de Number
Number.prototype.toMonthYearString = function (): string {
  const value = this.valueOf();

  if (isNaN(value) || value.toString().length !== 6) {
    throw new Error('O valor numérico deve ter 6 dígitos no formato "YYYYMM"');
  }

  const year = Math.floor(value / 100);
  const month = value % 100;

  if (month < 1 || month > 12) {
    throw new Error('O mês deve estar no intervalo de 1 a 12');
  }

  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const monthName = monthNames[month - 1]; // Arrays começam do índice 0

  return `${monthName}/${year}`;
};

Number.prototype.formatNumber = function (): string {
  // Verifica se o número é válido
  if (isNaN(this.valueOf())) {
    return 'Número inválido';
  }

  // Separa o número em parte inteira e decimal
  const parts = this.toLocaleString('pt-BR').split(',');

  // Formata a parte inteira com separadores de milhar
  const formattedInteger = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  // Combina a parte inteira e a parte decimal formatadas
  const formattedNumber = parts.length > 1 ? `${formattedInteger},${parts[1]}` : formattedInteger;

  return formattedNumber;
};
