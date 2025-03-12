export default (req,res) => {
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
    }else if (req.url === 'books/2') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Buku 2: The Lord Of The Ring\nPenulis: J.R.R Tolken");
    }else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Halaman tidak ditemukan");
    }
    
}