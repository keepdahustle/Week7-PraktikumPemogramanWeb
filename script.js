
function showAlert() {
    alert('🎉 Selamat datang! Mari kita jelajahi portfolio saya bersama-sama!');
}

// Fungsi untuk menampilkan detail portfolio
function lihatDetail(projectName) {
    alert(`📌 Detail Proyek: ${projectName}\n\nProyek ini menampilkan keahlian saya dalam menciptakan solusi digital yang inovatif dan user-friendly. Klik tombol "Kirim Pesan" di bawah untuk menghubungi saya dan diskusikan proyek Anda!`);
}

// Fungsi untuk validasi dan submit form
function submitForm(event) {
    event.preventDefault();

    // Ambil nilai dari form
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const subjek = document.getElementById('subjek').value.trim();
    const pesan = document.getElementById('pesan').value.trim();

    // Validasi input tidak boleh kosong
    if (!nama || !email || !subjek || !pesan) {
        alert('❌ Mohon isi semua field yang tersedia!');
        return;
    }

    // Validasi format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('❌ Format email tidak valid! Silakan masukkan email yang benar.');
        return;
    }

    // Jika semua validasi berhasil
    alert(`✅ Terima kasih ${nama}!\n\nPesan Anda telah diterima. Saya akan menghubungi Anda di ${email} dalam waktu 24 jam.\n\nPesan: "${pesan}"`);

    // Reset form
    document.querySelector('.kontak-form').reset();

    // Ubah warna tombol secara dinamis sebagai feedback
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalBg = submitBtn.style.background;
    submitBtn.style.background = 'linear-gradient(135deg, #4caf50 0%, #45a049 100%)';
    submitBtn.textContent = '✓ Pesan Terkirim!';

    // Kembalikan ke kondisi semula setelah 2 detik
    setTimeout(() => {
        submitBtn.style.background = originalBg;
        submitBtn.textContent = 'Kirim Pesan';
    }, 2000);
}

// Fungsi untuk smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fungsi untuk menambahkan efek scroll pada header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Fungsi untuk animasi skill bar saat section tentang terlihat
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const tentangSection = document.querySelector('.tentang');
if (tentangSection) {
    observer.observe(tentangSection);
}

// Fungsi untuk menambahkan animasi pada portfolio cards saat terlihat
const portfolioCards = document.querySelectorAll('.portfolio-card');
const cardObserver = new IntersectionObserver(function(entries) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

portfolioCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
    cardObserver.observe(card);
});

console.log('✅ Website Portfolio Digital berhasil dimuat!');