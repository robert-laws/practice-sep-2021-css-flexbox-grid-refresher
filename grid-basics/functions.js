const isValidPassword = (password, username) => {
  return (
    password.length >= 8 &&
    !password.includes(' ') &&
    !password.includes(username)
  );
};

// console.log(isValidPassword('89Fjjlnms', 'dogLuvr'));
// console.log(isValidPassword('dogLuvr123!', 'dogLuvr'));

const average = (numbers) => {
  let length = numbers.length;
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total / length;
};

const avg = (numbers) => {
  return (
    numbers.reduce((acc, prev) => {
      return acc + prev;
    }, 0) / numbers.length
  );
};

// console.log(average([0, 50]));
// console.log(average([75, 76, 80, 95, 100]));

const isPangram = (sentence) => {
  let mySentence = sentence.toLowerCase().split(' ').join('');
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (let letter of alphabet) {
    if (!mySentence.includes(letter)) {
      return false;
    }
  }
  return true;
};

// console.log(isPangram('The five boxing wizards jump quickly'));
// console.log(isPangram('The five boxing wizards jump quick'));

const getCard = () => {
  const values = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A',
  ];
  const suits = ['clubs', 'spades', 'hearts', 'diamonds'];

  const randomValueIndex = Math.floor(Math.random() * values.length);
  const randomSuitIndex = Math.floor(Math.random() * suits.length);

  const value = values[randomValueIndex];
  const suit = suits[randomSuitIndex];

  return {
    value,
    suit,
  };
};

console.log(getCard());
