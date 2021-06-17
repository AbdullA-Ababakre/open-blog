laod code only we it's needed.


![在这里插入图片描述](https://img-blog.csdnimg.cn/20210616195856117.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)




we are downloading this code only when it's needed.That's the entire idea behind lazy loading.But the problem with that of course, is that this download can take a couple of milliseconds or even seconds maybe. Now, whilst we're downloading this code,React is of course not able to continue, we can't load this component yet .until the download completed.
And that's why we need to define a fallback UI, some fallback content which can be shown
if this download takes a bit longer.And for this, we need to import another thing from React,
we need to import the suspense component. A special component provided by the React library itself.We need to wrap this around the code, where we use React lazy.