document.getElementById('delete-img').addEventListener('click', function () {
    const nusratImg = document.getElementById('nusrat-img');
    nusratImg.style.display = 'none';
    const confirmText = document.getElementById('confirm-text');
    confirmText.style.display = 'none';
    const dltText = document.getElementById('delete-img');
    dltText.style.display = 'none';


});

document.getElementById('confirm-text').addEventListener('keyup', function (event) {
    const deleteBtn = document.getElementById('delete-img');
    if (event.target.value == 'CONFIRM') {
        deleteBtn.removeAttribute('disabled');
    }
    else {
        deleteBtn.setAttribute('disabled', true);
    }
})