const Hijab = require("../models/Hijab");

module.exports = {
  // Metode untuk menampilkan data hijab
  viewHijab: async (req, res) => {
    try {
      const hijabData = await Hijab.find();
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus };
      res.render("index", {
        hijab: hijabData,
        alert,
        title: "CRUD",
      });
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/hijab");
    }
  },

  // Metode untuk menambahkan data hijab
  addHijab: async (req, res) => {
    try {
      const { idproduk, namaproduk, harga, deskripsi, gambar } = req.body;
      await Hijab.create({ idproduk, namaproduk, harga, deskripsi, gambar });
      req.flash("alertMessage", "Berhasil menambahkan data hijab.");
      req.flash("alertStatus", "success");
      res.redirect("/hijab");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/hijab");
    }
  },

  // Metode untuk mengedit data hijab
  editHijab: async (req, res) => {
    try {
      const { id, idproduk, namaproduk, harga, deskripsi, gambar } = req.body;
      const hijab = await Hijab.findOne({ _id: id });

      hijab.id = id;
      hijab.idproduk = idproduk;
      hijab.namaproduk = namaproduk;
      hijab.harga = harga;
      hijab.deskripsi = deskripsi;
      hijab.gambar = gambar;
      await hijab.save();
      req.flash("alertMessage", "Berhasil mengedit data hijab.");
      req.flash("alertStatus", "success");
      res.redirect("/hijab");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/hijab");
    }
  },
  // Metode untuk menghapus data hijab
  // Tambahkan metode untuk menghapus data hijab di sini
  // Membuat delete data untuk mahasiswa
  deleteHijab: async (req, res) => {
    try {
      /*
  Membuat variabel yang menerima id yang didapat dari params
  id didapat database dan id isinya dari params
  */
      const { id } = req.params;
      // cek data Mahasiswa yang mau di delete berdasarkan id
      const hijab = await Hijab.findOne({ _id: id });
      // setelah datanya sudah didapat maka menghapusnya
      await hijab.deleteOne();
      // ketika delete data memberikan notifikasi
      req.flash("alertMessage", "Success delete data hijab");
      req.flash("alertStatus", "warning");
      // setelah berhasil remove maka melakukan redirect
      res.redirect("/hijab");
    } catch (error) {
      // ketika create data error memberikan notifikasi
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      // ketika inputa kosong redirect kehalaman
      res.redirect("/hijab");
    }
  },
  viewHijabDetail: async (req, res) => {
    try {
      const { id } = req.params;
      const hijab = await Hijab.findOne({ _id: id });

      // Render view detail hijab dan pass data hijab
      res.render("detail", {
        hijab,
        title: "Detail Hijab",
      });
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/hijab");
    }
  },
};


