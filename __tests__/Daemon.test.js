import Daemon from '../src/Daemon';

test('daemon attack without stoned', () => {
  const daemon = new Daemon('Sauron');
  daemon.attack = 100;
  daemon.distance = 3;
  expect(daemon.attack).toBe(80);
});

test('daemon attack with stoned', () => {
  const daemon = new Daemon('Sauron');
  daemon.attack = 100;
  daemon.distance = 2;
  daemon.stoned = true;
  expect(daemon.attack).toBe(85);
});
