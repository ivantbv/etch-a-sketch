let div;
let initialGrid;
let brushColor;
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


let hoverDrawButton = document.querySelector('#hover-draw');

 let selectAll = document.querySelectorAll('.container > .grid');

 function draw() {
     if (document.getElementsByClassName('black').clicked == true) {
    for (let i = 0; i < selectAll.length; i++) {
        selectAll[i].addEventListener('mouseover', function() {
            selectAll[i].style.backgroundColor = 'black';
        });
    }
    } else if (document.getElementsByClassName('white').clicked == true) {
        for (let i = 0; i < selectAll.length; i++) {
            selectAll[i].addEventListener('mouseover', function() {
                selectAll[i].style.backgroundColor = 'white';
            });
        }
    }
}
draw();

//let rainbowMash = document.querySelector('#rainbow');


    function getRandomRgb() {
        var num = Math.round(0xffffff * Math.random());
        var r = num >> 16;
        var g = num >> 8 & 255;
        var b = num & 255;
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
      }
getRandomRgb();



        let parsedFunc = function(a, b) {
            a = parseInt(contStyles.getPropertyValue('height'));
            b = parseInt(contStyles.getPropertyValue('width'));
        return Number(a) + Number(b)
        }

        let btn = document.querySelector('#btn');
        let buttonClicked = 0

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
                    div.style.border = '.2px solid grey';
                }
            }            
        })

        //new grid with input
        
        let reset = btn.addEventListener('click', function() {
            divStyles = window.getComputedStyle(div);
            divBorderStyle = divStyles.getPropertyValue('border');
            checkB = document.querySelector('#checkbox');
            allGridDivs = document.querySelectorAll('.container > div');

            initialGrid = prompt(`Choose the number of cells on the grid. Max. 69`);
            while (container.hasChildNodes()) {
                container.removeChild(container.firstChild);
              }
                div.classList.remove('grid');

            if (Number(initialGrid) > 0 && Number(initialGrid) <= 69) {
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
  
            } else if (Number(initialGrid) > 69 || Number(initialGrid) < 0) {
               alert('Please, enter a number between 1 and 69')
               return this;
            }
            selectAll = document.querySelectorAll('.container > .grid');
            draw();
            //colorBlack();
            ++buttonClicked;
        });

        //click sketch function

        function clickSketch() {
            for (let i = 0; i < selectAll.length; i++) {
                selectAll[i].addEventListener('click', function() {
                    selectAll[i].style.backgroundColor = 'black';   
                });
            }
        }
       
        let clickDraw = document.querySelector('.click-sketch');

        clickDraw.addEventListener('click', function() {

            // while (container.hasChildNodes()) {
            //     container.removeChild(container.firstChild);
            //   }
            //     div.classList.remove('grid');
           
            // if (buttonClicked >= 1) {
            //     while (container.hasChildNodes()) {
            //         container.removeChild(container.firstChild);
            //       }
            //         div.classList.remove('grid');

            //     for (let i = 0; i < initialGrid * initialGrid; i++) {
            //         container.style['grid-template'] = `repeat(${Number(initialGrid)}, ${initialGrid/Number(initialGrid)}px) / repeat(${Number(initialGrid)}, ${initialGrid/Number(initialGrid)}px)`;
            //         div = document.createElement('div');
            //         div.classList.add('grid');
            //         div.style.border = '0.2px solid grey';
            //         div.style.height = `${initialGrid/Number(initialGrid)}px`;
            //         div.style.width = `${initialGrid/Number(initialGrid)}px`;
            //     }
            //     setGrid(16, 16);
            // } else {
            //     setGrid(16,16);
            // }
            
            selectAll = document.querySelectorAll('.container > .grid');
            clickSketch();
            buttonClicked--;
        })

        //button to clear grid out of the color

        let clearGrid = document.querySelector('.reset-grid') 

        clearGrid.addEventListener('click', function() {
            for (let i = 0; i < selectAll.length; i++) {
                selectAll[i].style.backgroundColor = '';
                }
        });


        //input that takes the user input instead of prompting

        //an eraser that can erase cells individualy

        //a color picker

