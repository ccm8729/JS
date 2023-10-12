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
    player = player.toLowerCase();
}

function compare()
{
    switch(computer)
    {
        case 0:
            if(player === 'rock')
            {
                console.log('Tie! Rock vs. Rock');
            }
            else if (player === 'scissors')
            {
               console.log('Loser! Computer chose rock vs your scissor');
            }
            else if (player === 'paper')
            {
                console.log('Winner! You chose paper vs the computers rock!');
            }
            else
            {
                console.log('something broke here')
            }
            
        break;
        case 1:
            if(player === 'rock')
            {
                console.log('Howd you win? You chose rock vs the computers scissor!');
            }
            else if(player === 'scissor')
            {
                console.log('Boring, tied! Two scissors.');
            }
            else if(player === 'paper')
            {
                console.log('You are SO bad at this.  Computer = scissor. You chose paper.');
            }
            else
            {
                console.log('something broke here')
            }
        break;
        case 2:
            if (player === 'rock')
            {
                console.log('You are so bad! computer chose paper vs your rock');
            }
            
            else if(player === 'scissor')
            {
                console.log('Cheater! You chose scissor vs the computers paper!');
            }
            else if (player === 'paper')
            {
                console.log('Tie! try again, paper vs paper.');
            }
            else
            {
                console.log('something broke here')
            }
        break;

    }
         
}

function game ()
{
    
}


getComputerChoice();
getPlayerChoice();
console.log("computer: ", computer);
console.log("player: ", player);
compare();


