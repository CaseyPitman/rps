//This function returns the raitionale for the win

const winRationale = (choicesArr) => {
   let winRationaleText = '';

   console.log(choicesArr);

   if (choicesArr[0] === choicesArr[1]){
      //its a tie
      winRationaleText = '';
   } else if (choicesArr[0] !== choicesArr[1]) {
      if (!choicesArr.includes('scissors')){
         // Rock v paper
         winRationaleText = 'Paper covers rock.';
      } else if (!choicesArr.includes('paper')){
         // Rock v. Scissors
         winRationaleText = 'Rock smashes scissors.';
      } else if (!choicesArr.includes('rock')){
         // Paper v. Scissors
         winRationaleText = 'Scissors cut paper.';
      }
   }
   

   return winRationaleText;
}

export default winRationale;