const container = document.querySelector('.container')
const btnPlay = document.getElementById('play-btn')

btnPlay.addEventListener('click', init);


// functions////

function init(){
  reset();
  for(let i = 1; i <= 100; i++){
    const box = getBox(i);
    container.append(box)
  }
}


function getBox(i){
  const box = document.createElement('div');
  box.className = 'box';
  box._boxId = i;

  box.addEventListener('click', function(){
  console.log(this._boxId);
  this.classList.add('clicked')  

  })

  return box;
}

function reset(){
  container.innerHTML = '';
}