let container = document.querySelector('.container');
let div;

function setGrid() {
    let i = 0;
    while (i < 16*16) {
        div = document.createElement('div');
        div.className = 'grid';
        div.style.border = '.1px solid silver';
        container.appendChild(div);
        i++
    }
}
setGrid()

let selectAll = document.querySelectorAll('.container > .grid');

        for (let i = 0; i < selectAll.length; i++) {
            selectAll[i].addEventListener('mouseover', function() {
                selectAll[i].style.backgroundColor = 'black';
            });
        }

  
    // for (const myDiv of Array.from(div)) {
    //     myDiv.addEventListener("click", function() {
    //         this.style.backgroundColor = "grey"
    //     })
    // }