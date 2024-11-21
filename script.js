let nomorUrut = 1;

function tambahKeTabel() {
    // Mengambil informasi dari formulir
    const nama = document.getElementById('nama').value;
    const ttl = document.getElementById('ttl').value;
    const jenisKelamin = document.getElementById('jenisKelamin').value;
    const alamat = document.getElementById('alamat').value;

    // Memberikan peringatan jika ada yang belum diisi
    if (!nama || !ttl || !jenisKelamin || !alamat) {
        alert('Harap isi semua kolom!');
        return;
    }

    // Membuat tabel dan menambahkan baris yang baru
    const tabel = document.getElementById('dataTabel');
    const barisBaru = tabel.insertRow();

    // Menambahkan kolom ke dalam baris
    barisBaru.insertCell(0).textContent = nomorUrut++; // Nomor
    barisBaru.insertCell(1).textContent = nama;       // Nama
    barisBaru.insertCell(2).textContent = ttl;        // Tempat Tanggal Lahir
    barisBaru.insertCell(3).textContent = jenisKelamin; // Jenis Kelamin
    barisBaru.insertCell(4).textContent = alamat;     // Alamat

    // Membersihkan formulir setelah sata diisikan dan ditambahkan ke tabel
    document.getElementById('form').reset();
}
