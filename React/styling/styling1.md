### conditional & dynamic styles


#### **dynamic styles with inline styling**

control the styling with the state and terneray operation.

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210430072909289.png)


but one of its con is that inline styling's priority is too hight,which will cause some problems.

#### **dynamic styles with class**


![在这里插入图片描述](https://img-blog.csdnimg.cn/20210430095617625.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210430095754218.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)




### CSS  Modules$$

when we write css code in react project,we have different components and each component includes one jsx file and one css file ,and the problem is css file is not scoped . *`it is global`* ,which has a huge potention of causing problems.


https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/

