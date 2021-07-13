console.log('on');

document.querySelectorAll('.expandable').forEach( item => {
    item.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('open');
    })
})