const http = require('http');
const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'dist/forkify-app')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/forkify-app/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('running'));

// node app.js
