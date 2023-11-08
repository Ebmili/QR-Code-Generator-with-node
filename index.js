const qrcode = require('qrcode');
const fs = require('fs');

const dataToEncode = 'https://example.com'; 

qrcode.toFile(
  'qrcode.png',  
  dataToEncode,
  {
    color: {
      dark: '#000',  
      light: '#fff'  
    }
  },
  (err) => {
    if (err) throw err;
    console.log('QR code generated successfully');
  }
);

