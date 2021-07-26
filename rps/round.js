// Enum of Selections
const Selections = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors",
};
Object.freeze(Selections);

// Enum of Outcomes
const Outcomes = {
    PLAYER_WINS: "player",
    COMPUTER_WINS: "computer",
    TIE: "tie",
};
Object.freeze(Outcomes);


class Round{

    constructor(playerSelection){
        this.playerSelection = playerSelection;
        this.computerSelection = this.getComputerSelection();
    }

    /**
     * get a random computer selection
     * @returns Selections
     */
    getComputerSelection() {
        //*********************************ADD CODE HERE *************************************/
        // Use Math.floor and select a random Selections enumerator from above 
        let arr = Object.values(Selections);
        return arr[Math.floor(Math.random()*3)];
    }

    /**
     * determine the winner of the round
     * @param {*} playerSelection
     * @param {*} computerSelection
     * @returns Outcomes
     */
    determineWinner() {
        //*********************************ADD CODE HERE *************************************/
        // Use this.playerSelection and this.computerSelection to return the appropriate outcome from the Outcomes enumerator above.
        /*
        R   R   -Del
        R   P   CWIN
        R   S   PWIN
        P   R   PWIN
        P   P   - del
        P   S   CWIN
        S   R   CWIN
        S   P   PWIN
        S   S   -del

        */
        let outcome = "";
        if (this.playerSelection == Selections.ROCK && this.computerSelection == Selections.SCISSORS) {
            outcome = Outcomes.PLAYER_WINS
            
        }
        else if (this.playerSelection == Selections.ROCK && this.computerSelection == Selections.PAPER) {
            outcome = Outcomes.COMPUTER_WINS;
           
        }
        else if (this.playerSelection == Selections.PAPER && this.computerSelection == Selections.ROCK) {
            outcome = Outcomes.PLAYER_WINS
        
        }
        else if (this.playerSelection == Selections.PAPER && this.computerSelection == Selections.SCISSORS){
            outcome = Outcomes.COMPUTER_WINS
          
        }   
        else if (this.playerSelection == Selections.SCISSORS && this.computerSelection == Selections.PAPER){
            outcome = Outcomes.PLAYER_WINS
            
        }
        else if (this.playerSelection = Selections.SCISSORS && this.computerSelection == Selections.ROCK) {
            outcome = Outcomes.COMPUTER_WINS
            
        }
        else if (this.playerSelection == this.computerSelection){
            outcome = Outcomes.TIE
            
        }

        return outcome
    }



}


//DO NOT TOUCH THIS LINE OF CODE//
let unit_test1 = Round; //I'm NOT