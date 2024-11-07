// Data perpustakaan
const perpustakaanData = {
    nama: "Digital Library",
    alamat: "Jl. Pendidikan No. 123",
    tahunBerdiri: 2020,
    koleksiBuku: 5000
};

// Informasi perpustakaan
const informasiPerpustakaan = [
    "Buka setiap hari: 08.00 - 20.00 WIB",
    "Layanan peminjaman buku online",
    "Fasilitas ruang baca yang nyaman",
    "Akses internet gratis"
];

// Data buku untuk pameran
const bukuPameran = [
    {
        judul: "JavaScript Modern",
        penulis: "John Doe",
        tahun: 2023,
        gambar: "bahan/java.jpeg"
    },
    {
        judul: "Python untuk Pemula",
        penulis: "Jane Smith",
        tahun: 2024,
        gambar: "bahan/python.jpeg"
    },
    {
        judul: "Data Science Basic",
        penulis: "David Wilson",
        tahun: 2023,
        gambar: "bahan/data.jpeg"
    }
];

// Menampilkan data perpustakaan
document.addEventListener('DOMContentLoaded', function() {
    // Menampilkan data perpustakaan
    const dataDisplay = document.getElementById('data-display');
    dataDisplay.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h4>${perpustakaanData.nama}</h4>
                <p>Alamat: ${perpustakaanData.alamat}</p>
                <p>Tahun Berdiri: ${perpustakaanData.tahunBerdiri}</p>
                <p>Jumlah Koleksi Buku: ${perpustakaanData.koleksiBuku}</p>
            </div>
        </div>
    `;

    // Menampilkan informasi perpustakaan
    const infoDisplay = document.getElementById('info-display');
    infoDisplay.innerHTML = `
        <div class="card">
            <div class="card-body">
                <ul class="list-group">
                    ${informasiPerpustakaan.map(info => `
                        <li class="list-group-item">${info}</li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;

    // Mengatur tampilan pameran buku
    let currentSlide = 0;
    const sliderContent = document.querySelector('.slider-content');
    const prevButton = document.getElementById('prevSlide');
    const nextButton = document.getElementById('nextSlide');
    const toggleButton = document.getElementById('togglePameran');
    const pameranInfo = document.getElementById('pameranInfo');

    // Toggle pameran
    toggleButton.addEventListener('click', function() {
        pameranInfo.style.display = pameranInfo.style.display === 'none' ? 'block' : 'none';
        toggleButton.textContent = pameranInfo.style.display === 'none' ? 'Pamerkan Buku' : 'Sembunyikan Pameran';
    });

    // Fungsi untuk menampilkan slide
    function showSlide(index) {
        const buku = bukuPameran[index];
        sliderContent.innerHTML = `
            <div class="card text-center">
                <img src="${buku.gambar}" class="card-img-top mx-auto" alt="${buku.judul}" style="width: 150px;">
                <div class="card-body">
                    <h5 class="card-title">${buku.judul}</h5>
                    <p class="card-text">Penulis: ${buku.penulis}</p>
                    <p class="card-text">Tahun: ${buku.tahun}</p>
                </div>
            </div>
        `;
    }

    // Event listeners untuk navigasi slider
    prevButton.addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + bukuPameran.length) % bukuPameran.length;
        showSlide(currentSlide);
    });

    nextButton.addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % bukuPameran.length;
        showSlide(currentSlide);
    });

    // Tampilkan slide pertama
    showSlide(currentSlide);
});
