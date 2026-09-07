// Practice Set:

// Create a new NodeJS project.
// Create a request handler for routing.
// On the root page (/), show a welcome message and a link to the calculator page.
// On the /calculator page, display a form with two input fields and a "Sum" button.
// Create a separate request handler module for calculations.
// On the /calculate-result page, parse the user input, use the addition module to calculate the sum, and display the result on a new HTML page.



const http = require('http');
const { requestHandler } = require('./handler');

const server = http.createServer(requestHandler);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
})


