document.querySelectorAll("#header-bottom nav button").forEach(btn => {
    btn.addEventListener('click', function() {
        window.location.href = this.getAttribute('data-url');
    });
});