function kirim() {
  var penerima = document.getElementById("footer-penerima").value;
  var pesan = document.getElementById("footer-pesan").value;
  var nama = document.getElementById("footer-nama").value;
  var pesanfinal = "Halo, nama saya: " + nama + "\nPesan: " + pesan;
  var wa_eka = "http://wa.me/+6281901242626?text=";
  var wa_clay = "http://wa.me/+6285174078350?text=";
  var wa_daniel = "http://wa.me/+6281380214250?text=";

  if (pesan.length < 10 || nama.length < 4) {
    alert("Nama atau pesan tidak boleh ngasal!");
  } else {
    if (penerima == "eka") {
      window.open(wa_eka + encodeURIComponent(pesanfinal));
    } else if (penerima == "clay") {
      window.open(wa_clay + encodeURIComponent(pesanfinal));
    } else {
      window.open(wa_daniel + encodeURIComponent(pesanfinal));
    }
  }
}
