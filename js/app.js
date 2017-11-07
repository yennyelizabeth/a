// onload es un evento que indica a objeto de window para que
// se ejecute el javascript despues que se cargue el html ( estructura)
window.onload = function () {
  var board = document.querySelector('.board-js')  // clase "board"
//debugger

//board.addEventListener('click',function(event) {
//  console.log(event.target);
//  event.target.style.backgroundColor= 'red';
//} ); // funcion callBack

board.addEventListener('click', addX )

board.addEventListener('dblclick',function(event) {
//  console.log(event.target);
  event.target.style.backgroundColor= 'blue';
} ); // funcion callBack


};


function addBgc(event) {
event.target.style.backgroundColor= 'red';
}

var centinel = true ;

function addX (event) {
  if (event.target.matches('td') && event.target.textContent === '') {
    if (centinel) {
      event.target.textContent='X';
    } else {
      event.target.textContent='O';
    }
    centinel = !centinel ;
  }
}
