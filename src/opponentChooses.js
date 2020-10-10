//This function makes a random choice for the opponent

const opponentChooses = () =>{

   const options = ['rock', 'paper', 'scissors'];

   let randomNumber = Math.floor(Math.random() * 3);

   return options[randomNumber];

}

export default opponentChooses;