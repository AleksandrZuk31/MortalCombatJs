  const player1 = {
  name: 'Scorpion',
  hp: 100,
  img:'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['katana'],
  attack: function() {
    console.log(player1.name + 'Fight...');
  },
};

player1.attack();

const player2 = {
  name: 'Kitana',
  hp: 100,
  img:'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['kunai'],
  attack: function() {
    console.log(player2.name + 'Fight...');
  },
};

player2.attack();

function createPlayer(player, person) {
  const player1 = document.createElement('div');
player1.classList.add(player);

const progressbar = document.createElement('div');
progressbar.classList.add('progressbar');
player1.appendChild(progressbar);

const life = document.createElement('div');
life.classList.add('life');
life.style.width = '90%';
progressbar.appendChild(life);

const name = document.createElement('div');
name.classList.add('name');
name.innerText = person.name;
progressbar.appendChild(name);

const character = document.createElement('div');
character.classList.add('character');
player1.appendChild(character);

const img = document.createElement('img');
img.src = person.img;
character.appendChild(img);

const arenas = document.querySelector('.arenas');
arenas.appendChild(player1);
}

createPlayer('player1', player1);
createPlayer('player2', player2);
