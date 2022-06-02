const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle)
navLinks.forEach((navItem) => {
    navItem.addEventListener('click', () => { bsCollapse.toggle() })
})