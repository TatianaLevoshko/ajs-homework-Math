import Magician from '../src/Magician';

describe('Magician', () => {
  test('attack calculation', () => {
    const magician = new Magician(100);
    magician.distance = 2;
    magician.stoned = true;
    expect(magician.attack).toBe(85);
  });
});
