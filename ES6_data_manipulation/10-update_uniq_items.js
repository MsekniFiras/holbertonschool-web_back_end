export default function updateUniqueItems(map) {
  try {
    map.forEach((key, value) => {
      if (key === 1) map.set(value, 100);
    });
  } catch (error) {
    throw Error('Cannot process');
  }
}
