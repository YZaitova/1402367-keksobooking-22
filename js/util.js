const checksRange = function (min, max) {
  if ((min <= 0) || (max <= 0)) {
    return alert('Введен некорректный диапазон. Введите значения больше либо равное 0');
  }
};

const checksMinLargerThanMax = function (min, max) {
  if (max <= min) {
    let container = max;
    max = min;
    min = container;
  }
};

let randomIntInclusive = function get(min, max) {
  checksRange(min, max);
  checksMinLargerThanMax (min, max);
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
randomIntInclusive(5, 7);

let geographicalСoordinates = function(min, max, NumberOfSimbolsAfterComma = '0') {
  checksRange(min, max);
  checksMinLargerThanMax (min, max);
  let randomNumber = Math.random() * (max - min + 1) + min;
  randomNumber = +randomNumber.toFixed(NumberOfSimbolsAfterComma);
  return randomNumber;
};
geographicalСoordinates(5.5, 8.25, 3);
export {randomIntInclusive, geographicalСoordinates};
