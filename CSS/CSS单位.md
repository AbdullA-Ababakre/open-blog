
我们对单位很熟悉，比如说，千克，千米，米等，这些就是绝对单位，我们又有听到太阳的质量等于33个地球，这个就是相对单位。在CSS中，单位也可以分为这两类。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201231195005178.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201231195034898.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)

 在第一个box里，整个宽度为600px,宽度为300px的和宽度为50%为等长。

在第二个box里,300px的小框跟上面的框的300px一样长，而第二个框里面的50%跟第一个框的50%为不一样，这个就很好的解释了相对单位和绝对单位。

### px

px 是 pixels（像素）的缩写，是一种绝对单位，用于屏幕显示器上，传统上一个像素对应于计算机屏幕上的一个点，而对于高清屏则对应更多。任何现代显示屏，不管是手机，平板，笔记本还是电视都是由成千上万的像素组成的，所以我们可以使用这些像素来定义长度。

另外 CSS 将光栅图像(如照片等)的显示方式定义为默认每一个图像大小为“1px”。 一个“600x400”解析度的照片的长宽分别为“600px”以及“400px”，所以照片本身的像素并不会与显示装置像素(可能非常小)一致，而是与 px 单位一致。如此就可以将图像完整的与网页的其它元素排列起来。

### %

%（百分比）应该是我们最好理解的单位了，这里就不多解释了，主要有一点需要注意：

如果对 html 元素设置 font-size 为百分比值，则是以浏览器默认的字体大小16px为参照计算的（所有浏览器的默认字体大小都为 16px），如62.5%即等于10px（62.5% * 16px = 10px）。

### em
em 也是一种相对单位，既然是相对单位，那么肯定有一个参照值。不过其参照值并不是固定不变的，而是不同的属性有不同的参照值。

### font-size

对于字体大小属性（font-size）来说，em 的计算方式是相对于父元素的字体大小，1em 等于父元素设置的字体大小。如果父元素没有设置字体大小，则继续往父级元素查找，直到有设置大小的，如果都没有设置大小，则使用浏览器默认的字体大小。

下面我们举几个简单的例子说明下：

​​![在这里插入图片描述](https://img-blog.csdnimg.cn/20201231195214907.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)

### 其他属性（border, width, height, padding, margin, line-height）

在这些属性中，使用em单位的计算方式是参照该元素的 font-size，1em 等于该元素设置的字体大小。同理如果该元素没有设置，则一直向父级元素查找，直到找到，如果都没有设置大小，则使用浏览器默认的字体大小。

下面我们举几个简单的例子说明下：

![在这里插入图片描述](https://img-blog.csdnimg.cn/2020123119530511.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)

总之em的计算单位相对来说比较复杂，现在已经不建议使用，如果你要兼容的浏览器是现代浏览器的话，那么可以使用下面要介绍的 rem 单位。

### rem

和 em 一样，rem 也是一种相对单位，不过不一样的是 rem 是相对于根元素 html 的 font-size 来计算的，所以其参照物是固定的。（rem的r就是表示root，虽然rem相对em进步了很多，但是由于是新技术，不支持IE8以下（包括IE8）,不过幸喜的是移动端可以放心使用）

由于 rem 是基于跟元素 html 的 font-size 来计算的，所以如果改变 html 的 font-size 值，那么所有使用的 rem 单位的大小都会随着改变，这对于移动端适应各种屏幕大小来说还是有点作用的。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201231195353856.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)


如果我们改变了 html 的 font-size 值，如设置为 80px，则相应的我们的 div 的 width，height 和padding 大小也随着改变了。

相对于 em 来说，rem 只需要修改 html 的 font-size 值即可达到全部的修改，即所谓的牵一发而动全身。


### vw, vh, vmin, vmax

最后要介绍的这四个单位属于 v 系单位，它们也是相对单位，是基于视窗大小（浏览器用来显示内容的区域大小）来计算的。

网页中我们很多时候都需要用到满屏，或者屏幕大小的一半等，尤其是移动端，屏幕大小各式各样，而这个时候我们现有的单位就显得有点捉襟见肘，于是就诞生了这四个单位。

- vw：基于视窗的宽度计算，1vw 等于视窗宽度的百分之一
- vh：基于视窗的高度计算，1vh 等于视窗高度的百分之一
- vmin：基于vw和vh中的最小值来计算，1vmin 等于最小值的百分之一
- vmax：基于vw和vh中的最大值来计算，1vmax 等于最大值的百分之一
下面我们实例说明实现一个宽度为视窗宽度的 25%，高度为视窗高度 50% 的一个盒子：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201231195444705.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)


同样由于是新技术，还是有些浏览器不兼容，哪怕在移动端安卓4.3 以下也是不兼容，不过长远来说这也是必备的。

### 单位运算

除了设置以上的单位之外，我们还可以使用 calc 来进行单位运算，单位运算时可以使用各种单位进行加减乘除运算。

简单示例如下：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201231195519413.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)

注：chrome 浏览器最小的字体为 12px，如果设置 10px 也会渲染成 12px.






