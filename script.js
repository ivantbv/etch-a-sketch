let div;
let initialGrid;
let container = document.querySelector('.container');


container.style.cssText = ('width: 550px;', 'height: 550px;');

let contStyles = window.getComputedStyle(container);

 //container.style.cssText = ('text-align:center;')

function setGrid(x, y) {

container.style['grid-template'] = `repeat(${x}, 30px) / repeat(${y}, 30px)`;

    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
        // container.style.cssText = ('display: grid; grid-template-columns: repeat(16, 20px); grid-template-rows: repeat(16, 20px); width: 320px;'); 
        div = document.createElement('div');
        div.classList.add('grid');
        div.style.border = '.2px solid grey';
        div.style.height = '30px';
        div.style.width = '30px';
        container.appendChild(div);
        }
    }
}
setGrid(16, 16);



//let parsedRows = parseInt(contStyles.getPropertyValue('grid-template-rows'));

 let selectAll = document.querySelectorAll('.container > .grid');

 function draw() {
    for (let i = 0; i < selectAll.length; i++) {
        selectAll[i].addEventListener('mouseover', function() {
            selectAll[i].style.backgroundColor = 'lightseagreen';
        });
    }
}
draw();

//let parsedGrid = parseInt(contStyles.getPropertyValue('height'))

        let parsedFunc = function(a, b) {
            a = parseInt(contStyles.getPropertyValue('height'));
            b = parseInt(contStyles.getPropertyValue('width'));
        return Number(a) + Number(b)
        }

        let btn = document.querySelector('#btn');
        let buttonClicked = 0
        
        let reset = btn.addEventListener('click', function() {
            
            initialGrid = prompt(`Choose the number of cells on the grid. Max. 25`);
            
            while (container.hasChildNodes()) {
                container.removeChild(container.firstChild);
              }
                div.classList.remove('grid');

            //window.location.reload(true);
            if (Number(initialGrid) > 0 && Number(initialGrid) <= 50) {

                   //let finalRes = Math.pow(initialGrid, 2) / parsedFunc; ;
                  
                   container.style['grid-template'] = `repeat(${Number(initialGrid)}, ${480/Number(initialGrid)}px) / repeat(${Number(initialGrid)}, ${480/Number(initialGrid)}px)`;
                    //container.style['grid-template-rows'] = `repeat(${Number(finalRes)}, 20px)`;

                  //container.classList.toggle('container');
                for (let i = 0; i < initialGrid * initialGrid; i++) {

                    div = document.createElement('div');
                    div.classList.add('grid');
                    div.style.border = '0.2px solid grey';
                    div.style.height = `${480/Number(initialGrid)}px`;
                    div.style.width = `${480/Number(initialGrid)}px`;
                    container.appendChild(div);
                }
                
            } else if (Number(initialGrid) > 50 || Number(initialGrid) < 0) {
               alert('Please, enter a number between 1 and 100')
               return initialGrid;
            }
            selectAll = document.querySelectorAll('.container > .grid');
            draw();
            ++buttonClicked;
            
        });

        //click sketch function

        function clickSketch() {
            for (let i = 0; i < selectAll.length; i++) {
                selectAll[i].addEventListener('click', function() {
                    selectAll[i].style.backgroundColor = 'lightseagreen';
                });
            }
        }
       
        let clickDraw = document.querySelector('.click-sketch');

        clickDraw.addEventListener('click', function() {

            while (container.hasChildNodes()) {
                container.removeChild(container.firstChild);
              }
                div.classList.remove('grid');
           
            // if (document.getElementById('#btn') == true) {
            //     setGrid(initialGrid, initialGrid);
            // } else {
            //     setGrid(16,16)
            // }
            
            if (buttonClicked >= 1) {
                while (container.hasChildNodes()) {
                    container.removeChild(container.firstChild);
                  }
                    div.classList.remove('grid');

                
                for (let i = 0; i < initialGrid * initialGrid; i++) {
                    container.style['grid-template'] = `repeat(${Number(initialGrid)}, ${initialGrid/Number(initialGrid)}px) / repeat(${Number(initialGrid)}, ${initialGrid/Number(initialGrid)}px)`;
                    div = document.createElement('div');
                    div.classList.add('grid');
                    div.style.border = '0.2px solid grey';
                    div.style.height = `${initialGrid/Number(initialGrid)}px`;
                    div.style.width = `${initialGrid/Number(initialGrid)}px`;
                    //container.appendChild(div);
                }
                
                setGrid(initialGrid, initialGrid);
            } else {
                setGrid(16,16);
            }
            selectAll = document.querySelectorAll('.container > .grid');
            clickSketch();

        })

        //button to clear grid out of the color

        let clearGrid = document.querySelector('.reset-grid') 

        clearGrid.addEventListener('click', function() {
            for (let i = 0; i < selectAll.length; i++) {
                selectAll[i].style.backgroundColor = '';
                }
        })

        //checkox to turn on and off grid cells and leave only white canvas to draw on
        let checkB = document.querySelector('#checkbox');

        checkB.addEventListener('click', function() {
            // div = document.createElement('div');
            // div.classList.add('grid');
            // div.style.border = '0px solid';

            container.children;

            !checkbox.checked ? div.style.border = '' : div.style.border = '.2px solid grey';
            
            console.log(div);
        })

        //input that takes the user input instead of prompting

        //an eraser that can erase cells individualy

        //a color picker