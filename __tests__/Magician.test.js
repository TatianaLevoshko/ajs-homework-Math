import Magician from '../src/Magician';

test('magician attack without stoned', () => {
  const magician = new Magician('Gandalf');
  magician.attack = 100;
  magician.distance = 2;
  expect(magician.attack).toBe(90);
});

test('magician attack with stoned', () => {
  const magician = new Magician('Gandalf');
  magician.attack = 100;
  magician.distance = 2;
  magician.stoned = true;
  expect(magician.attack).toBe(85);
});
