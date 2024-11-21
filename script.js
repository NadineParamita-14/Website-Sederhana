let nomorUrut = 1;

function tambahKeTabel() {
    // Mengambil informasi dari formulir
    const nama = document.getElementById('nama').value;
    const ttl = document.getElementById('ttl').value;
    const jenisKelamin = document.getElementById('jenisKelamin').value;
    const alamat = document.getElementById('alamat').value;

    // Memberikan peringatan jika ada yang belum diisi
    if (!nama || !ttl || !jenisKelamin || !alamat) {
        alert('Masih ada yang belum kamu isi, nih! Mohon diisi semua kolomnya ya!');
        return;
    }

    // Membuat tabel dan menambahkan baris yang baru
    const tabel = document.getElementById('dataTabel');
    const barisBaru = tabel.insertRow();

    // Menambahkan kolom ke dalam baris
    barisBaru.insertCell(0).textContent = nomorUrut++; 
    barisBaru.insertCell(1).textContent = nama;       
    barisBaru.insertCell(2).textContent = ttl;        
    barisBaru.insertCell(3).textContent = jenisKelamin; 
    barisBaru.insertCell(4).textContent = alamat;     

    //Menambahkan opsi Edit dan Hapus
    const aksiCell = barisBaru.insertCell(5);
    aksiCell.innerHTML = `
        <button class="edit-btn" onclick="editData(this)">Edit</button>
        <button class="delete-btn" onclick="hapusData(this)">Hapus</button>
    `;

    // Membersihkan formulir setelah data diisikan dan ditambahkan ke tabel
    document.getElementById('form').reset();
}

function hapusData(button) {
    const baris = button.parentNode.parentNode;
    baris.remove();

    updateNomorUrut();
}

function editData(button) {
    const baris = button.parentNode.parentNode;

    //Mengambil data dari tabel
    const nama = baris.cells[1].textContent;
    const ttl = baris.cells[2].textContent;
    const jenisKelamin = baris.cells[3].textContent;
    const alamat = baris.cells[4].textContent;

    //Masukkan data ke form untuk diedit
    document.getElementById('nama').value = nama;
    document.getElementById('ttl').value = ttl;
    document.getElementById('jenisKelamin').value = jenisKelamin;
    document.getElementById('alamat').value = alamat;

    //menghapus baris dari tabel
    baris.remove();

    //memperbarui nomor urut
    updateNomorUrut();
}

function updateNomorUrut() {
    const tabel = document.getElementById('dataTabel');
    let nomor = 1;
    for (const row of tabel.rows) {
        row.cells[0].textContent = nomor++;
    }
}
