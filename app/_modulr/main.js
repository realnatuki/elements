import './styles/main.css';
import './js/alan';
const elvenShield = {
  latherStrips: 2,
  ironIngot: 1,
  rfinedMonser: 3,
};

const newShild = {
  ...elvenShield,
  latherStrips: 10,
};
console.log(elvenShield);
console.log(newShild);

$('h1').css('background', 'red');
