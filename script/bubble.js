document.getElementById('third-item').addEventListener('click', function (event) {
    console.log('third clicked');
    document.body.style.backgroundColor = 'red';
    event.stopPropagation();
});
document.getElementById('list-container').addEventListener('click', function (event) {
    console.log('ul clicked');
    document.body.style.backgroundColor = 'green';
    event.stopPropagation();
});
document.getElementById('container').addEventListener('click', function (event) {
    console.log('container clicked');
    document.body.style.backgroundColor = 'yellow';
    event.stopPropagation();
});
