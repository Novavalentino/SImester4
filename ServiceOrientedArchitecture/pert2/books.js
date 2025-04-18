const http = require('http');

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Hello World");    
    }else if (req.url === '/books') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Selamat datang di aplikasi informasi buku");
    }else if (req.url === '/books/1') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Buku 1: Laut Bercerita\nPenulis: Lella S.Chudorl");
    }else if (req.url === '/books/2') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Buku 2: The Lord Of The Ring\nPenulis: J.R.R Tolken");

    }else if (req.url === '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>About Me</h1> \n <img src="./OIP.jpeg width="200px"> \n <ul><li>Nama: Valentino</li><li>NPM: 232210015</li></ul>');
    }
    
    else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Halaman tidak ditemukan");
    }
    
});


server.listen(3000, 'localhost', ()=> {
    console.log('server berjalan pada http://localhost:3000/')
});