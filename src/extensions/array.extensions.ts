interface Array<T> {
  // Método de extensão para ordenar objetos com base em uma propriedade específica
  sortByField<K extends keyof T>(field: K, order?: 'asc' | 'desc'): Array<T>;
}

// eslint-disable-next-line no-extend-native
Array.prototype.sortByField = function <T, K extends keyof T>(
  field: K,
  order: 'asc' | 'desc' = 'asc',
): Array<T> {
  const sortOrder = order === 'asc' ? 1 : -1;

  return this.sort((a, b) => {
    const aValue = a[field];
    const bValue = b[field];

    if (aValue === bValue) {
      return 0;
    }

    return (aValue < bValue ? -1 : 1) * sortOrder;
  });
};
