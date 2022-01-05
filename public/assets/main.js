var input = document.querySelector('#url');

input.addEventListener('keyup', (key) => {
    if (key.keyCode == 13) { 
        if (!input.value.trim().length) return;
        window.open(`/prox/?url=${btoa(input.value)}`, '_blank');
    }
});


document.querySelector("#initiate").addEventListener('click', () => {

    if (!input.value.trim().length) return;
    window.open(`/prox/?url=${btoa(input.value)}`, '_blank');

});
