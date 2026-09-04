const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

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

          req.on("data",chunk=>{
            console.log(chunk);     //jb bhi apke pas ui se post request aye submit details wale url pr aye 
          });                       //yaha listneer hmne rakh diya hai snf jsbhi naya data hm

          const body=[];
          req.on('data',chunk=>{
            console.log(chunk);
            body.push(chunk);
          });

          req.on("end",()=>{    //chunk ane ab bnd ho gye puri request kb agyi
            const fullBody=Buffer.concat(body).toString();
            console.log(fullBody);
          })

    fs.writeFileSync('user.txt', 'Prashant Jain');
    res.statusCode = 302;      //ridirecti on
    res.setHeader('Location', '/');
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Like / Share / Subscribe</h1></body>');
  res.write('</html>');
  res.end();
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});