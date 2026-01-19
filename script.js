let scoreStr = localStorage.getItem('Score');
    let score;  
    resetScore(scoreStr);

    function resetScore(scoreStr){
        score = scoreStr ? JSON.parse(scoreStr) : {
        win: 0,
        loss: 0,
        tie: 0,
    };
    score.displayScore = function(){
        return `Wins: ${this.win}, Losses: ${this.loss}, Ties: ${this.tie}`;
    };
    }
    
//this will generate a random number between 1 and 3
        function generateComputerChoice(){   
            let randomNumber = Math.random()*3;
                if (randomNumber > 0 && randomNumber <=1){
                    return 'Bat';
                } else if (randomNumber >1 && randomNumber <=2){
                    return 'Ball';
                } else {
                    return 'Stump';
                }
        }

        function getResult(usermove, computermove){
            if(usermove === 'Bat' ){
                if (computermove === 'Bat'){
                    score.tie++;
                    return 'It\'s a Tie! Both chose Bat.';
                } else if (computermove === 'Ball'){
                    score.win++;
                    return 'You Win! Bat beats Ball.';
                } else if (computermove === 'Stump'){
                    score.loss++;
                    return 'You Lose! Stump beats Bat.';
                }

            }else if (usermove === 'Ball'){
                if (computermove === 'Ball'){
                    score.tie++;
                    return 'It\'s a Tie! Both chose Ball.';
                } else if (computermove === 'Stump'){
                    score.win++;
                    return 'You Win! Ball beats Stump.';
                } else if (computermove === 'Bat'){
                    score.loss++;
                    return 'You loss! Bat beats Ball.';
                }

            }else{
                if (computermove === 'Stump'){
                    score.tie++;
                    return 'It\'s a Tie! Both chose Stump.';
                } else if (computermove === 'Ball'){
                    score.loss++;
                    return 'You loss! Ball beats Stump.';
                } else if (computermove === 'Bat'){
                    score.win++;
                    return 'You won! Bat beats Stump.';
                }

            }
    }
    function showResult(usermove,computermove,result){
        
        //console.log(score);
        localStorage.setItem('Score' , JSON.stringify(score));
        alert(`You have chosen ${usermove}. Computer chose is  ${computermove}
        
        ${result}
        
        ${score.displayScore()}`);

    }