let div;
let isClicked = false;
let resetGrid = false;
let initialGrid;
let container = document.querySelector('.container');
let clickDraw = document.querySelector('.click-sketch');
container.style.cssText = ('width: 550px;', 'height: 550px;');

let contStyles = window.getComputedStyle(container);

let colors = document.querySelectorAll('.color-selection > div');
console.log(colors)

function setColors(col) {
    colors.forEach(color => color.addEventListener('click', function(e){
        col = this.id
    }))
}
setColors();

function setGrid(x, y) {

container.style['grid-template'] = `repeat(${x}, 34px) / repeat(${y}, 34px)`;

    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
        div = document.createElement('div');
        div.classList.add('grid');
        div.style.border = '.1px solid silver';
        div.style.height = '34px';
        div.style.width = '34px';
        container.appendChild(div);
        }
    }
}
setGrid(16, 16);

//takes a screenshot of the sketch container with whatever is on it

function screenShot() {
    let region = document.querySelector('.container');
    html2canvas(region, {
      onrendered: function(canvas) {
        let pngUrl = canvas.toDataURL();
        let img = document.querySelector('.screen');
        img.src = pngUrl; 
        img.style.border = '2px solid grey';
        img.style.borderRadius = '3px';
        let wrapper = document.querySelector('.wrapper');          
      },
    });
  }

 let selectAll = document.querySelectorAll('.container > .grid');
//draw modes

// selectAll.forEach(element => element.addEventListener('mouseup', upListener))

function clickSketch(col) {
    for (let i = 0; i < selectAll.length; i++) {
        selectAll[i].addEventListener('mousedown', function(e) {
            e.preventDefault();
            isClicked = true;
        }, true);
    }
    for (let i = 0; i < selectAll.length; i++) {
        selectAll[i].addEventListener('mousemove', function(e) {
            e.preventDefault()
            if (isClicked == true) {
            selectAll[i].style.backgroundColor = col; 
        } 
        }, true);
    }

    for (let i = 0; i < selectAll.length; i++) {
        selectAll[i].addEventListener('mouseup', function(e) {
           e.preventDefault()
            isClicked = false;
        },true);
    }
}
clickSketch();

let rainbowMash = document.querySelector('#rainbow');

function getRandomRgb() {
    let num = Math.round(0xffffff * Math.random());
    let r = num >> 16;
    let g = num >> 8 & 255;
    let b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }

let radius = document.querySelector('#radius');

radius.addEventListener('click', function(e) {
    allGridDivs = document.querySelectorAll('.container > div');

    function exactValue() {
        if (radius.value !== '') {
            radius.value = parseFloat(radius.value);
    
            if (initialGrid > 40 && radius.value > 5) {
                radius.value = 5;
               } else if (radius.value < 0)
               radius.value = 0;
            else if (radius.value > 11)
                radius.value = 11;
        } 
    } 
    exactValue();

    for (div of allGridDivs) {
      //  div.style.backgroundColor = getRandomRgb();
        div.style.borderRadius = `${radius.value}px`;
   }
})

rainbowMash.addEventListener('click', (e) => {
  
  allGridDivs = document.querySelectorAll('.container > div')
 
  for (div of allGridDivs) {
       div.style.backgroundColor = getRandomRgb();
       //div.style.borderRadius = `${radius}px`;
  }

});

    let btn = document.querySelector('#btn');

