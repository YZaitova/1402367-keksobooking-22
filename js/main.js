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

let author = {
  avatar: 'img/avatars/user' + '0' + randomIntInclusive(1, 8) + '.png',
};

//console.log(author);
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
];
const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];
const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const DESCRIPTION = ['Теплое',
  'Уютное',
  'С видом на море',
  'С видом во двор',
  'Есть балкон',
  'Можно с животными',
  'Курить нельзя',
  'Можно устраивать вечеринки',
  'Светлый ремонт',
  'Площадь 30 кв.м',
  'Есть телевизор',
];
const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
]
let createFeaturesArr = () => {
  let randomFeaturesIndex = randomIntInclusive(1, FEATURES.length - 1);
  let copyFEATURES = FEATURES.slice();
  let randomArr =  copyFEATURES.slice(randomFeaturesIndex);
  return randomArr;
};
//console.log(createFeaturesArr());

let createLocation = () => {
  return {
    x: geographicalСoordinates(35.65000, 35.70000, 5),
    y: geographicalСoordinates(139.70000, 139.80000, 5),
  }
}
let location1 = createLocation();
//console.log(location1);

const createOffer = ()=> {
  let photosIndex = randomIntInclusive(1, PHOTOS.length -1);
  let descriptonIndex = randomIntInclusive(1, DESCRIPTION.length -1);
  let typeIndex = randomIntInclusive(1, TYPE.length -1);
  let checkinIndex = randomIntInclusive(1, CHECKIN.length -1);
  let checkoutIndex = randomIntInclusive(1, CHECKOUT.length -1);
  let priceMin = 5000;
  let priceMax = 120000;
  return {
    title: 'Объявление о сдаче жилья',
    address: location1,
    price: randomIntInclusive(priceMin, priceMax, 0),
    type: TYPE[typeIndex],
    rooms: randomIntInclusive(1, 5, 0),
    guests: randomIntInclusive(1, 5, 0),
    checkin: CHECKIN[checkinIndex],
    checkout: CHECKOUT[checkoutIndex],
    features: createFeaturesArr(),
    photos: PHOTOS[photosIndex],
    description: DESCRIPTION[descriptonIndex],
  }
}
let offer = createOffer();

let createAdvert = () => {
  return {
    author,
    location1,
    offer,
  }
}
//console.log(createAdvert());
let countAdverts = 10;
let advertsArr = new Array(countAdverts);
console.log(advertsArr);

for (let i = 0; i <= advertsArr.length - 1; i++) {
  advertsArr[i] = createAdvert();
  return advertsArr;
}
console.log(advertsArr); // не получилось сделать 10 разных объявлений(((
