export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw Error('Position outside range');
  const buff = new ArrayBuffer(length);
  const x = new Int8Array(buff);
  x.set([value], position);
  return new DataView(buff);
}
