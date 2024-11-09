const navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Hapus kelas 'active' dari semua tautan
        navbarLinks.forEach(nav => nav.classList.remove('active'));
        // Tambahkan kelas 'active' ke tautan yang diklik
        this.classList.add('active');
    });
});