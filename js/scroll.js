window.sr = ScrollReveal();

sr.reveal('.showcase-text', {
    duration: 2000,
    origin: 'bottom'
});

sr.reveal('.showcase-top-1',  {
    duration: 2000,
    origin: 'top',
    distance: '300px'
});

sr.reveal('.showcase-top-2',  {
    duration: 2500,
    origin: 'top',
    distance: '300px'
});

sr.reveal('.showcase-top-3',  {
    duration: 3000,
    origin: 'top',
    distance: '300px'
});

sr.reveal('.showcase-left',  {
    duration: 3000,
    origin: 'left',
    distance: '300px'
});

sr.reveal('.showcase-right-1',  {
    duration: 2000,
    origin: 'right',
    distance: '300px'
});

sr.reveal('.showcase-right-2',  {
    duration: 2200,
    origin: 'right',
    distance: '300px'
});

sr.reveal('.showcase-right-3',  {
    duration: 2400,
    origin: 'right',
    distance: '300px'
});

sr.reveal('.showcase-right-4',  {
    duration: 2600,
    origin: 'right',
    distance: '300px'
});

sr.reveal('.showcase-right-5',  {
    duration: 2800,
    origin: 'right',
    distance: '300px'
});

sr.reveal('.showcase-right-6',  {
    duration: 3000,
    origin: 'right',
    distance: '300px'
});

sr.reveal('.showcase-right-7',  {
    duration: 3200,
    origin: 'right',
    distance: '300px'
});

sr.reveal('.showcase-right-8',  {
    duration: 3400,
    origin: 'right',
    distance: '300px'
});

sr.reveal('.showcase-right-9',  {
    duration: 3600,
    origin: 'right',
    distance: '300px'
});

sr.reveal('.showcase-right',  {
    duration: 2000,
    origin: 'right',
    distance: '300px'
});

sr.reveal('.contact-img', {duration: 2000}, 200);

// Smooth Scrolling
$(function() {
    // Smooth Scrolling
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});