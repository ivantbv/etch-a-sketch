let container = document.querySelector('.container');

// let divStyle = div.style;

for (let i = 0; i < 16*16; i++) {

  let div = document.createElement('div');
div.className = 'grid';
div.style.border = '.5px solid';
// div.style.width = '25px';
// div.style.height = '25px';
container.appendChild(div);
}


// container.style.width = '900px';
// container.style.height = '900px';