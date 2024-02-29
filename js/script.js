const container = document.querySelector('.container')

reset();

for(let i = 1; i <= 100; i++){
  const box = getBox(i);
  console.log(box);
  container.append(box)
}


// functions////

function getBox(i){
  const box = document.createElement('div');
  box.className = 'box';
  box._boxId = i;

  box.addEventListener('click', function(){
  console.log(this._boxId);  

  })

  return box;
}

function reset(){
  container.innerHTML = '';
}