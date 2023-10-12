let computer
let player
/*for computer - 0 = rock; 1=scissor; 2=paper*/

function getComputerChoice() 
{
    computer = Math.floor(Math.random()*3);
      
}

function getPlayerChoice()
{
    player = prompt("Choose rock, paper, or scissors");
    player.toLowerCase();
}

function compare()
{
    switch(computer)
    {
        case 0:
            if(player === 'rock')
            {
                console.log('rock vs rock');
            }
            else if (player === 'scissors')
            {
               console.log('rock vs scissors');
            }
            else if (player === 'paper')
            {
                console.log('rock vs. paper');
            }
            
        break;
        case 1:
            if(player === 'rock')
            {
                console.log('scissor vs rock');
            }
            else if(player === 'scissor')
            {
                console.log('scissor vs scissor');
            }
            else if(player === 'paper')
            {
                console.log('scissor vs paper');
            }
        break;
        case 2:
            if (player === 'rock')
            {
                console.log('paper vs rock');
            }
            
            else if(player === 'scissor')
            {
                console.log('paper vs scissor');
            }
            else if (player === 'paper')
            {
                console.log('paper vs paper');
            }
        break;

    }
         
}

getComputerChoice();
getPlayerChoice();
console.log("computer: ", computer);
console.log("player: ", player);
compare();


