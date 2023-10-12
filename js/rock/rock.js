let computer
let player
/*for computer - 0 = rock; 1=scissor; 2=paper*/

function getComputerChoice() 
{
    computer = Math.floor(Math.random()*3);
    console.log(computer);    
}

function getPlayerChoice()
{
    player = prompt("Choose rock, paper, or scissors");
    player.toLowerCase();
    console.log(player);
}

function compare()
{
    switch(computer)
    {
        case 0:
            if(player = 'rock')
            {
                console.log('rock vs rock');
            }
            else if (player = 'scissors')
            {
                console.log('rock vs scissors');

            }
            else if (player = 'paper')
            {
                console.log('rock vs. paper');
            }
            console.log(computer);
            console.log(player);
        break;
        case 1:
            console.log(computer);
            console.log(player);
        break;
        case 2:
            console.log(computer);
            console.log(player);
        break;

    }
         
}

getComputerChoice();
getPlayerChoice();
compare();


