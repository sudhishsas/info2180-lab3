window.onload = function(){
    console.log('worked');
    let gameboard = document.getElementById('board');
    let grid = gameboard.getElementsByTagName('div');
    
    
    for (var r = 0; r < grid.length; r++) 
    {
        grid[r].classList.add('square');
        
    };
   
  
};