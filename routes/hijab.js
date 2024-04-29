// membuat variable router dengan require atau export variabel express
// Dan menggunakan metode Router
const router = require("express").Router();
// export controller yang ingin dipakai
const hijabController = require("../controllers/hijabController");

// endpoint hijab
router.get("/", hijabController.viewHijab); // Untuk view
router.post("/", hijabController.addHijab); // untuk menambah produk
router.put("/", hijabController.editHijab); // untuk edit
router.delete("/:id", hijabController.deleteHijab); // untuk delete
router.get("/:id", hijabController.viewHijabDetail); // Route untuk view detail hijab



// Lalu export routernya
module.exports = router;