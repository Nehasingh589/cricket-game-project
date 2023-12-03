let computerChoice ;
function generatedComputerChoice () {
   let randomNumber = Math.random() * 3;
if (randomNumber > 0 && randomNumber <=1) {
    computerChoice = 'BAT';
    //console.log('computer choice is BAT');
} else if(randomNumber > 1 && randomNumber <= 2) {
     computerChoice = 'BALL';
    //console.log('computer choice is BALL');
} else {
     computerChoice = 'STUMP';
   // console.log('computer choice is STUMP');
}

}
