let computer
let player
let pwin = 0
let cwin = 0 
let tie  = 0

const container = document.querySelector('#container');
/*for computer - 0 = rock; 1=scissor; 2=paper*/

function getComputerChoice() 
{
    computer = Math.floor(Math.random()*3);
      
}

/*removing console log for player to manually type their choice.

function getPlayerChoice()
{
    player = prompt("Choose rock, paper, or scissors");
    player = player.toLowerCase();
}*/

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
   
        getComputerChoice();
       // getPlayerChoice();
        compare();
        
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
        console.log("Tie! Player wins: " + pwin + " computer wins: " + cwin + ' Ties: ' + tie); 
    }

    if(pwin === 5 || cwin === 5)
    {
    winner();
    }


    
}

function winner()
{
    let win = 'computer';

        if (pwin > cwin)
        {
            win = 'player';
        }
        console.log(win + ' has won the game! Score is: Player: ' + pwin + ' Computer: ' + cwin);
        console.log('resetting for new game');
        pwin = 0;
        cwin = 0;
        tie = 0;

    

}


const rock = document.createElement('button');
rock.classList.add('rock');
rock.textContent = 'Rock'; 
rock.setAttribute('style', 'border: 1px solid', 'border-radius: 8px', 'background-color: #fff', 'margin: 15px', 'padding: 15px', "id = rock");
//rock.setAttribute("onClick", "alert('rock'");
container.appendChild(rock);


const paper = document.createElement('button');
paper.classList.add('paper');
paper.textContent = 'Paper'; 
paper.setAttribute('style', 'border: 1px solid', 'border-radius: 8px', 'background-color: #fff', 'margin: 15px', 'padding: 15px', "id = paper");
container.appendChild(paper);

const sci = document.createElement('button');
sci.classList.add('sci');
sci.textContent = 'Scissor'; 
sci.setAttribute('style', 'border: 1px solid', 'border-radius: 8px', 'background-color: #fff', 'margin: 15px', 'padding: 15px', "id = sci");
container.appendChild(sci);

const buttons = document.querySelectorAll('button');

const results = document.createElement('div');
results.classList.add('results');
results.textContent = 'your results so far are:';
results.setAttribute('style', 'border: 3px solid');
container.appendChild(results);

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log("acive");
        player = button.textContent.toLowerCase(); // Assuming button text is 'Rock', 'Paper', or 'Scissor'
        console.log(player);
       //getComputerChoice();
       //compare(player);
        game();
    });
});



/*getComputerChoice();
getPlayerChoice();
game();
console.log("player: " + pwin + " Computer: " + cwin + " Tie: " + tie);





<!-- HTML !-->
<button class="button-13" role="button">Button 13</button>


.button-13 {
  background-color: #fff;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
  box-sizing: border-box;
  color: #0f1111;
  cursor: pointer;
  display: inline-block;
  font-family: "Amazon Ember",sans-serif;
  font-size: 13px;
  line-height: 29px;
  padding: 0 10px 0 11px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  width: 100px;
}

.button-13:hover {
  background-color: #f7fafa;
}

.button-13:focus {
  border-color: #008296;
  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
  outline: 0;
}*/
