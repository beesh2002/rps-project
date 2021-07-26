var game = new Game();


// main entry point
function playGame() {
    //*********************************ADD CODE HERE *************************************/
    
    game.newGame();// Call the function game.newGame() to reset the counts.
    
    //*********************************ADD CODE HERE *************************************/
    // Get the number of rounds from the user, and store it in a variable called numberOfRounds.
   /* var temp =window.prompt('Enter number of rounds (1-5)'); 

     //Use game.IsNumerOfRoundsValid() to validate the user input.
     var numberOfRounds =0;
    if(game.IsNumerOfRoundsValid(temp))
       */
    var temp =window.prompt('Enter number of rounds (1-5)');
    while(!game.isNumberOfRoundsValid(temp)){
        temp =window.prompt('Enter number of rounds (1-5)');
    }
    var numberOfRounds=temp;
    
      // 
   // else playGame();
    
  /*      game.setNumberOfRounds(numberOfRounds);
    else playGame();*/
    // If the input is valid, use game.setNumberOfRounds(numberOfRounds) to set the number of rounds for the game 
    //  >> Else, try to get the number of rounds for the suer again


    //*********************************ADD CODE HERE *************************************/
    // Call playRound() with a parameter of the round count (1 thru numberOfRounds) for each round 
    while (numberOfRounds>0)
    {
        playRound(numberOfRounds)
        numberOfRounds--
    }


    //*********************************ADD CODE HERE *************************************/
    // Display the Final Score from the properties stored in the Game object
    console.log('YOU: ' + game.countOfPlayerWins+'\tComputer: ' + game.countOfComputerWins+'\tTies: ' + game.countOfTies);
}

/**
 * play a round of rock paper scissors
 * @param {*} roundNumber
 */
function playRound(roundNumber) {
    //*********************************ADD CODE HERE *************************************/
    // Display the Current Score to the User
    console.log('YOU: ' + game.countOfPlayerWins+'\tComputer: ' + game.countOfComputerWins+'\tTies: ' + game.countOfTies)
    //Prompt for Player Selection
    var playerSelection = getPlayerSelection();
    var round = new Round(playerSelection);

    //Play the Round
    var outcome = round.determineWinner();
    if(outcome== Outcomes.COMPUTER_WINS)
        game.incrementComputerWins();
else    if(outcome== Outcomes.PLAYER_WINS)
        game.incrementPlayerWins();
else    game.incrementCountOfTies()
       
    
    //*********************************ADD CODE HERE *************************************/
    // Display the Round Results from the properties stored in the Round object
    console.log('Outcome: ' + outcome + " Wins");
}



/**
 * prompt the user to get a selection
 * @returns Selections
 */ 
function getPlayerSelection() {
    
    //*********************************ADD CODE HERE *************************************/
    // Prompt, Validate and Return the player selection. This must be in the form of "rock", "paper", or "scissors" exactly
    var playerSelection = "";
    var selectionArray = Object.values(Selections);

    do {
        playerSelection = window.prompt('Enter rock, paper or scissors')
        if (playerSelection === null) {
            playerSelection = ""
        }
        playerSelection = playerSelection.toLowerCase()
    } while (!selectionArray.includes(playerSelection))

    return playerSelection
}

