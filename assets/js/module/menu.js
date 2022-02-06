export default function menu() {

    /* Variables */
    const navbar = document.querySelector('.navbar'),
        menu_links = document.querySelectorAll('.navbar a'),
        menu = document.querySelector('.menu');

    let menuToggle = document.createElement('span');
    menuToggle.classList.add('uil', 'uil-bars');

    menu.appendChild(menuToggle);

    /* Events */
    menu.addEventListener('click', () => {
        menuToggleFunction();
    });

    /* Functions */
    const menuToggleFunction = () => {

        if (menuToggle.classList.contains('uil')) {
            menuToggle.classList.toggle('uil-bars');
            menuToggle.classList.toggle('uil-times');
        }
        navbar.classList.toggle('active');

    };

    /* Close mobile menu after link is clicked */
    menu_links.forEach((link) => {
        link.addEventListener('click', () => {
            menuToggleFunction();
        });
    });

}