const mongoose = require("mongoose");

// Membuat variabel baru dengan nama hijabScheme
const hijabScheme = new mongoose.Schema({
  idproduk: {
    type: String,
    required: true,
  },
  namaproduk: {
    // Membuat type dari field nama yang berada di tabel hijab bersifat string
    type: String,
    // maksud dari required adalah ketika data disimpan kedalam database, data tidak boleh kosong
    required: true,
  },
  harga: {
    // Membuat type dari field nama yang berada di tabel hijab bersifat number
    type: Number,
    required: true,
  },
  deskripsi: {
    type: String,
    required: true,
  },
  gambar: {
    type: String,
    required: true,
  },
});

// lalu mengekspor model dari hijab, tujuan mengekspor ini supaya model dari hijab ini bisa digunakan dimana saja
module.exports = mongoose.model("Hijab", hijabScheme);