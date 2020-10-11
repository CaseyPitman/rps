// This function determines the winner of the game.

const findWinner = (user, opp) =>{

   let winner = 'result';

   if (user === opp){
      //it's a tie
      winner = 'tie';
   } else if (user === 'rock'){
      //User chooses rock, wins v. scissors, loses v. paper
      winner = (opp === 'scissors') ? 'user' : 'opponent';
   } else if (user === 'paper'){
      // User chooses paper, wins v. rock, loses v. paper
      winner = (opp === 'rock') ? 'user' : 'opponent';
   } else if (user === 'scissors'){
      //User chooses scissors, wins v. paper, loses v. rock
      winner = (opp === 'paper') ? 'user' : 'opponent';
   }

   return winner;

}

export default findWinner;