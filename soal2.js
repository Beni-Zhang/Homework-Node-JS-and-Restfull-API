const axios = require('axios');
const fs = require('fs');

const githubRawUrl = 'https://gist.githubusercontent.com/RezaNurRochmat13/291dcd64a10ff8c19f6b8b74107c85e2/raw/9d42c4c26ac6f3d783f8ae0b35af8b8d574a54ca/homework.log';

axios.get(githubRawUrl)
  .then((response) => {
    const logData = response.data;

    fs.writeFile('log.txt', logData, (err) => {
      if (err) {
        console.error('Gagal menulis ke file log.txt', err);
      } else {
        console.log('Pesan log berhasil ditambahkan ke file log.txt');
      }
    });
  })
  .catch((error) => {
    console.error('Gagal mengambil data dari GitHub:', error);
  });