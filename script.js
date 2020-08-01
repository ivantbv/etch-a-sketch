let div;
let initialGrid;
let container = document.querySelector('.container');
let clickDraw = document.querySelector('.click-sketch');
container.style.cssText = ('width: 550px;', 'height: 550px;');

let contStyles = window.getComputedStyle(container);

function setGrid(x, y) {

container.style['grid-template'] = `repeat(${x}, 34px) / repeat(${y}, 34px)`;

    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
        div = document.createElement('div');
        div.classList.add('grid');
        div.style.border = '.2px solid silver';
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
 function draw() {

    // for (let i = 0; i < selectAll.length; i++) {
    //     selectAll[i].addEventListener('mouseover', function() {
    //         selectAll[i].style.backgroundColor = 'black';
    //     });
    // }
}

function clickSketch() {
    for (let i = 0; i < selectAll.length; i++) {
        selectAll[i].addEventListener('click', function() {
            selectAll[i].style.backgroundColor = 'lightseagreen';   
        });
    }
}
clickSketch();

let rainbowMash = document.querySelector('#rainbow');

rainbowMash.addEventListener('click', function() {
    function getRandomRgb() {
        var num = Math.round(0xffffff * Math.random());
        var r = num >> 16;
        var g = num >> 8 & 255;
        var b = num & 255;
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
      }
      
      function draw() {
        for (let i = 0; i < selectAll.length; i++) {
            selectAll[i].addEventListener('mouseover', function() {
                selectAll[i].style.backgroundColor = getRandomRgb();
            });
        }
    }
    draw();
})
        // let parsedFunc = function(a, b) {
        //     a = parseInt(contStyles.getPropertyValue('height'));
        //     b = parseInt(contStyles.getPropertyValue('width'));
        // return Number(a) + Number(b)
        // }

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
                    div.style.border = '.2px solid silver';
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
                    div.style.border = '0.2px solid silver';
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
        });

        //eraser that can erase cells individualy

        let eraser = document.querySelector('.erase');

        eraser.addEventListener('click', function() {
            for (let i = 0; i < selectAll.length; i++) {
                selectAll[i].addEventListener('click', function() {
                    selectAll[i].style.backgroundColor = '';
                });
            }
        })

        //color picker
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

       let colorOl = document.querySelector('.olive');
       let colorCo = document.querySelector('.coral');
       let colorCh = document.querySelector('.chocolate');
       let colorPVR = document.querySelector('.palevioletred');
       let colorPl = document.querySelector('.plum');
       let colorCFB = document.querySelector('.cornflowerblue');
       let colorTur = document.querySelector('.turquoise');
       let colorOR = document.querySelector('.orangered');
       let colorBW = document.querySelector('.burlywood');

       colorB.addEventListener('click', function() {
                    for (let i = 0; i < selectAll.length; i++) {
                    selectAll[i].addEventListener('click', function() {
                        selectAll[i].style.backgroundColor = 'black';
                    });
                }
       })
 
       colorW.addEventListener('click', function() {
         for (let i = 0; i < selectAll.length; i++) {
             selectAll[i].addEventListener('click', function() {
                 selectAll[i].style.backgroundColor = 'white';
             });
         }
    })
    colorY.addEventListener('click', function() {

         for (let i = 0; i < selectAll.length; i++) {
             selectAll[i].addEventListener('click', function() {
                 selectAll[i].style.backgroundColor = 'yellow';
             });
         }
    })
    colorBro.addEventListener('click', function() {

         for (let i = 0; i < selectAll.length; i++) {
             selectAll[i].addEventListener('click', function() {
                 selectAll[i].style.backgroundColor = 'brown';
             });
         }
    })

    colorP.addEventListener('click', function() {
         for (let i = 0; i < selectAll.length; i++) {
             selectAll[i].addEventListener('click', function() {
                 selectAll[i].style.backgroundColor = 'purple';
             });
         }
    })

    colorG.addEventListener('click', function() {
         for (let i = 0; i < selectAll.length; i++) {
             selectAll[i].addEventListener('click', function() {
                 selectAll[i].style.backgroundColor = 'grey';
             });
         }
    })

    colorV.addEventListener('click', function() {
         for (let i = 0; i < selectAll.length; i++) {
             selectAll[i].addEventListener('click', function() {
                 selectAll[i].style.backgroundColor = 'violet';
             });
         }
    })
    colorPi.addEventListener('click', function() {
         for (let i = 0; i < selectAll.length; i++) {
             selectAll[i].addEventListener('click', function() {
                 selectAll[i].style.backgroundColor = 'pink';
             });
         }
    })
    colorR.addEventListener('click', function() {
          for (let i = 0; i < selectAll.length; i++) {
             selectAll[i].addEventListener('click', function() {
                 selectAll[i].style.backgroundColor = 'red';
             });
         }
    })
    colorDB.addEventListener('click', function() {
         for (let i = 0; i < selectAll.length; i++) {
             selectAll[i].addEventListener('click', function() {
                 selectAll[i].style.backgroundColor = 'dodgerblue';
             });
         }
    })

    colorO.addEventListener('click', function() {
         for (let i = 0; i < selectAll.length; i++) {
             selectAll[i].addEventListener('click', function() {
                 selectAll[i].style.backgroundColor = 'orange';
             });
         }
    })

    colorGreen.addEventListener('click', function() {

         for (let i = 0; i < selectAll.length; i++) {
             selectAll[i].addEventListener('click', function() {
                 selectAll[i].style.backgroundColor = 'green';
             });
         }

    })
    colorC.addEventListener('click', function() {
         for (let i = 0; i < selectAll.length; i++) {
             selectAll[i].addEventListener('click', function() {
                 selectAll[i].style.backgroundColor = 'cyan';
             });
         }
    })

    colorS.addEventListener('click', function() {

         for (let i = 0; i < selectAll.length; i++) {
             selectAll[i].addEventListener('click', function() {
                 selectAll[i].style.backgroundColor = 'silver';
             });
         }
    })
    colorLSG.addEventListener('click', function() {

         for (let i = 0; i < selectAll.length; i++) {
             selectAll[i].addEventListener('click', function() {
                 selectAll[i].style.backgroundColor = 'lightseagreen';
             });
         }
    })
    colorOl.addEventListener('click', function() {

        for (let i = 0; i < selectAll.length; i++) {
            selectAll[i].addEventListener('click', function() {
                selectAll[i].style.backgroundColor = 'olive';
            });
        }
   })

   colorCo.addEventListener('click', function() {

    for (let i = 0; i < selectAll.length; i++) {
        selectAll[i].addEventListener('click', function() {
            selectAll[i].style.backgroundColor = 'coral';
        });
    }
})
colorCh.addEventListener('click', function() {

    for (let i = 0; i < selectAll.length; i++) {
        selectAll[i].addEventListener('click', function() {
            selectAll[i].style.backgroundColor = 'chocolate';
        });
    }
})

