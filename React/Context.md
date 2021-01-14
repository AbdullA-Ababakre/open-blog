Context is introduced  by react to handle cases like this.
when you need some data ,some certain state,but you do not want to pass through multiple layers of  components just to get it from A at the top to component D at the  very bottom where components B and C between do not really care about it.

you can say context is globally availabe(u decide where you use) object.Technically,it doesn't have to be an object.You could aslo have an array,a string ,a number etc. as a context value;

#### context.provider 
value props


##### First version 

/Context/auth-context.js

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210114173103620.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)


./app.js

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210114173217263.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)

./person.js

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210114173306873.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)



./cockpit.js


![在这里插入图片描述](https://img-blog.csdnimg.cn/20210114173345324.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)


#### The easier way 

in class

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210114173753810.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)


![在这里插入图片描述](https://img-blog.csdnimg.cn/2021011417390182.png)



![在这里插入图片描述](https://img-blog.csdnimg.cn/20210114174302244.png)


![在这里插入图片描述](https://img-blog.csdnimg.cn/20210114174330872.png)




static contextType is for class components and useContext is for function component.