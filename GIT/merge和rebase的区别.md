首先，这两位都用于分支合并，其最大的区别是用rebase的时候的commit 日志比merge清晰很多。
用两个图来看一下分别使用这两个命令的时候的日志不同.


#### rebase 命令的合并日志

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210421151918582.png)


#### merge 命令的合并日志


![在这里插入图片描述](https://img-blog.csdnimg.cn/20210421151927446.png)

可以清楚的看到，使用rebase命令会清晰很多。


### 例子演示

#### 建立两个分支并进行相应的提交


1.)建立两个分支

````
git branch issue2      // created a branch called issue2
git branch issue3      // created a branch called issue3
````

目前有3个分支，master,issue2,issue3，并且其指针如图所示。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210421153523130.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)


2.) 切换到issue2

````
git checkout issue2
````

3.)修改文件

在随便一个文件，这里举例在readMe.md里，添加这一句话，相当于issue2分支比master变化了一句

commit 记录索引的状态

4.)在issu2里提交更改

````
git add myfile.txt

git commit -m "添加commit的说明"
````

目前指针情况如下：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210421154109886.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)


5.)切换到issue3

````
git checkout issue3

````

6.)在issue3里做一些修改

在随便一个文件，这里举例在readMe.md里，添加这一句话，相当于issue3分支比master变化了一句

pull 取得远端数据库的内容

7.）提交issue3更改

````
git add .
git commit -m "添加pull的说明"
````

目前指针如下：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210421154402909.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)


### 用merge合并

把issue2分支和issue3分支合并到master分支

1.）合并issue2

先切换到master分支，然后把issue2分支给merge进来

````
git checkout master     // switched to master branch
git merge issue2        // merge issue2 to master branch
````

目前的指针如下：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210421155037406.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)


3.)合并issue3

````
git merge issue3
````

自动合并失败，则进行手动解决冲突，修改完内容后，重新提交。

4.)重新提交

````
git add .
git commit -m "合并issue3分支"
````

历史记录如下图所示。因为在这次合并中修改了冲突部分，所以会重新创建合并修改的提交记录。这样，master的HEAD就移动到这里了。这种合并不是fast-forward合并，而是non fast-forward合并。

指针如下：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210421161747387.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)



### 用rebase进行合并

0.)取消刚才的合并

````
git reset --hard HEAD~
````


1.)切换到issue3,并对master进行rebase

````
git checkout issue3      // 切换到issue3
git rebase master        // rebase到master
````

2.)解决冲突

3.)提交

rebase的时候，修改冲突后的提交不是使用commit命令，而是执行rebase命令指定 --continue选项。若要取消rebase，指定 --abort选项。

````
git add .
git rebase --continue
````

目前的指针情况如下：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210421162431307.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)


4.)合并issue3

这样，在master分支的issue3分支就可以fast-forward合并了。切换到master分支后执行合并。

````
git checkout master   //切换到master分支
git merge issue3      // 把issue3合并到master
````

指针如下：

![在这里插入图片描述](https://img-blog.csdnimg.cn/2021042116264055.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)


可以看到这两种提交方式的历史记录会很大的不同。