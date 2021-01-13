click={()=>this.deletePersonHandler(index)}
click = {this.deletePersonHandler}
changed ={(event)=>this.nameChangedHandler(event,person.id)}

click={ this.deletePersonHandler.bind(this,index)}


## Class component 

#### 1.)arrow method 

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210112165427136.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)

#### 2.) regular function 

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210112165914984.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)


### passing arguments 

#### 1.) Make an anonymous arrow function:

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210112170319535.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)

#### 2.)bind the event handler to this 

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210112170516422.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)


### React event object 

- with the arrow function,we have to pass the event object **manually** 
- with the regular function,the event object was sent **automatically**

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210112170847519.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)


![在这里插入图片描述](https://img-blog.csdnimg.cn/20210112170930835.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)