//checkox to turn on and off grid cells and leave only white canvas to draw on
        let divStyles;
        let divBorderStyle;
        let checkB = document.querySelector('#checkbox');
        let allGridDivs;           
     
       let switchGrid = checkB.addEventListener('click', function() {
        divStyles = window.getComputedStyle(div);
        divBorderStyle = divStyles.getPropertyValue('border');
        allGridDivs = document.querySelectorAll('.container > div');

                if (!checkB.checked) {
                    for (div of allGridDivs) {
                        div.style.border = '';
                  }
            } else if (checkB.checked) {
                for (div of allGridDivs) {
                    div.style.border = '.1px solid silver';
                }
            }            
        })

        //new grid with input
        
        let reset = btn.addEventListener('click', function() {
            divStyles = window.getComputedStyle(div);
            divBorderStyle = divStyles.getPropertyValue('border');
            checkB = document.querySelector('#checkbox');
            allGridDivs = document.querySelectorAll('.container > div');

            initialGrid = prompt(`Choose the number of cells on the grid. Max. 70`);
            while (container.hasChildNodes()) {
                container.removeChild(container.firstChild);
              }
                div.classList.remove('grid');

            if (Number(initialGrid) > 0 && Number(initialGrid) <= 70) {
                  
                   container.style['grid-template'] = `repeat(${Number(initialGrid)}, ${544/Number(initialGrid)}px) / repeat(${Number(initialGrid)}, ${544/Number(initialGrid)}px)`;
                    
                for (let i = 0; i < initialGrid * initialGrid; i++) {

                    div = document.createElement('div');
                    div.classList.add('grid');
                    div.style.border = '0.1px solid silver';
                    div.style.height = `${544/Number(initialGrid)}px`;
                    div.style.width = `${544/Number(initialGrid)}px`;
                    container.appendChild(div);
                }
  
            } else if (Number(initialGrid) > 70 || Number(initialGrid) < 0) {
               alert('Please, enter a number between 1 and 70')
               setGrid(16, 16);
            } else {
                setGrid(16, 16);
            }
            selectAll = document.querySelectorAll('.container > .grid');
        });

        //button to clear grid out of the color
        let clearGrid = document.querySelector('.reset-grid') 
        
        clearGrid.addEventListener('click', function() {    
            for (let i = 0; i < selectAll.length; i++) {
                selectAll[i].style.backgroundColor = '';
                }
                resetGrid = true;
        });

        //eraser that can erase cells individualy

        let eraser = document.querySelector('.erase');
        eraser.addEventListener('click', function() {
            clickSketch('');
            resetGrid = true;
        })

        //color picker
       let colorB = document.querySelector('#black');
       let colorW = document.querySelector('#white');
       let colorY = document.querySelector('#yellow');
       let colorBro = document.querySelector('#brown');
       let colorP = document.querySelector('#purple');
       let colorG = document.querySelector('#grey');
       let colorV = document.querySelector('#violet');
       let colorPi = document.querySelector('#pink');
       let colorR = document.querySelector('#red');
       let colorDB = document.querySelector('#dodgerblue');
       let colorO = document.querySelector('#orange');
       let colorGreen = document.querySelector('#green');
       let colorC = document.querySelector('#cyan');
       let colorS = document.querySelector('#silver');
       let colorLSG = document.querySelector('#lightseagreen');
       let colorOl = document.querySelector('#olive');
       let colorCo = document.querySelector('#coral');
       let colorCh = document.querySelector('#chocolate');
       let colorPVR = document.querySelector('#palevioletred');
       let colorPl = document.querySelector('#plum');
       let colorCFB = document.querySelector('#cornflowerblue');
       let colorTur = document.querySelector('#turquoise');
       let colorOR = document.querySelector('#orangered');
       let colorBW = document.querySelector('#burlywood');


       colorB.addEventListener('click', function() {       
        clickSketch('black');
       //resetGrid = true;  
       })
 
       colorW.addEventListener('click', function() {
        clickSketch('white');
        })
        colorY.addEventListener('click', function() {
            clickSketch('yellow');
        })
        colorBro.addEventListener('click', function() {
            clickSketch('brown');
        })

        colorP.addEventListener('click', function() {
            clickSketch('purple');
        })

    colorG.addEventListener('click', function() {
         clickSketch('grey');
    })

    colorV.addEventListener('click', function() {
         clickSketch('violet');
    })
    colorPi.addEventListener('click', function() {
         clickSketch('pink');
    })
    colorR.addEventListener('click', function() {
        clickSketch('red')
    })
    colorDB.addEventListener('click', function() {
        clickSketch('dodgerblue')
    })

    colorO.addEventListener('click', function() {
        clickSketch('orange')
    })

    colorGreen.addEventListener('click', function() {

        clickSketch('green')

    })
    colorC.addEventListener('click', function() {
        clickSketch('cyan')
    })

    colorS.addEventListener('click', function() {
        clickSketch('silver')
    })
    colorLSG.addEventListener('click', function() {
        clickSketch('lightseagreen')
    })
    colorOl.addEventListener('click', function() {
        clickSketch('olive')
   })

   colorCo.addEventListener('click', function() {

    clickSketch('coral')
})
colorCh.addEventListener('click', function() {
    clickSketch('chocolate')
})

colorPVR.addEventListener('click', function() {
    clickSketch('palevioletred');
})
colorPl.addEventListener('click', function() {
    clickSketch('plum')
})

colorCFB.addEventListener('click', function() {

    clickSketch('cornflowerblue');
})
colorTur.addEventListener('click', function() {

    clickSketch('turquoise')
})
colorOR.addEventListener('click', function() {
    clickSketch('orangered')
})

colorBW.addEventListener('click', function() {
    clickSketch('burlywood');
})