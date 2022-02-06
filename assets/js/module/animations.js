export default function animations() {

    /* Scroll Reveal */
    const animation = ScrollReveal({
        origin: "top",
        distance: "100px",
        duration: 2000,
        easing: 'cubic-bezier(0,.84,.67,1.05)',
        reset: false,
    });

    /* Header */
    animation.reveal(".home", { delay: 200, origin: "right", mobile: false });
    animation.reveal(".about", { delay: 400, origin: "right", mobile: false });
    animation.reveal(".services", { delay: 600, origin: "right", mobile: false });
    animation.reveal(".contact", { delay: 800, origin: "right", mobile: false });
    animation.reveal(".themeToggle", { delay: 1000, origin: "right", mobile: false });
    animation.reveal(".brand", { delay: 800, distance: "300px", origin: "right", mobile: false });


    /* Sections */
    animation.reveal("#home h1", { delay: 200, reset: true });
    animation.reveal("#about h1", { delay: 400, reset: true });
    animation.reveal("#services h1", { delay: 600, reset: true });
    animation.reveal("#contact h1", { delay: 800, reset: true });

}