const container = document.querySelector('.container')

reset();

for(let i = 1; i <= 100; i++){
  const box = getBox();
  console.log(box);
  container.append(box)
}


// functions////

function getBox(){
  const box = document.createElement('div');
  box.className = 'box';

  return box;
}

function reset(){
  container.innerHTML = '';
}