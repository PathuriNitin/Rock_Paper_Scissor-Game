let scores = JSON.parse(localStorage.getItem('result')) || {
    win : 0,
    lose: 0,
    tie :0
};

displayScore();

function displayScore()
{
    document.querySelector('.game-score').innerHTML=`Wins: ${scores.win}, Losses: ${scores.lose}, Ties: ${scores.tie}`;
}
function playGame(playerMove)
{
    const computerMove = pickComputerMove();
    let result = '';
    if(playerMove === 'rock')
    {
        if(computerMove === 'rock')
        {
            result= 'Match Tie' ;
        }
        else if(computerMove === 'paper')
        {
            result = 'You Lose';
        }
        else if(computerMove === 'scissors')
        {
            result = 'You Win';
        }
    }
    if(playerMove === 'paper')
    {
        if(computerMove === 'paper')
        {
            result='Match Tie';
        }
        else if(computerMove === 'scissors')
        {
            result = 'You Lose';
        }
        else if(computerMove === 'rock')
        {
            result = 'You Win';
        }
    }
    if(playerMove === 'scissors')
    {
        if(computerMove === 'scissors')
        {
            result='Match Tie';
        }
        else if(computerMove === 'rock')
        {
            result = 'You Lose';
        }
        else if(computerMove === 'paper')
        {
            result = 'You Win';
        }
    }

    if(result === 'You Win')
    {
        scores.win +=1;
    }
    else if(result === 'You Lose')
    {
        scores.lose +=1;
    }
    else{
        scores.tie +=1;
    }
    
    displayScore();

    localStorage.setItem('result',JSON.stringify(scores));

    document.querySelector('.game-move').innerHTML = `You <img src="${playerMove}-emoji.png" alt="images-loading"/> 
    Computer <img src="${computerMove}-emoji.png" alt="images-loading"/>`;
    document.querySelector('.game-winner').innerHTML= `${result}`;
}



function pickComputerMove()
{
    let computerMove = '';
    const randomMove = Math.random();
    if(randomMove>0 && randomMove<1/3)
    {
        computerMove='rock';
    }
    else if(randomMove>=0.3 && randomMove<2/3)
    {
        computerMove='paper';
    }
    else
    {
        computerMove='scissors';
    }
    
    return computerMove;
}