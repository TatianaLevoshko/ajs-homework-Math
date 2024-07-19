import Character from '../src/Character';

describe('Character class', () => {
  test('should set and get attack correctly', () => {
    const character = new Character('Test', 'Magician');
    character.attack = 100;
    character.distance = 1; // Устанавливаем расстояние 1 для корректной проверки
    expect(character.attack).toBe(100);
  });

  test('should calculate attack with distance correctly', () => {
    const character = new Character('Test', 'Magician');
    character.attack = 100;
    character.distance = 2;
    expect(character.attack).toBe(90);
  });

  test('should calculate attack with stoned correctly', () => {
    const character = new Character('Test', 'Magician');
    character.attack = 100;
    character.distance = 2;
    character.stoned = true;
    expect(character.attack).toBe(85);
  });

  test('should not allow attack to be negative', () => {
    const character = new Character('Test', 'Magician');
    character.attack = 1;
    character.distance = 5;
    character.stoned = true;
    expect(character.attack).toBe(0);
  });

  test('should set and get stoned correctly', () => {
    const character = new Character('Test', 'Magician');
    character.stoned = true;
    expect(character.stoned).toBe(true);
  });

  test('should set and get distance correctly', () => {
    const character = new Character('Test', 'Magician');
    character.distance = 3;
    expect(character.distance).toBe(3);
  });
});
