function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
const greenButton = document.getElementById('Green-Button');
function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

greenButton.onclick = makeGreen;

const bluevioletBtn = document.getElementById('blueviolet-btn');
// anonymous function ( jar kono nam nai)
bluevioletBtn.onclick = function () {
    document.body.style.backgroundColor = 'blueviolet';
}

// event listener

const goldenrodBtn = document.getElementById('goldenrod-btn');

goldenrodBtn.addEventListener('click', makeGoldenrod);
function makeGoldenrod() {
    document.body.style.backgroundColor = 'goldenrod';
}

