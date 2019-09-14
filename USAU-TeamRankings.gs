// Formulas can be found at: 
// https://play.usaultimate.org/teams/events/rankings/


/** 
* Calculates unweighted game rating
* @param {Number} oppRating Opponent's Power Rating
* @param {Boolean} win Did you win
* @param {Number} losingScore The Losing Score
* @param {Number} winningScore The Winning Score
*/
function gameRating(oppRating, yourScore, oppScore){
  var gameRating
  if(yourScore>=oppScore){
    var win = true
    var losingScore = oppScore
    var winningScore = yourScore
  }
  var r = losingScore/(winningScore-1)
  var ratingDiff = 125+475*(Math.sin(Math.min(1,(1-r)/0.5)*0.4*Math.PI)/Math.sin(0.4*Math.PI))
  if(win){
    gameRating = oppRating + ratingDiff
  }else{
    gameRating = oppRating - ratingDiff
  }
  return gameRating
}

/**
* @param {Number} loseScore The losing Score
* @param {Number} winScore The winning Score
*/
function scoreWeight(yourScore, oppScore){
  if (yourScore>oppScore){
    var winScore = yourScore
    var loseScore = oppScore
  }else{
    var winScore = oppScore
    var loseScore = yourScore
  }
  
  var scoreWeight
  if(winScore > 12 || (winScore+loseScore) > 18){
    scoreWeight = 1
  }else{
    scoreWeight = Math.sqrt((winScore+Math.max(loseScore, ((winScore-1)/2)))/19)
  }
  return scoreWeight
}

/**
* Returns weighted game rating using score weight
* @param oppRating Opponent Rating
* @param yourScore Your score
* @param oppScore Opponent Score
*/
function weightedGameRating(oppRating, yourScore, oppScore){
  var weightedGameRating = gameRating(oppRating, yourScore, oppScore)*scoreWeight(yourScore, oppScore)
  return weightedGameRating
}

function teamRating(){
  var total = 0;
  for (var i = 0; i < arguments.length; ++i){
    total += arguments[i]
  }
  var avg = total / arguments.length;
  return avg
}

