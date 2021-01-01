CSS的position属性定义一个元素如何在页面摆放，有如下值，以下一个个探讨。

#### 1.static

static 是默认值，该值情况下元素会按原来的方式摆放.

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200214090804480.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)
可以看到position:static不会对元素产生任何影响，浏览器会忽略以下样式。
````
position:static;
left:10px;
top:100px;
````

#### 2.relative

relative这个词汇本身有相对的意思，这个相对指的是相对于原来的本有的位置而说的。

以下是一个没有任何position修饰的一个box的样式，并且展示效果，可以看到是紧跟着大的box的左上角的.

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200214091249993.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)

但当我们给position:relative;并且left:10px的时候看以下效果.
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200214091458984.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)

可以看到想有移动了10px距离。
当我们给了top:100px的时候看到以下效果，也就是相对于自己原来的位置向下移动了100px;

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200214091636407.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)

##### 3.absolute

以下是在MDN对absolute的定义的一句话.
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020021409291560.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)
被定义为相对的元素会保留在原来的摆放流中，但被absolute修饰的元素会被摆放流中去掉，其他的元素会替代它的位置，看以下的示例.
原来的状态，position为absolute.

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200214093138704.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)
当我们把position变为absolute的时候黄色box的位置发生了彻底的变化，并且右边的蓝色box会替代黄色box的位置，被修饰的黄色box被正常流中去掉.

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200214093347610.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)
被absolute修饰的元素会相对于最近的非static修饰的元素修饰，如果父亲元素不存在，将会相对于ICB(initial containing block-最原始的包裹的元素),也就是相对于body来定位.

##### 4.Fixed

fixed本身的意思是固定的，是相对与所看到的页面(viewport)，也就是浏览器页面固定,比如我们想要做一个不管我们如何都要固定站在一个位置的比如客服联系我们的东西就可以用这个属性.
比如以下为例，不管我们如何scroll，页面内容，可以看到那个one的box会一直保留在浏览器页面top:80px;left;10px;的地方。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200214145146143.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)
以下可以看到腾讯课堂的联系我们的BOX,可以看到它就用的是position:fixed,不管如何滚动页面，始终可以看到那个box始终站在离bottom:50px，right:20px的地方。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200214145625260.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)

##### 5.sticky

被修饰的元素会相对用户的滚动来定位，会在fixed和relative之间轮流，取决于滚动的位置。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200214152130917.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)

[演示地址](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_position_sticky)

[参考网站](https://www.w3schools.com/cssref/pr_class_position.asp)
