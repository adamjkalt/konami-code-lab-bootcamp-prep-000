const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {

const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
 
let index = 0;

document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];
 
function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);
 
  if (key === code[index]) {
    index++;
 
    if (index === code.length) {
      alert("You Have 30 Lives!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
}
}