const fs = require('fs');

const userRequestHandler = (req, res) => {
  // console.log(req.url, req.method);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Enter Your Details:</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
    res.write('<label for="male">Male</label>')
    res.write('<input type="radio" id="male" name="gender" value="male" />')
    res.write('<label for="female">Female</label>')
    res.write('<input type="radio" id="female" name="gender" value="female" />')
    res.write('<br><input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();

  } else if (req.url.toLowerCase() === "/submit-details" &&
        req.method == "POST") {
    
    const body = [];      
    req.on('data', chunk => {
      console.log(chunk);               
      body.push(chunk);    //stream of chunk ko 1 jagah la rahe hai that is body me
    });
    req.on('end', () => {         // jab chunks ana khtm ho gye
      const fullBody = Buffer.concat(body).toString();      //boddy ko buffer me dal diya string me krke
      console.log(fullBody);
      const params = new URLSearchParams(fullBody);                //usme se paramter extract kr liye like username , gender ..
      // const bodyObject = {};
      // for (const [key, val] of params.entries()) {
      //   bodyObject[key] = val;
      // }
      const bodyObject = Object.fromEntries(params);       //objetc  me le liya 
      console.log(bodyObject);
      fs.writeFileSync('user.txt', JSON.stringify(bodyObject));      //uske baad dynamicslly file me write kr diya json ko string me convetr krke
    });

    res.statusCode = 302;
    res.setHeader('Location', '/');
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Like / Share / Subscribe</h1></body>');
  res.write('</html>');
  res.end();
};

module.exports = userRequestHandler;     //mere module se request requesthandler export kr dijiye