// Task01 - Create a simple function that will be used as event handler. 
// function should cancel event bubbling

function task01() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
    
    btn.onclick = function(event) {
    event.cancelBubble = true;
    }
}

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

// For HMTL:
// <button onclick="task01()">Press me</button>


