本文章是总结性的文章，非从0开始的教程，如果想系统性的学习，可以在这里学习[猴子都能懂的Git入门](https://backlog.com/git-tutorial/cn/)

### Git
Git是分布式的版本控制工具,简单来说是为了在能够任何时间点保存(take a snapshot 拍快照)我们代码的更新记录,因此让我们能够复原任何时候的历史记录并且显示编辑前后的历史差异(就像给自己的从小到大的经历拍照，可以知道自己的成长...并且让他人知道成长(变化)，这个在团队协作中尤为重要)

### 组成部分

#### 数据库(存储文件+内容修改的历史数据)

- 远程数据库

> 配有专门的服务器,为了多人的共享而建立

- 本地数据库

> 为了方便开发，在本地建立的数据库

- working tree(工作树)

> 实际写代码的地方

- index(索引)

> 数据库和工作树之间，是为了向数据库提交做准备的区域

**通过索引这一个地方，我们可以实现工作树和数据库的不同，也就是选择性的把工作树中的内容提交到索引，进而提交到数据库**

以下是为了更加行动形象给了一些操作的图：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200923070122422.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70#pic_center)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200923072239798.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70#pic_center)


![在这里插入图片描述](https://img-blog.csdnimg.cn/20200923072402656.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70#pic_center)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200923181432801.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70#pic_center)


### Git在VScode中的使用


#### 初始化Git仓库

可以用git init,但也可以用以下方式，如图所示:

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200923172211974.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70#pic_center)


#### 查看分支 

可以用git branch 命令，也可以用如下的方式:
在VScode左下角可以看到分支名称，最初建立是master分支

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200923172520259.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70#pic_center)


当点击master的时候，可以执行两个操作:


![在这里插入图片描述](https://img-blog.csdnimg.cn/20200923172659318.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70#pic_center)


#### 往index里添加文件


我们第一步，建立readme.md文件，我们可以看到会有如下的几个操作：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200923173158492.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70#pic_center)

第二步，当我们点击+，也就是往index,索引里添加的时候，该文件会在Staged changes目录里出现，也就是在index里.

第三部：commit文件，也就是把文件从索引区添加到本地数据库.
可以在输入框里输入commit提示，然后点击最上面的对勾即可.


![在这里插入图片描述](https://img-blog.csdnimg.cn/2020092317360069.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70#pic_center)


我们可以通过查看提交记录来确认是否提交成功,可以 命令行输入 git log,也可以在 vscode timeline里查看


![在这里插入图片描述](https://img-blog.csdnimg.cn/20200923174026400.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70#pic_center)


#### 如何推到远程分支

- 建立远程仓库，可以在github,gitlab建立仓库
- 添加远程数据库
- 推到远程数据库

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200923175035912.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70#pic_center)

我们复制相应的命令即可,操作完以后可以查看是否连接完成.

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200923175333160.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70#pic_center)


#### 如何从远程数据库pull

首先，我们在远程数据库里修改刚上传的文件，然后我们拉过来.

![在这里插入图片描述](https://img-blog.csdnimg.cn/2020092317571561.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70#pic_center)
本地文件如下：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200923175733588.png#pic_center)

可以看到本地和远程是不同的，因此我们得从远程拉过来代码.

我们可以执行git pull命令，也可以在vscode里操作.


![在这里插入图片描述](https://img-blog.csdnimg.cn/20200923175950658.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70#pic_center)

#### 建立一个本地分支并且发布到远程

当我们点击master的时候会有两个选择弹出，我们可以给个新分支的名称然后轻松建立分支.

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200923172520259.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70#pic_center)

新建立的分支在最底部的左下角可以看到

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200923180612230.png#pic_center)

然后点击分支名称右边的云符号的时候可以发布到远程，并且同步.

如果我们想要通过命令行来执行以上操作的话需要以下操作:

- git branch <新的分支名称>
- git checkout <分支名称>
- git push --set-upstream origin <远程的分支名称>

因此可以看到在vscode里操作比写命令要容易的多，因此逐渐习惯用vscode吧.


