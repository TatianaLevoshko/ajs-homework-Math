import Daemon from '../src/Daemon';

describe('Daemon', () => {
  test('attack calculation', () => {
    const daemon = new Daemon(100);
    daemon.distance = 2;
    daemon.stoned = true;
    expect(daemon.attack).toBe(85);
  });
});
