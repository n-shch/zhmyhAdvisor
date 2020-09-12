const fs = require('fs');
const http = require('http');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log('requested',req.url);

    const path = `.${req.url == '/' ? '/index.html' : req.url}`;
    let file;
    
    fs.readFile(path, (err, file) => {
        if (err) {
            console.log('file read error ', path, err);
            res.write('error');
            res.end();
            return;
        }
        console.log('file read ', path);

        res.write(file);
        res.end();  
    });
    console.log('after read file');
});


console.log('started');
server.listen(3000); // блокирующая операция, тут стопорится , дальше ничего не идет

// __dirname - директория 