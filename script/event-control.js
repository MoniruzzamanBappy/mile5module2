function handleFunction() {
    const byFunctionBtn = document.getElementById('clicking-method');
    byFunctionBtn.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quibusdam asperiores quaerat cupiditate debitis accusamus enim hic quae natus. Ullam quasi ad, dignissimos id odit sit molestiae soluta quos dolorum!';
}

document.getElementById('handle-direct').addEventListener('click', function () {
    const byFunctionBtn = document.getElementById('clicking-method');
    byFunctionBtn.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quibusdam asperiores quaerat cupiditate debitis accusamus';
});

document.getElementById('update-name').addEventListener('click', function () {
    const inputText = document.getElementById('input-text');
    const byFunctionBtn = document.getElementById('clicking-method');
    byFunctionBtn.innerText = inputText.value;
    inputText.value = '';
})