### Git stash 

stash is a internal memory , save uncommitted, unstaged changes

- git stash
- git stash list 
- git stash apply
- git stash pop
- git stash push -m "with a message"
- git stash pop 0|1 exct  // will pop up the specific index of stash list
- git stash drop 0|1 exct // will drop specific index of stash from the list
- git stash clear  // clear all the stash list

### Git reflog

is a kind of snapshot of every action of our git history ,and it will save up to 40days(..). like , when we use the git reset hard  command ,we lost commit id as well and by using git log we cannot see it .

