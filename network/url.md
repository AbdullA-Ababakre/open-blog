![在这里插入图片描述](https://img-blog.csdnimg.cn/82ae306f07214a7e9b8baaedcd953d1d.png)


- Protocol

determines how the request will be transmitted. Such as Http,https,ftp,file.

- Host

The host identifies the server.Here, example.org is the host.Servers on your computer(localhost) or a local network may be identified simply be one word or by a numeric IP address.

- Port
  
Each server has a collection of numbered ports.Some port numbers are special,like 8080 and 443.

- Path

The path is generally the first part of the URL that your app cares about.The path should be uniquely idetify pages or other resources in your app.Here the path is /foo/bar.

- Querystring

The querystring is an optional collection of name/value pairs .The querystring starts with a question mark.

- Hash
  
  The hash is not passed to the server at all; It is strictly for use by the browser.Some single-page applications use the fragment to control application navigation . Originally ,the hash's sole purpose was to cause the browser to display the specific part of the document ,marked by an anchor tag(for example:<a id="bang">)