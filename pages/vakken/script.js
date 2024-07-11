const readmoreBtn = document.querySelector('.read-more');
const xtrInfo = document.querySelector('.extra-info-math');
const chevron = document.querySelector('#chevron');

readmoreBtn.addEventListener('click', () => {
    if (chevron.classList.contains('fa-chevron-down')) {
        readmoreBtn.innerHTML = 'Lees minder<i id="chevron" class="fa-solid fa-chevron-up">'; 
        xtrInfo.classList.toggle('hide');

    } else {
        readmoreBtn.innerHTML = 'Lees Meer<i id="chevron" class="fa-solid fa-chevron-down">';
        xtrInfo.classList.toggle('hide'); 
    }
})
