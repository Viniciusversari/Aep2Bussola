class ArrayRandomValues {
  constructor(array) {
    this.array = array;
  }

  getRandomValues(count) {
    const randomValues = [];

    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * this.array.length);
      const randomValue = this.array[randomIndex];
      randomValues.push(randomValue);
    }

    return randomValues;
  }
}

const myArray = ['farofa', 'carvalho', 'aviao de brinquedo', 'saco de feijao', 'papelão'];
const arrRandom = new ArrayRandomValues(myArray);

const randomValues = arrRandom.getRandomValues(5);
console.log(randomValues);
