const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Set the content type to HTML
    res.setHeader('Content-Type', 'text/html');

    // Read the index.html file
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        if (err) {
            // Handle error if the file cannot be read
            res.statusCode = 500;
            res.end('Internal Server Error');
        } else {
            // Send the contents of index.html as the response
            res.statusCode = 200;
            res.end(data);
        }
    });
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); // listen on port http://localhost:3000