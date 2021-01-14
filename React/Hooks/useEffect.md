componetDidMount
componentDidUpdate

the problem is it runs for every update and render 


just revoke the uesEffect whenever the props.persons changed.

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210113115239675.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)



just render once when the page load ,just as like as componentDidMoun

it is said the useEffrect hooks runs anytime the argument in the [] change ,buy here is nothing ,so it will run only once

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210113115501439.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)



### cleanup work 

in class component ,we use componentWillUnmount 

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210113120253370.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)


Time : it runs BEFORE the main useEffect function runs , but AFTER the (first) render cycle!

