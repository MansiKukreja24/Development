//Restart Game Button

var restart = document.querySelector("#b");

// Grab all the squares

var squares = document.querySelectorAll("td");

// Clearing the board:
function clearBoard(){
    for(var i=0; i<squares.length;i++){
        squares[i].textContent = '';
    }
}

 start.addEventListener("click",clearBoard);

//var one = document.querySelector(#1);
// one.addEventListener('click',function(){
//    if(one.textContent === ''){
//        one.textContent = 'X';
//    }
//    else if(one.textContent === 'X'){
//        one.textContent = 'O'
//    }
//    else{
//        one.textContent = '';
//    }
// })

function changeMarker(){
    if(this.textContent === ''){
        this.textContent ='X';
    }
    else if(this.textContent === 'X'){
        this.textContent = 'O'
    }
    else{
        this.textContent='';
    }
}
function clearBoard(){
    for(var i=0; i<squares.length;i++){
        squares[i].addEventListener('click',changeMarker);
    }



}
