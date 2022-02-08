document.getElementById('post-comment').addEventListener('click', function () {
    const inputText = document.getElementById('input-comment');
    const newComment = document.createElement('p');
    const commentContainer = document.getElementById('comment-container');
    newComment.innerText = inputText.value;
    commentContainer.appendChild(newComment);
    inputText.value = '';
})