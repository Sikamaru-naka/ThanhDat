var string = { qrImageAlt: 'scan QRcode' };
document.addEventListener('DOMContentLoaded', function() {
 new QRCode( document.querySelector('.gift-card__qr-code'), {
  text: document.querySelector('.gift-card__qr-code').dataset.identifier,
  width: 120,
  height: 120,
  imageAltText: string.qrImageAlt
  });
});