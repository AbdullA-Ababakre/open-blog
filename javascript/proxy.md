# javascript proxy : clear explanation and pratical examples 

## What is proxy

Proxy enalbes us to intercept and customize operations performed on objects (such as getting ,setting properties). They are metaprogramming feature.


> metaProgramming:
> > Metaprogramming is writing a program which outputs another program , which enables one to intercept and define custome behavior for fundamental language operations(e.g. property lookup, assignment, enumeration, function invocation, etc). 



## The basic syntax


> let proxy = new Proxy(target,handler)

- target: is an object to wrap , can be anything ,including functions
- handler: proxy configuration: an object with "traps", method that intercept operations. -e.g. get trap for reading property of target,set trap for writing a property into target,and so on .

for operations on proxy, if there's a corresponding trap in handler , then it runs ,and the proxy has the chance to handle it , otherwise the operation is performed on target.

At first , let's create a proxy without any traps:

````
let target = {};

let proxy = new Proxy(target,{}); // empty handler

proxy.test = 5;

console.log(target.test) // 5
console.log(proxy.test)  //5
````

As there are no traps , all operations on proxy are forwarded to target.

1.A writing operation proxy.test = sets the value on target.

2.A reading operation proxy.test returns the value from target .

Proxy is a special “exotic object”. It doesn’t have own properties. With an empty handler it transparently forwards operations to target.

To activate more capabilities , let's add traps. For most operations on object , there's a so-called 'internal method' in the javascript specification that describes how it works at the lowest level . For instance [[GET]], the internal method to read propery , [[SET]] , the internal method to write a property, and so on .

Proxy traps intercept invocations of these methods. They are listed in the below picture .

For every internal method, there's a trap in this table : the name of the method that we can add to the handler parameter of new Proxy to intercept the operation :

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210718073120228.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)


### GET 

The most common trap for reading the propery . The handler should have a method get(taregt,property,receiver)

- target: the target object , the one passed as the first argument to new Proxy.
- property : property name
- receiver : optional , the proxy object itslef .

below , is a demo example . Usually if we try to get the non-existing array item , it returns undefined , but we will wrap a regular array into the proxy that traps reading and returns 0 if there's no such property .

````
let arr =[1,2,3,4];

let arr = new Proxy(arr,{
    get(target,prop){
       if(prop in target){
           return target[prop]
       }else{
           return 0;
       }
    }
})

let res1 = arr[0];
let res100 = arr[100];

console.log(res1);  //1

console.log(res100);  //0
````

### SET 

The most common trap for writing the property . THe handler should have a method set(target,property,value,receiver)

- target: the target object , the one passed as the first argument to new Proxy.
- property: property name.
- value: the value that we want to assign to the property.
- receiver: optional,the proxy object itslef .


````
let validator = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('The age is not an integer');
      }
      if (value > 200) {
        throw new RangeError('The age seems invalid');
      }
    }

    // if valid,assign the vlaue to the property
    obj[prop] = value;
    return true;
  }
};

let person = new Proxy({}, validator);

person.age = 100;

person.age // 100
person.age = 'young' // error
person.age = 300 // error
````


Those aboe are the most comomen ones and for more you can visit [MDN DOCS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)


## Reference

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

[Javascript INFO](https://javascript.info/proxy)

[Proxy](https://es6.ruanyifeng.com/#docs/proxy#Proxy-%E5%AE%9E%E4%BE%8B%E7%9A%84%E6%96%B9%E6%B3%95)
