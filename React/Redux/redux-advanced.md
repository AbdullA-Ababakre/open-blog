### Advanced

we just learned that reducer is the pure ,side-effect free,synchronous fucntion,but we have to do some side-effects and async tasks. so where we can do these things? 

there are two places we can do it,one is in the component ,we can do side effects in the useEffect function ,then dispatch some actions here.and the other is by action creators.

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210607061054471.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)



### inside the component 

here ,we post the data in the useEffect function , as long as there is a difference in the cart ,dispatch variable ,the useEffect function will be triggered and we can post the data .

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210610191509117.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)

### action creators 

action creators to create so called thunk. 

#### thunk 

thunk is a function that delays an action until later. 

> an action creator fucntion that does NOT return the action itself but another function which eventually returns the action.

