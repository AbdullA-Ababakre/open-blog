## what is nodeJs

nodeJs is the javascript runtime . It allows you to write javascript not only in browser.

Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm,[6] unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.

## why nodeJs

- fast

nodeJs is fast , the main reason is, nodeJs asynchronous .

Php and ASP handles the first request ,after finish the first request ,then handle the second request . when the server is opening the file + sending the response ,have to wait ,but nodeJs is different.When finish the first requst request process, it will ready to handle the next request.

- memory efficient

nodeJs runs single thread ,non-blocking ,asynchronous programming , whichi is moemory efficient.

## NodeJs modules

nodeJs modules is the same as the javascript library ,which can be considered as a set of functions included in your application.There are main three sources, one is built-in modules ,another is npm(a package managing tool),other is self-write modules.

### built-in modules

- http

  > allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).

- file
  > allows you to work with the file system on your computer.
- url
  > The URL module splits up a web address into readable parts.

### npm modules

> https://www.npmjs.com/ hosts thousands of free packages to download and use.

let's first write a server demo .

```

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

```

we can see that in the localhost:3001 , there is the h1 text 'My First Page '

### express

express is a fast, unopinionated, minimalist web framework for Node.js.

- minimal

the express philosophy is to provide the minimal layer between your brain and the server . express provides a minimal framework,and you can add in different parts of express functionality as needed.

- flexible
  the basic pattern of the express is accept a request from a client and returns an http response.

- web application framework

server side part of web appplication framework which different from the single page application framework like react,vue ,angular etc.

    - server side application 
      pages in the application are rendered on the server (as HTML,CSS,images and other multimedia assets,and Javascript) and sent to the client.
    
    - client side application
      by contrast,renders most of the application user interface from an initial application bundle that is sent only once.that is ,the browser receives the initial html ,it uses the javascript to modify the DOM dynamically and doesn/t need to rely on the server to display new pages.

      The only difference is whether the page is shipped from the server or dynamically rendered in the client.

  



  