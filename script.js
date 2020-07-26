let div;
let initialGrid;
let container = document.querySelector('.container');

container.style.cssText = ('width: 340px;', 'text-align: center;');

function setGrid() {
   x = 16;
     y = 16;
    
container.style['grid-template-columns'] = `repeat(${x}, 18px)`;
container.style['grid-template-rows'] = `repeat(${y}, 18px)`;


    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
        // container.style.cssText = ('display: grid; grid-template-columns: repeat(16, 20px); grid-template-rows: repeat(16, 20px); width: 320px;'); 
        div = document.createElement('div');
        div.classList.add('grid');
        div.style.border = '.2px solid grey';
        div.style.height = '1fr';
        div.style.width = '1fr';
        container.appendChild(div);
        }
    }
}
setGrid()

 //use this with grid to set a dynamic grid instead of the CSSone

 let selectAll = document.querySelectorAll('.container > .grid');

 function draw() {
    for (let i = 0; i < selectAll.length; i++) {
        selectAll[i].addEventListener('mouseover', function() {
            selectAll[i].style.backgroundColor = 'violet';
        });
    }
}
draw();
        
        let btn = document.querySelector('#btn');
        
        let reset = btn.addEventListener('click', function promptMsg() {
            
            initialGrid = prompt('Please, choose the number of cells on the grid. Max. 100');
            
            //window.location.reload(true);
            if (Number(initialGrid) > 0 && Number(initialGrid) <= 100) {

                while (container.hasChildNodes()) {
                    container.removeChild(container.firstChild);
                  }
                    div.classList.remove('grid');

                  //container.classList.toggle('container');
                for (let i = 0; i < initialGrid * initialGrid; i++) {

                    container.style['grid-template-columns'] = `repeat(${Number(initialGrid)}, 20px)`;
                    container.style['grid-template-rows'] = `repeat(${Number(initialGrid)}, 20px)`;
                    //container.style.width = '320px;'

                    div = document.createElement('div');
                    div.classList.add('grid');
                    div.style.border = '0.2px solid grey';
                    div.style.height = '20px';
                    div.style.width = '20px';
                    container.appendChild(div);
                }
                
            } else if (Number(initialGrid) > 100 || Number(initialGrid) < 0) {
               alert('Please, enter a number between 1 and 100')
            }

        });
       
  

  

        //MUST GET TO DRAW ON THE NEWLY CREATED GRID AND MUST FIT IN THE MAIN CONTAINER!

     // Add a button to the top of the screen which will clear the current grid and send the 
    // user a popup asking for how many squares per side to make the new grid. 
     // Once entered the new grid should be generated in the same total space as before 
    // (e.g. 960px wide) and now you’ve got a new sketch pad.

    // Research button tags in HTML and how you can make a JavaScript function run when one is
        //  clicked.
        // Also check out prompts