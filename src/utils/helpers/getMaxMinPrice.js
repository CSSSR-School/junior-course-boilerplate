export const getMaxMinPrice = arr => {
  const prices = arr.map(({ price }) => price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  return {
    min,
    max
  };
};
