## what is nodeJs

nodeJs is the javascript runtime . It allows you to write javascript not only in browser.


Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm,[6] unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.


let's first write a server demo .

````

// require the http module 
const http = require('http');

// created the server 
const server=http.createServer((req,res)=>{
   res.setHeader('Content-Type','text/html');
   res.write('<html>');
   res.write('<head><title>My First Page</title></head>');
   res.write('<body><h1>hello from my Node.js Server!</h1></body>');
   res.write('</html>');
   res.end();
})

// the port that we can listen to .
server.listen(3001);

````

we can see that in the localhost:3001 , there is the h1 text 'My First Page '