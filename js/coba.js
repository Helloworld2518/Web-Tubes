document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');
    const gallery = document.querySelector('.gallery');
    const images = Array.from(document.querySelectorAll('.gallery img'));

    // Simpan urutan asli agar bisa dikembalikan saat "Tampilkan Semua"
    const originalOrder = [...images];

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const filter = this.getAttribute('data-filter');

            // Reset tombol aktif
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            if (filter === 'all') {
                // Kembalikan ke urutan asli
                gallery.innerHTML = '';
                originalOrder.forEach(img => {
                    img.classList.remove('hidden', 'fade-out');
                    img.classList.add('fade-in');
                    gallery.appendChild(img);
                });
            } else {
                const filtered = images.filter(img => img.classList.contains(filter));
                const others = images.filter(img => !img.classList.contains(filter));

                // Urutkan ulang: pindahkan yang sesuai ke depan
                gallery.innerHTML = '';
                filtered.forEach(img => {
                    img.classList.remove('hidden', 'fade-out');
                    img.classList.add('fade-in');
                    gallery.appendChild(img);
                });

                others.forEach(img => {
                    img.classList.remove('fade-in');
                    img.classList.add('fade-out');
                    // Tunggu animasi keluar selesai sebelum sembunyikan
                    setTimeout(() => img.classList.add('hidden'), 500);
                    gallery.appendChild(img);
                });
            }
        });
    });
});
