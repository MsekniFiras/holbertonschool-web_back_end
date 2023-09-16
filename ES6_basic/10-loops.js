export default function appendToEachArrayValue(array, appendString) {
  const NewArra = [];
  for (const idx of array) {
    NewArra.push(appendString + idx);
  }

  return NewArra;
}
