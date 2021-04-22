const navLink = document.querySelectorAll('.nav-link')

navLink.forEach(nl => {
    nl.addEventListener('click', function () {
        nl.classList.add('aktif')
    })
})