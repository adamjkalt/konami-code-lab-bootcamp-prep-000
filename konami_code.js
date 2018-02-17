const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {

$(document).on('keyup',

    Konami.code(function() {
        alert('Congratulations, 30 lives!');
    })

);
}