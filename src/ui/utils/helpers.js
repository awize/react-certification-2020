export const getColorContrast = (hex) => {
  const hexadecimal = hex.replace('#', '')
  const r = parseInt(hexadecimal.substring(0, 2), 16)
  const g = parseInt(hexadecimal.substring(2, 4), 16)
  const b = parseInt(hexadecimal.substring(4, 6), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 >= 150 ? '#000' : '#ffffff'
}
