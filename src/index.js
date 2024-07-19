import Magician from './Magician';
import Daemon from './Daemon';

const magician = new Magician('Gandalf');
magician.attack = 100;
magician.distance = 2;
magician.stoned = true;
console.log(magician.attack);

const daemon = new Daemon('Sauron');
daemon.attack = 100;
daemon.distance = 3;
daemon.stoned = false;
console.log(daemon.attack); 
