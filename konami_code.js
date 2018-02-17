const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {

let cursor = 0;
 function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);
  
document.addEventListener('keydown', (e) => {
  cursor = (e.keyCode == code[cursor]) ? cursor + 1 : 0;
  if (cursor == code.length)  alert("Hurray!");
});
}
}