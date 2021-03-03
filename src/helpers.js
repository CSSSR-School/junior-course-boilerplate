export const numberWithSpaces = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export const maxBy = (getter, list) => list.reduce(
  (acc, item) => getter(acc) < getter(item) ? item : acc
);

export const minBy = (getter, list) => list.reduce(
  (acc, item) => getter(acc) > getter(item) ? item : acc
);
