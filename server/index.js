const fs = require('fs');
const http = require('http');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log('requested',req.url);
    const filePath = path.join(__dirname, '..', 'index.html');
    const file = fs.readFileSync(filePath);
    res.write(file);
    res.end();
});


console.log('started');
server.listen(3000); // блокирующая операция, тут стопорится , дальше ничего не идет