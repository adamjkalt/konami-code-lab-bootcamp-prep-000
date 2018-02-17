const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {

  let index = 0;


function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);
 
  if (key === alphabet[index]) {
    index++;
 
    if (index === alphabet.length) {
      alert("Hurray!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
}

  document.addEventListener('keydown', function(e) {
    var key = code[e.keyCode];
    var requiredKey = code[index];
  
    if (key == requiredKey) {
      index++;
    }
    if (index == code.length - 1) {
        alert("Hurray");
        index = 0;
    } 
    else {
      index = 0;
    }
  });
}