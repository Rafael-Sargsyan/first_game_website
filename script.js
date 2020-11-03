//Game 

var scores, roundScores, activePlayer;
init();


document.querySelector('.btn--roll').addEventListener('click', function(){
    
    //1. Random number
    var dice = Math.floor(Math.random()*6) + 1;

    //2. Display result
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display  = 'block';
    diceDOM.src = 'dice-' + dice +'.png';

    
    //3. Update the round score IF the rolled number was not a 1
    if(dice > 1){
        //Add score
        roundScore += dice;
        document.querySelector('#current--' + activePlayer).textContent = roundScore;
    }
    else{
        //Next Player
        nextPlayer();
    }
    
    
});

document.querySelector('.btn--hold').addEventListener('click',function() {
    
        //Add CURRENT score to Global score
        scores[activePlayer] += roundScore ;  
        console.log(scores[activePlayer]);
                                               
                                                      
                                                      
        //Update UI                                              
        document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];                                              
        //Check if player won the game 
        if(scores[activePlayer] >= 100){
            document.querySelector('#name--' + activePlayer).textContent =  ' Winner!!';
        }
    
         else{                                       
        //Next Player
        nextPlayer();
             
         }

});


document.querySelector('.btn--new').addEventListener('click', init);

function nextPlayer() {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById('current--0').textContent = '0';
        document.getElementById('current--1').textContent = '0';
        
        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');
        
        document.querySelector('.dice').style.display  = 'none';
    
};

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    
    document.querySelector('.dice').style.display  = 'none';

    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0'; 
    document.getElementById('name--0').textContent = 'Player1';
    document.getElementById('name--1').textContent = 'Player2';
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
};



 
