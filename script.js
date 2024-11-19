document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        Document.querySelector(this.getAttribute('href')).scrollIntoView({

        });
    });
});