colorPVR.addEventListener('click', function() {

    for (let i = 0; i < selectAll.length; i++) {
        selectAll[i].addEventListener('click', function() {
            selectAll[i].style.backgroundColor = 'palevioletred';
        });
    }
})
colorPl.addEventListener('click', function() {

    for (let i = 0; i < selectAll.length; i++) {
        selectAll[i].addEventListener('click', function() {
            selectAll[i].style.backgroundColor = 'plum';
        });
    }
})

colorCFB.addEventListener('click', function() {

    for (let i = 0; i < selectAll.length; i++) {
        selectAll[i].addEventListener('click', function() {
            selectAll[i].style.backgroundColor = 'cornflowerblue';
        });
    }
})
colorTur.addEventListener('click', function() {

    for (let i = 0; i < selectAll.length; i++) {
        selectAll[i].addEventListener('click', function() {
            selectAll[i].style.backgroundColor = 'turquoise';
        });
    }
})
colorOR.addEventListener('click', function() {

    for (let i = 0; i < selectAll.length; i++) {
        selectAll[i].addEventListener('click', function() {
            selectAll[i].style.backgroundColor = 'orangered';
        });
    }
})

colorBW.addEventListener('click', function() {

    for (let i = 0; i < selectAll.length; i++) {
        selectAll[i].addEventListener('click', function() {
            selectAll[i].style.backgroundColor = 'burlywood';
        });
    }
})