export function createCircularBuffer(maxSize: number) {
  let buffer: number[] = [];
  let start = 0;
  let end = 0;

  return {
    push(item: number) {
      buffer[end] = item;
      end = (end + 1) % maxSize;
      if (end === start) {
        start = (start + 1) % maxSize;
      }
    },
    toArray() {
      if (start < end) {
        return buffer.slice(start, end);
      } else {
        return [...buffer.slice(start), ...buffer.slice(0, end)];
      }
    },
  };
}
