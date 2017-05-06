function getUserChoice() {
  var userInput = prompt('Rock, Paper, Scissors');
  userInput = userInput.toLowerCase();
  
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
     return userInput;
  } else if(userInput === 'bomb') {
    	return userInput;
  	}
  else {
     console.log('Error!');
  }
}

function getComputerChoice() {
  var randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissor';
  }
}

function determineWinner(userChoice, computerChoice) {
  if(userChoice === computerChoice) {
  	 return 'Tie Game!';
  }
  
  if(userChoice === 'bomb') {
    return 'Bomb destroys everything and you win!';
  }
  
  if(userChoice === 'rock') {
     if(computerChoice === 'paper') {
     	   return 'You were beat by the computer!';
     } else {
       return 'You beat the computer!';
     }
  }
  
  if(userChoice === 'paper') {
    if(computerChoice === 'scissors') {
       return 'The computer won!';
    } else {
       return 'You won!';
    	}
  }
  
  if(userChoice === 'scissors') {
     if(computerChoice === 'rock') {
        return 'The computer smashed your scissors with a rock and won!';
     } else {
        return 'You have beat the computer!';
       }
  }
}

function playGame() {
  var userChoice = getUserChoice();
  var computerChoice = getComputerChoice();
  
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' +  computerChoice);
  
  console.log(determineWinner(userChoice,  computerChoice));
}

playGame();