$(document).ready(function() {
    // Inisialisasi accordion
    $("#accordion").accordion({
        collapsible: true,
        heightStyle: "content"
    });

    // Inisialisasi datepicker
    $("#datepicker").datepicker({
        dateFormat: 'dd-mm-yy',
        minDate: 0,
        monthNames: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
            'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
        ],
        dayNames: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
        dayNamesMin: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
        firstDay: 1
    });

    // Efek hover pada menu menggunakan jQuery
    $('nav ul li').hover(
        function() {
            $(this).animate({ backgroundColor: '#3498db' }, 200);
        },
        function() {
            $(this).animate({ backgroundColor: 'transparent' }, 200);
        }
    );
}); 