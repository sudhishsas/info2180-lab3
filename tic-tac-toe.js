window.onload = function(){
    console.log('worked');

    const statusDisplay = document.querySelector('#status');

    //statusDisplay.innerHTML = 
    
    let gamestatus = true;
    let gameboard = document.getElementById('board');
    let grid = gameboard.getElementsByTagName('div');
    let curplayer = "X";
    let gameState = ["", "", "", "", "", "", "", "", ""];
    let boxes = [];
    const curplayerTurn = () => `It's ${curplayer}'s turn`;


    statusDisplay.innerHTML = curplayerTurn();

    //Adding the game baord and hover for each tile on the board.
    for (var r = 0; r < grid.length; r++) 
    {
        grid[r].classList.add('square');
        
        grid[r].addEventListener('mouseover', function(e) {
            e.target.classList.add('hover');
            
        });
        grid[r].addEventListener('mouseout', function(e) {
            e.target.classList.remove('hover');
  
        });
        
    };
   
    
    
    
    
};