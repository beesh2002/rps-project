class Game{
    constructor(){
        this.numberOfRounds = null;
        this.countOfPlayerWins = 0;
        this.countOfComputerWins = 0;
        this.countOfTies = 0;
    }
    incrementPlayerWins(){                   this.countOfPlayerWins++;            }

    incrementComputerWins(){                 this.countOfComputerWins++;          }

    incrementCountOfTies(){                  this.countOfTies++;                  }

    setNumberOfRounds(numberOfRounds){       this.numberOfRounds=numberOfRounds;   }

    newGame(){
        
        this.numberOfRounds = null;
        this.countOfPlayerWins = 0;
        this.countOfComputerWins = 0;
        this.countOfTies = 0;
    }

     /**
     * tests the numberOfRounds global variable and determines if it is a valid value
     * @returns boolean
     */
      IsNumerOfRoundsValid(num) {  return (num==1? true:(num==2? true:(num==3?true:(num==4?true:(num==5?true:false)))));   }
}



// DO NOT TOUCH THIS CODE -- No I will not TOUCH IT
let unit_test  = Game; //Just did