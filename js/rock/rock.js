let computer
let player
let pwin = 0
let cwin = 0 
let tie  = 0
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
                tie = tie + 1;
            }
            else if (player === 'scissors')
            {
               console.log('Loser! Computer chose rock vs your scissor');
               cwin = cwin + 1; 
            }
            else if (player === 'paper')
            {
                console.log('Winner! You chose paper vs the computers rock!');
                pwin = pwin + 1; 
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
                pwin = pwin + 1; 
            }
            else if(player === 'scissor')
            {
                console.log('Boring, tied! Two scissors.');
                tie = tie + 1; 
            }
            else if(player === 'paper')
            {
                console.log('You are SO bad at this.  Computer = scissor. You chose paper.');
                cwin = cwin + 1; 

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
                cwin = cwin + 1; 
            }
            
            else if(player === 'scissor')
            {
                console.log('Cheater! You chose scissor vs the computers paper!');
                pwin = pwin + 1; 
            }
            else if (player === 'paper')
            {
                console.log('Tie! try again, paper vs paper.');
                tie = tie + 1; 
            }
            else
            {
                console.log('something broke here')
            }
        break;

    }
    return pwin;
    return cwin;
    return tie;
             
}

function game ()
{
    for (let i = 0; i < 5; i++)
    {
        getComputerChoice();
        getPlayerChoice();
        compare();
        
    }
    if(pwin > cwin)
    {
        console.log("Player wins!  Player score: " + pwin + " Computer score: " + cwin + " tie: " + tie); 
    }
    else if (cwin > pwin)
    {
        console.log("Computer wins! Computer score: " + cwin + " playler score: " + pwin + "tie: " + tie);
    }
    else
    {
        console.log("Tie!  Ties: " + tie + " Player wins: " + pwin + " computer wins: " + cwin); 
    }
}


getComputerChoice();
getPlayerChoice();
game();
console.log("player: " + pwin + " Computer: " + cwin + " Tie: " + tie);




