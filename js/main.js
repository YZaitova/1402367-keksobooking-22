let randomIntInclusive = function get(min, max) {
  if (min || max <= 0) {
    alert('Введен некорректный диапазон. Введите значения больше либо равное 0');
  }
  if (max <= min) {
    let container = max;
    max = min;
    min = container;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
randomIntInclusive(1, 45);

let geographicalСoordinates = function(min, max, NumberOfSimbolsAfterComma) {
  if (min || max <= 0) {
    alert('Введен некорректный диапазон. Введите значения больше либо равное 0');
  }
  if (max <= min) {
    let container = max;
    max = min;
    min = container;
  }
  let randomNumber = Math.random() * (max - min + 1) + min;
  randomNumber = +randomNumber.toFixed(NumberOfSimbolsAfterComma);
  return randomNumber;
};
geographicalСoordinates(5.5, 8.25, 3);

