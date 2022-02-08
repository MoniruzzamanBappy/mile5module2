// const items = document.getElementsByClassName('item');
// for (const item of items) {
//     item.addEventListener('click', function (event) {
//         // /* --easy way by id--

//         // document.getElementById('list-container').removeChild(item); 
//         // */
//         // // by parents to get child
//         event.target.parentNode.removeChild(event.target);
//     });
// }

document.getElementById('add-li').addEventListener('click', function () {
    const newLi = document.createElement('li');
    const listContainer = document.getElementById('list-container');
    newLi.innerText = 'New 1';
    listContainer.appendChild(newLi);
});

document.getElementById('list-container').addEventListener('click', function (event) {
    event.target.parentNode.removeChild(event.target);
});