class Card {
  cardTypes = [
    'Arcane Missiles'
  ];

  constructor(name) {
    if (!this.cardTypes.includes(name)) throw 'Card not found';
    this.name = name;
  }

  static getCard() {
    return new Card('Arcane Missiles');
  }

  render() {
    return `<div class='card'>${this.name}</div>`;
  }
}

class Deck {
  size = 30;

  constructor() {
    this.cards = Array(this.size).fill(null).map(() => Card.getCard());
  }
}

class Player {
  maximumMana = 10;
  maximumHandSize = 10;

  constructor() {
    this.life = 20;
    this.totalMana = 1;
    this.currentMana = 1;
    this.deck = new Deck();
  }
}

class Game {
  constructor() {
    this.players = [
      new Player(),
      new Player(),
    ];

    this.battlefield = document.getElementById('battlefield');
  }

  emptyBattlefield() {
    this.battlefield.innerHTML = '';
  }

  render() {
    this.emptyBattlefield();
    const playerOne = this.players[0];
    const playerTwo = this.players[0];

    this.battlefield.innerHTML = `
      <div id='top'>
        <div class='hand'>
          ${playerOne.deck.cards.slice(0, 3).map(card => card.render())}
        </div>
        <div class='character'>
          <img class='avatar' src='lulu.png' />
          <p class='life'>${playerOne.life}</p>
        </div>
        <div class='field'>field</div>
      </div>
      <div id='bottom'>
        <div class='field'>field</div>
        <div class='character'>
          <img class='avatar' src='sona.png' />
          <p class='life'>${playerTwo.life}</p>
        </div>
        <div class='hand'>
          ${playerOne.deck.cards.slice(0, 3).map(card => card.render())}
        </div>
      </div>
    `;
  }

  play() {
    console.log('playing')
    this.render();
  }
}

const button = document.getElementById('start-button');
button.addEventListener("click", function() {
  const game = new Game();
  game.play();
});
