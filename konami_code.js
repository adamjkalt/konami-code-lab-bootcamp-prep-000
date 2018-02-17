const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {

const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
 
let index = 0;

document.addEventListener('keydown', function(e) {
  var requiredKey = code[index];
}
  if requiredKey {

    index++;
 
function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);
 
  if (konamiCodePosition == konamiCode.length) {
      activateCheats();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});
  
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
}