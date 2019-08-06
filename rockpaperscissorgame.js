// winning condition:
// rock beats scissors
// scissors beat paper
// paper beats rock
//
// counting tally of wins at the bottom
// computer vs human

var rock = {
  min: 0,
  max: 0.33,
  image: "rock.png",
  name: "rock"
};

var paper = {
  min: 0.33,
  max: 0.66,
  image: "paper.jpg",
  name: "paper"
};

var scissors = {
  min: 0.66,
  max: 1,
  image: "scissors.png",
  name: "scissors"
};

var scores = {
  human: 0,
  computer: 0
}

function processPunyHumansClick(event){
  var randomNumber = Math.random();
  var resultGame = rockPaperScissorGame(randomNumber)
  console.log(resultGame);
  document.getElementById('computerImage').style.backgroundImage = "url(" + resultGame.image + ")"

  var computerChoice = resultGame.name
  var humanChoice = event.id

  var winningMessage = didPunyHumanWinOrNot(computerChoice, humanChoice)
  console.log(winningMessage);

  document.getElementById("winningMessage").innerHTML = winningMessage

}

function rockPaperScissorGame(randomNumber){
  if(randomNumber >= rock.min && randomNumber <= rock.max){
    return rock
  } else if (randomNumber > paper.min && randomNumber <= paper.max){
    return paper
  } else {
    return scissors
  }
}

function didPunyHumanWinOrNot(computerChoice, humanChoice){
  if(computerChoice == "rock" && humanChoice == "paper"){
    return "You win!!!"
  }
  if(computerChoice == "scissors" && humanChoice == "rock"){
    return "You win!!!"
  }
  if(computerChoice == "paper" && humanChoice == "scissors"){
    return "You win!!!"
  }
  if(computerChoice == humanChoice){
    return "It's a tie."
  }
  return "You lose!"
}


//
//
// module.exports = { rockPaperScissorGame, didPunyHumanWinOrNot }
