const buttons = document.querySelectorAll('button'),
    images = document.querySelectorAll('.images');

buttons.forEach(button => {
    button.addEventListener('click', e => {
        images.forEach(image => image.style.display = 'none');
        buttons.forEach(button => button.classList.remove('rotate'));
        button.classList.add('rotate');
        button.nextElementSibling.style.display = 'inline-block';
    });
});