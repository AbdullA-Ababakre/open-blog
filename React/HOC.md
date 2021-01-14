HOC  simply means high order component,which receives a component and return a component.it wraps another component and simply add some trta html structure or  styling or logic .

### one form of HOC 

![在这里插入图片描述](https://img-blog.csdnimg.cn/2021011408410830.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)


![在这里插入图片描述](https://img-blog.csdnimg.cn/20210114084730864.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)


here,withClass is a high order component,it receives another components then adds div wrapper to them . 

### function form

accepts a component as an argument and then return a new component .

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210114091716560.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)


How to use it 

![在这里插入图片描述](https://img-blog.csdnimg.cn/2021011409135320.png)

