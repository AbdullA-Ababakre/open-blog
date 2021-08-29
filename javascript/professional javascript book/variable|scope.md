### data type

### copying values

#### value

![在这里插入图片描述](https://img-blog.csdnimg.cn/c1ca8f8e631f49be8f9639c62cb70d6d.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)

#### reference

![在这里插入图片描述](https://img-blog.csdnimg.cn/195f9291cc3d414ba4a3de7d212cb001.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)

### passing arguments

All function arguments in ECMAScript are passed by value.And it is the same as copying a value.

````
function addTen(num) { num += 10;
return num;
}
let count = 20;
let result = addTen(count); 
console.log(count); // 20 - no change 
console.log(result); // 30
````

````
function setName(obj) { 
    obj.name = "Nicholas";
}
let person = new Object(); setName(person); 
console.log(person.name); // "Nicholas"
````

### Garbage collection

