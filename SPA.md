### Tradational Web Application

App is seperated based on the programming language,html file ,css file ,javascript file .
Html is for layout ,css is for styling and javascript is for logic. 

- Multiple Html file
- New server request with each route change 
- Browser Reload on each route change 
- Relatively slower performance

### Single Page Application 

App is seperated baseed on components.Each component is responsible for one main functionality  of the application.Example,addPost.js is only handles submitting a post and editPost.js only handles editing the post.

The server delivers a single HTML bundle when the user first loads the application,and any changes in the UI(which may appear as different pages to the user) are the result of Javascript manipulating the DOM in response to user activity or network events.

SPAs still need to communicate frequently with the server ,but HTML is useally only sent as part of that first request .After that ,only JOSN data and static assets are transferred between the client and server.

The layoput,styling,logic can be contained in the same file with the jsx.

- Single Html file 
- Only 1 server request for initial website loading 
- A new component renders for each route change 
- Browser does not realod with route change 
- Very fast performance 



### SPA  MPA


![在这里插入图片描述](https://img-blog.csdnimg.cn/20210104144519621.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)



### MPA



### The comparison


https://docs.astro.build/en/concepts/mpa-vs-spa/

