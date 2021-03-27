// Task03 
// Using JavaScript and DOM create click event handler for Button that 
// replaces content of a paragraph 4 with a number 42

function m07task03() {
  var button = document.getElementById('testButton'),
      content = document.getElementById('last');
    
    button.onclick = function(){
        content.innerHTML = '42';
    }
}