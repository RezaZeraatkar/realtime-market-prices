export function formatVolume(volume: string) {
  const num = parseFloat(volume);
  if (num >= 1.0e12) {
    return Math.round(num / 1.0e12) + ' T';
  } else if (num >= 1.0e9) {
    return Math.round(num / 1.0e9) + ' B';
  } else if (num >= 1.0e6) {
    return Math.round(num / 1.0e6) + ' M';
  } else if (num >= 1.0e3) {
    return Math.round(num / 1.0e3) + ' K';
  } else {
    return Math.round(num);
  }
}
