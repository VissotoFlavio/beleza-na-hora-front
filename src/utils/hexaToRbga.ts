export const hexToRgbA = (hex: string, opacity = 1): string => {
  let hexaSplit: string[];
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    hexaSplit = hex.substring(1).split('');
    if (hexaSplit.length === 3) {
      hexaSplit = [
        hexaSplit[0],
        hexaSplit[0],
        hexaSplit[1],
        hexaSplit[1],
        hexaSplit[2],
        hexaSplit[2],
      ];
    }

    const x = Number(`0x${hexaSplit.join('')}`);
    const result = `rgba(${[(x >> 16) & 255, (x >> 8) & 255, x & 255].join(',')},${opacity})`;
    return result;
  }
  throw new Error('Bad Hex');
};