// I use divs to style them
// then add event listeners
// if it is clicked, a variable called 'brushColor' is changed to the div's color

       let colorB = document.querySelector('.black');
       let colorW = document.querySelector('.white');
       let colorY = document.querySelector('.yellow');
       let colorBro = document.querySelector('.brown');
       let colorP = document.querySelector('.purple');
       let colorG = document.querySelector('.grey');
       let colorV = document.querySelector('.violet');
       let colorPi = document.querySelector('.pink');
       let colorR = document.querySelector('.red');
       let colorDB = document.querySelector('.dodgerblue');
       let colorO = document.querySelector('.orange');
       let colorGreen = document.querySelector('.green');
       let colorC = document.querySelector('.cyan');
       let colorS = document.querySelector('.silver');
       let colorLSG = document.querySelector('.lightseagreen');
       let colorRainbow = document.querySelector('.rainbowmash');

       colorB.addEventListener('click', function() {
           if (buttonClicked >=0) {
                               for (let i = 0; i < selectAll.length; i++) {
                    selectAll[i].addEventListener('mouseover', function() {
                        selectAll[i].style.backgroundColor = 'black';
                    });
                }
           } else if (buttonClicked < 0) {
            for (let i = 0; i < selectAll.length; i++) {
                selectAll[i].addEventListener('click', function() {
                    selectAll[i].style.backgroundColor = 'black';
                });
            }
           }
       })

 
       colorW.addEventListener('click', function() {
        if (buttonClicked >=0) {
                            for (let i = 0; i < selectAll.length; i++) {
                 selectAll[i].addEventListener('mouseover', function() {
                     selectAll[i].style.backgroundColor = 'white';
                 });
             }
        } else if (buttonClicked < 0) {
         for (let i = 0; i < selectAll.length; i++) {
             selectAll[i].addEventListener('click', function() {
                 selectAll[i].style.backgroundColor = 'white';
             });
         }
        }
    })

    colorY.addEventListener('click', function() {
        if (buttonClicked >=0) {
                            for (let i = 0; i < selectAll.length; i++) {
                 selectAll[i].addEventListener('mouseover', function() {
                     selectAll[i].style.backgroundColor = 'yellow';
                 });
             }
        } else if (buttonClicked < 0) {
         for (let i = 0; i < selectAll.length; i++) {
             selectAll[i].addEventListener('click', function() {
                 selectAll[i].style.backgroundColor = 'yellow';
             });
         }
        }
    })

    colorBro.addEventListener('click', function() {
        if (buttonClicked >=0) {
                            for (let i = 0; i < selectAll.length; i++) {
                 selectAll[i].addEventListener('mouseover', function() {
                     selectAll[i].style.backgroundColor = 'brown';
                 });
             }
        } else if (buttonClicked < 0) {
         for (let i = 0; i < selectAll.length; i++) {
             selectAll[i].addEventListener('click', function() {
                 selectAll[i].style.backgroundColor = 'brown';
             });
         }
        }
    })

    colorP.addEventListener('click', function() {
        if (buttonClicked >=0) {
                            for (let i = 0; i < selectAll.length; i++) {
                 selectAll[i].addEventListener('mouseover', function() {
                     selectAll[i].style.backgroundColor = 'purple';
                 });
             }
        } else if (buttonClicked < 0) {
         for (let i = 0; i < selectAll.length; i++) {
             selectAll[i].addEventListener('click', function() {
                 selectAll[i].style.backgroundColor = 'purple';
             });
         }
        }
    })

    colorG.addEventListener('click', function() {
        if (buttonClicked >=0) {
                            for (let i = 0; i < selectAll.length; i++) {
                 selectAll[i].addEventListener('mouseover', function() {
                     selectAll[i].style.backgroundColor = 'grey';
                 });
             }
        } else if (buttonClicked < 0) {
         for (let i = 0; i < selectAll.length; i++) {
             selectAll[i].addEventListener('click', function() {
                 selectAll[i].style.backgroundColor = 'grey';
             });
         }
        }
    })

    colorV.addEventListener('click', function() {
        if (buttonClicked >=0) {
                            for (let i = 0; i < selectAll.length; i++) {
                 selectAll[i].addEventListener('mouseover', function() {
                     selectAll[i].style.backgroundColor = 'violet';
                 });
             }
        } else if (buttonClicked < 0) {
         for (let i = 0; i < selectAll.length; i++) {
             selectAll[i].addEventListener('click', function() {
                 selectAll[i].style.backgroundColor = 'violet';
             });
         }
        }
    })

    colorPi.addEventListener('click', function() {
        if (buttonClicked >=0) {
                            for (let i = 0; i < selectAll.length; i++) {
                 selectAll[i].addEventListener('mouseover', function() {
                     selectAll[i].style.backgroundColor = 'pink';
                 });
             }
        } else if (buttonClicked < 0) {
         for (let i = 0; i < selectAll.length; i++) {
             selectAll[i].addEventListener('click', function() {
                 selectAll[i].style.backgroundColor = 'pink';
             });
         }
        }
    })

    colorR.addEventListener('click', function() {
        if (buttonClicked >=0) {
                            for (let i = 0; i < selectAll.length; i++) {
                 selectAll[i].addEventListener('mouseover', function() {
                     selectAll[i].style.backgroundColor = 'red';
                 });
             }
        } else if (buttonClicked < 0) {
         for (let i = 0; i < selectAll.length; i++) {
             selectAll[i].addEventListener('click', function() {
                 selectAll[i].style.backgroundColor = 'red';
             });
         }
        }
    })

    colorDB.addEventListener('click', function() {
        if (buttonClicked >=0) {
                            for (let i = 0; i < selectAll.length; i++) {
                 selectAll[i].addEventListener('mouseover', function() {
                     selectAll[i].style.backgroundColor = 'dodgerblue';
                 });
             }
        } else if (buttonClicked < 0) {
         for (let i = 0; i < selectAll.length; i++) {
             selectAll[i].addEventListener('click', function() {
                 selectAll[i].style.backgroundColor = 'dodgerblue';
             });
         }
        }
    })

    colorO.addEventListener('click', function() {
        if (buttonClicked >=0) {
                            for (let i = 0; i < selectAll.length; i++) {
                 selectAll[i].addEventListener('mouseover', function() {
                     selectAll[i].style.backgroundColor = 'orange';
                 });
             }
        } else if (buttonClicked < 0) {
         for (let i = 0; i < selectAll.length; i++) {
             selectAll[i].addEventListener('click', function() {
                 selectAll[i].style.backgroundColor = 'orange';
             });
         }
        }
    })

    colorGreen.addEventListener('click', function() {
        if (buttonClicked >=0) {
                            for (let i = 0; i < selectAll.length; i++) {
                 selectAll[i].addEventListener('mouseover', function() {
                     selectAll[i].style.backgroundColor = 'green';
                 });
             }
        } else if (buttonClicked < 0) {
         for (let i = 0; i < selectAll.length; i++) {
             selectAll[i].addEventListener('click', function() {
                 selectAll[i].style.backgroundColor = 'green';
             });
         }
        }
    })

    colorC.addEventListener('click', function() {
        if (buttonClicked >=0) {
                            for (let i = 0; i < selectAll.length; i++) {
                 selectAll[i].addEventListener('mouseover', function() {
                     selectAll[i].style.backgroundColor = 'cyan';
                 });
             }
        } else if (buttonClicked < 0) {
         for (let i = 0; i < selectAll.length; i++) {
             selectAll[i].addEventListener('click', function() {
                 selectAll[i].style.backgroundColor = 'cyan';
             });
         }
        }
    })

    colorS.addEventListener('click', function() {
        if (buttonClicked >=0) {
                            for (let i = 0; i < selectAll.length; i++) {
                 selectAll[i].addEventListener('mouseover', function() {
                     selectAll[i].style.backgroundColor = 'silver';
                 });
             }
        } else if (buttonClicked < 0) {
         for (let i = 0; i < selectAll.length; i++) {
             selectAll[i].addEventListener('click', function() {
                 selectAll[i].style.backgroundColor = 'silver';
             });
         }
        }
    })

    colorLSG.addEventListener('click', function() {
        if (buttonClicked >=0) {
                            for (let i = 0; i < selectAll.length; i++) {
                 selectAll[i].addEventListener('mouseover', function() {
                     selectAll[i].style.backgroundColor = 'lightseagreen';
                 });
             }
        } else if (buttonClicked < 0) {
         for (let i = 0; i < selectAll.length; i++) {
             selectAll[i].addEventListener('click', function() {
                 selectAll[i].style.backgroundColor = 'lightseagreen';
             });
         }
        }
    })

    colorRainbow.addEventListener('click', function() {
        if (buttonClicked >=0) {
                            for (let i = 0; i < selectAll.length; i++) {
                 selectAll[i].addEventListener('mouseover', function() {
                     selectAll[i].style.backgroundColor = getRandomRgb();
                 });
             }
        } else if (buttonClicked < 0) {
         for (let i = 0; i < selectAll.length; i++) {
             selectAll[i].addEventListener('click', function() {
                 selectAll[i].style.backgroundColor = getRandomRgb();
             });
         }
        }
    })