window.onload = function(){
    

    let gameboard = document.getElementById('board');
    let grid = gameboard.getElementsByTagName('div');
    let curplayer = "X";
    let board = ['', '', '', '', '', '', '', '', ''];
    const wincon = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    const O_WON = 'O_WON';
    const X_WON = 'X_WON';
    const TIE = 'TIE';
    let active = 1;
    let statusDisplay = document.getElementById('status');
    let btn = document.querySelector('.btn');
    
    btn.addEventListener('click', e => {
        e.preventDefault();
        startnew();
      });
   
    //Adding the game baord and hover for each tile on the board.
    for (var r = 0; r < grid.length; r++) 
    {
        
        grid[r].id= "" + r;
        grid[r].classList.add('square');
        grid[r].addEventListener('mouseover', function(e) {e.target.classList.add('hover');});
        grid[r].addEventListener('mouseout', function(e) {e.target.classList.remove('hover');});
        grid[r].addEventListener('click', addplay, { once: true }); // the once function causes the listener to only take one input.
       
        
        function startnew()
                { 
                    board = ['', '', '', '', '', '', '', '', ''];
                    isGameActive = true;
                    
                    
                    if (curplayer === 'O') {
                        curplayer = "X";
                    }

                    active = 1;
                    statusDisplay.classList.remove('you-won');
                    statusDisplay.innerText = 'Move your mouse over a square and click to play an X or an O.';
                    for(let r = 0; r<grid.length;r++){
                        grid[r].innerText = '';
                        grid[r].classList.remove('X');
                        grid[r].classList.remove('O');
                        grid[r].addEventListener('click', addplay, { once: true }); 
                    };
        
                }

        function addplay(c)
        {
           
            if(curplayer == "X"){
                c.target.classList.add('X');
                c.target.innerHTML = curplayer;
                board[c.target.id] = curplayer;
                curplayer = "O"; 
            }
            else if(curplayer =="O")
            {
                c.target.classList.add('O');
                c.target.innerHTML = curplayer;
                board[c.target.id] = curplayer;
                curplayer = "X";
            };

            if(active == 0)
            {
                c.target.innerHTML = '';
            }
            wincondition();
            
        };
            
        
        function wincondition() 
        {
            let roundw = false;
            if(active == 1){
            for (let i = 0; i <= 7; i++) 
            {
                const winCondition = wincon[i];
                const a = board[winCondition[0]];
                const b = board[winCondition[1]];
                const c = board[winCondition[2]];
            
                if (a === '' || b === '' || c === '') {
                    continue;
                }
                if (a === b && b === c) {
                    roundw = true;
                    break;
                }
            }

                if (roundw) 
                {
                   findwinner(curplayer === 'X' ? O_WON : X_WON);
                    active = false;
                    return;
                }

                if (!board.includes(''))
                    findwinner(TIE); 
            }
        };
            
        function findwinner(winner) {
            statusDisplay.classList.add('you-won');
            switch(winner){
                case X_WON:
                    statusDisplay.innerText = 'Congratulations! X is the Winner!';
                    active = 0;
                    break;
                case O_WON:
                    statusDisplay.innerText = 'Congratulations! O is the Winner!';
                    active = 0;
                    break;
                case TIE:
                    statusDisplay.innerText = 'OH NO!! seems that there is a TIE!';
            }
            statusDisplay.classList.remove('hide');
            
        };
            
    };

};
       
    
    
