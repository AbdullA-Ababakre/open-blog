[Linear gradient](https://www.w3schools.com/css/css3_gradients.asp)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201231200053882.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)


````
  hr{
    background: linear-gradient(to right,blue 18%,#999 18%,#f5f5f5);
    height:3px;
````


而且一个比较头痛的是刚开始的蓝色的部分不是逐渐变化的,引入了3个颜色，并且设置了颜色变化的区域，blue会在18%的时候就会停止，而#999就会在18%到19%这个范围内，而后面就是#f5f5f5的效果了。

 

