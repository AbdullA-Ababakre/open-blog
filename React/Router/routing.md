### Defenition 

Routing is about being able to show the different pages to the user.


### 使用方法

1.）引入BrowserRouter

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210131152822687.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)

2.)引入Route，并且包裹所使用组件

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210131153009363.png)


![在这里插入图片描述](https://img-blog.csdnimg.cn/20210131153556156.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)


This is our a tag and we use it to jump to the place we want ,but in this useage,it will cause rerender of the whole page and lost all the state that is in use.

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210131154141265.png)

So,we use the link tag to prevent the rerender.

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210131154811607.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210131154831915.png)


### Get the routing detail informations

in the compontDidMount , we can console out the routing props.

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210131160435994.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)


![在这里插入图片描述](https://img-blog.csdnimg.cn/20210131160500466.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)


but if we want to see the routing props in the Post component,which is the child component of the Posts component,we have two ways to do it(routing props do not transfer through component tree )

- send through props

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210131160846236.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)


- use WithRouter HOC

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210131160958335.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210131161027876.png)


### Absolute vs Relative Paths

#### Absolute path

By default, if you just enter to="/some-path"  or to="some-path" , that's an absolute path. 

Absolute path means that it's always appended right after your domain. Therefore, both syntaxes (with and without leading slash) lead to example.com/some-path .

#### Relative Paths

Sometimes, you might want to create a relative path instead. This is especially useful, if your component is already loaded given a specific path (e.g. posts ) and you then want to append something to that existing path (so that you, for example, get /posts/new ).

If you're on a component loaded via /posts , to="new"  would lead to example.com/new , NOT example.com/posts/new . 

To change this behavior, you have to find out which path you're on and add the new fragment to that existing path. You can do that with the url  property of props.match :

<Link to={props.match.url + '/new'}>  will lead to example.com/posts/new  when placing this link in a component loaded on /posts . If you'd use the same <Link>  in a component loaded via /all-posts , the link would point to /all-posts/new .


### Styling the active route 

when we use the Link tag ,there is no active styling.

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210201143027761.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)

but we can solve this issue by using NavLink tag .

![在这里插入图片描述](https://img-blog.csdnimg.cn/2021020114380088.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)

another solving solution is to use the activeClassName property,

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210201144157426.png)


### jump to certain page after one operation

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202101443632.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)



### Nested Routes





