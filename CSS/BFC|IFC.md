CSS元素会被渲染成一个个盒子，这些盒子在屏幕上的位置的摆放就得根据CSS视觉格式化模型。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200311143247668.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)

不同的盒子使用不同的格式化上下文来布局，每个格式化上下文有不同的渲染规则，决定了其自元素如何摆放，以及与其他元素的相互作用等。

#### 格式化上下文

我们常见的格式化上下文分为两类，一个是块级格式化上下文(BFC,block formatting context),另一个是行内格式化上下文(inline formatting context,IFC)。

#### BFC

当CSS元素的display属性为block,list-item,table,flex,grid等时，它是块级元素。比如div,p,ul,li等元素就是块级元素。

每个块级元素至少会生成一个块级盒，块级盒参与BFC，被渲染成为完整的一个新行。

### 渲染规则

默认的根元素(HTML元素)会创建一个BFC，其块级盒子元素按如下规则进行排列。

- 块级盒会在垂直方向上一个接一个放置，每个盒子水平占满整个容器空间。
- 块级盒子的垂直方向的距离由margin决定，同属于一个BFC中的两个或两个以上的块级盒的相接的margin会重叠。
- BFC是一个独立的容器，里面的子元素不会影响到外面的元素，反正也如此。
- 计算BFC的高度时，浮动元素也会参与其中。

除此之外，还有其他方法也可以创建一个新的BFC，比如flexbox布局和grids布局中的item都会创建一个新的BFC.

### IFC 

当元素的CSS属性display为inline,inline-block,inline-flex或inlie-grid时，它是行内级元素(比如span,image等)。视觉上它将内容与其他行内级元素排列为一行，直到该行被占满然后换行。

行内级元素生成行内级盒，参与行内格式化上下文(inline-formatting context),被渲染为水平排列，直到当行被沾满然后换行。

#### 渲染规则

当块容器盒（block container box）不包括任何块级盒（block-level boxes）时，就会创建一个行内格式化上下文（IFC）。（一般来说一个块级盒也是一个块容器盒，具体可参看：[点击链接](https://www.w3.org/TR/CSS22/visuren.html#block-boxes)

按一下规则进行渲染。

- 盒子一个接一个地水平摆放，当容器的宽度不够时就会换行
- 在水平方向上，这些盒的外边距，边框，内边距所占用的空间都会被计算，但行内盒的垂直的border,padding与margin都不会撑开行盒的高度。

#### 其他格式化上下文

- 表格布局：可以创建一个表格包裹盒(table wrapper box)，包括了表格盒(table box)及任何标题盒(caption boxes)。
- 多列布局：可以在容器盒与内容之间创建列盒(column boxes)
- 弹性布局：将会创建一个弹性容器盒（flex container box）
- 网格布局：将会创建一个网格容器盒（grid container box）
