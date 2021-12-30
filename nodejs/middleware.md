### middleware

middleware is a way to encapsulate functionality - specifically ,functionality that operates on an HTTP request to your application.
middleware is simply a function that takes three arguments: a request object,a response object ,and a next() function.

Middleware is executed in what's known as a pipeline ,which means opders matters.In an express app,you insert middleware by calling app.use.

next() decides whether terminate the request in the pipeline. If you do not call next(),the request terminates with that middleware.

if you do call next() ,it is generally inadvisible to send a response to the client . If you do ,middleware or route handles further down the pipeline will be execured,but any client response they send will be ignored.

