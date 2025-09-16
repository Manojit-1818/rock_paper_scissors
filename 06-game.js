let score = JSON.parse(localStorage.getItem('score')) || {
   wins: 0,
   losses: 0,
   ties: 0
};

updateScoreElement();

function playGame(playerMove){
   let computer_move=pickComputerMove();
   let result='';
   if(playerMove === 'rock'){
      if(computer_move === 'rock'){
         result = 'Tie.';
      }
      else if(computer_move === 'paper'){
         result = 'You Lose.';
      }
      else if(computer_move === 'scissors'){
         result = 'You Win.';
      }
   }
   else if(playerMove === 'paper'){
      if(computer_move === 'rock'){
         result = 'You Win.';
      }
      else if(computer_move === 'paper'){
         result = 'Tie.';
      }
      else if(computer_move === 'scissors'){
         result = 'You Lose.';
      }
   }
   else if(playerMove === 'scissors'){
      if(computer_move === 'rock'){
         result = 'You Lose.';
      }
      else if(computer_move === 'paper'){
         result = 'You Win.';
      }
      else if(computer_move === 'scissors'){
         result = 'Tie.';
      }
   }

   if(result === 'You Win.'){
      score.wins += 1;
   }
   else if(result === 'You Lose.'){
      score.losses += 1;
   }
   else if(result === 'Tie.'){
      score.ties += 1;
   }

   localStorage.setItem('score',JSON.stringify(score));

   updateScoreElement();
   document.querySelector('.js_result').innerHTML = result;
   document.querySelector('.js_moves').innerHTML = `You
      <img src="06-photo_rock_paper_scissor_game/${playerMove}-emoji.png" class="move_icon">
      <img src="06-photo_rock_paper_scissor_game/${computer_move}-emoji.png" class="move_icon">
      Computer`;
}

function updateScoreElement(){
   document.querySelector('.js_score').innerHTML = `Wins: ${score.wins},Losses: ${score.losses}, Tie: ${score.ties}`;
}

function pickComputerMove(){
   let random_num = Math.random();
   let computer_move='';
   if(random_num >= 0 && random_num < 1/3){
      computer_move = `rock`;
   }
   else if (random_num >= 1/3 && random_num < 2/3){
      computer_move = `paper`;
   }
   else{
      computer_move = `scissors`;
   }
   return computer_move;
}