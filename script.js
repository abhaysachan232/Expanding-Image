const panels = document.querySelectorAll('.panel')

panels.forEach(abhay => {
    abhay.addEventListener('click', () => {
        removeActiveClasses()
        abhay.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(abhay => {
        abhay.classList.remove('active')
    })
}