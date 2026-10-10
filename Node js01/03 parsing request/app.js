const http = require('http');
const requestHandler = require('./user');  //user file ko import kiya is file se userreuest handler milega

const server = http.createServer(requestHandler);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});