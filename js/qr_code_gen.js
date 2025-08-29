document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.qrcode').forEach(function (box) {
    box.innerHTML = '';
    new QRCode(box, {
      text: window.location.href,
      width: 180,
      height: 180,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  });
});


