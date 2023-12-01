const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, '\\js\\sampleEventLogData.json');
    const stat = fs.statSync(filePath);

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow access from any domain


    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Content-Length': stat.size
    });

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});