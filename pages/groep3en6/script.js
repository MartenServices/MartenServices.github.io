const expandBtn = document.querySelector('#expand-btn');
const xtrCat = document.querySelector('#xtr-categories');

expandBtn.addEventListener('click', () => {
    xtrCat.classList.toggle('hide');
    expandBtn.classList.add('hide');
});