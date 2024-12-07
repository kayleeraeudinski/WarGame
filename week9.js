/* deck
*  -52 cards (should each card be its own class?)
    - rank
    - Suit
    - Values 
* a way to shuffle

* a way to pass cards to players (in my deck or game logic?)
* Players (class or game logic?)
*   -name?
    -score
    -hand

*Logic to actually play game (war game)
* - ways to compare the cards ... number values 
*
*
*
*/

//deck class
/** Should have:
 *      Array to store the cards
 *      Array to store all the card ranks
 *      Array to store all the card suits
 * 
 */

class Deck {
    constructor(){
        this.deck = [];
        this.ranks = [
            "Ace",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "Jack",
            "Queen",
            "King"
        ];
        this.suits = [
            "Hearts", "Diamonds", "Spades", "Clubs"
        ]
    }

    //A menthod to create a deck....iterate over our ranks/suits
    //push a new card/... (as an object) inot our constructors this.deck

    createDeck(){
        for (let i = 0; i < this.suits.length; i++){
            for (let j = 0; j < this.ranks.length; j++){
                let card = {
                
                    name: `${this.ranks[j]} of ${this.suits[i]}`,
                    value: j + 1
                }
                this.deck.push(card)

                console.log(card)
            }
        }
    }

    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random()* (i + 1));

            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }

}

/** Needs:
 * -deck...instantiate a new deck inside game class
 * 
 * -create deck, shuffle, pass deck
 * 
 * 
 * -logic to play game
 * -turn based, how many turns?
 * -do your players have a hand yet?
 * -control flow sstatement logic to decide who wins?
 * 
 * 
 * -2 players
 *  -hand
 *  -score
 *  -Name
 * 
 */

class Game {
    constructor(){
        this.player1 = {
            name: 'Player 1',
            score: 0,
            hand: []
        }
        this.player2 = {
            name: "Player 2",
            score: 0,
            hand: []
        }
    }

    //Method to play game
    /**
     * Pass out cards to players
     * Take x amount of turns as long has players have cards
     * Award points based on card.value
     * Log the winner
     */

    playGame (){
    const deck = new Deck
    deck.createDeck()
    deck.shuffleDeck()

    while(deck.deck.length !== 0){

        this.player1.hand.push(deck.deck.shift())
        this.player2.hand.push(deck.deck.shift())

    }
    
    //Actually playing the game...how many turns do i need?
    for(let i = 0; i < this.player1.hand.length; i++){
        //conditional logic to award points based on comparing card values
        if (this.player1.hand[i].value > this.player2.hand[i].value){
            this.player1.score ++
            console.log(`
               P1 Card: ${this.player1.hand[i].name}
               P2 Card ${this.player2.hand[i].name}
               Player 1 wins a point!
               Current Score: p1: ${this.player1.score}, p2: ${this.player2.score}
                `)
        } else if (this.player2.hand[i].value > this.player1.hand[i].value) {
            this.player2.score ++
            console.log(`
                P1 Card: ${this.player1.hand[i].name}
               P2 Card ${this.player2.hand[i].name}
               Player 2 wins a point!
               Current Score: p1: ${this.player1.score}, p2: ${this.player2.score}
                `
            )
        } else{
            console.log(`
                P1 Card: ${this.player1.hand[i].name}
               P2 Card ${this.player2.hand[i].name}
               It's a tie! No points awarded
               Current Score: p1: ${this.player1.score}, p2: ${this.player2.score}
                `)

        }
    }

    if(this.player1.score > this.player2.score){
        console.log("Player 1 wins")
    } else if (this.player1.score < this.player2.score){
        console.log("Player 2 wins")
    } else {
        console.log("It's a tie!")

    }
}
}


const game = new Game
game.playGame()
