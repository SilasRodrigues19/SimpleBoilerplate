export default function smoothScroll() {

    /* Smooth scroll */
    $(document).ready(function($) {

        $(".smoothScroll").click(function(e) {
            e.preventDefault();
            $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
        });

    });

    /* Events */
    document.addEventListener('scroll', () => {
        scrollToTopFunction();
    });

    /* Functions */
    const scrollToTopFunction = () => {

        const arrowUp = document.querySelector('footer .smoothScroll');
        let scrollPosition = window.scrollY;

        if (scrollPosition < 600) {
            arrowUp.style.cssText = 'display: none';
        } else {
            arrowUp.style.cssText = 'display: block';
        }
    }

}