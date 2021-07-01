## What is it 

Context is introduced  by react to handle cases like this . When you need some data ,some certain state,but you do not want to pass through multiple layers of  components just to get it from A at the top to component D at the  very bottom where components B and C between do not really care about it. 

you can say context is globally availabe(u decide where you use) object.Technically,it doesn't have to be an object.You could aslo have an array,a string ,a number etc. as a context value;


## How to use it 

below, I wil use a simple demo project to show how to use it . This is just a simple website where one can see the products and see the favorites that he choose . There are the data , favorite products , we can pass it through props , or we can just use context to store it somewhere then pick it up when we need it . here , we choose the context way . 


![在这里插入图片描述](https://img-blog.csdnimg.cn/2021062800165050.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)


### STEP ONE : Initialize the Context

before , we create a folder called store and then a file calld products-context file in it .

then , we need to use createContext api . When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider(will explain below) above it in the tree.

````
export const ProductsContext = React.createContext({
    products: [],
    toggleFav: (id) => { }
})
````

### STEP TWO : Create the provider 

Once that’s done, we can create our provider . Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.

The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree. All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes.

in the example below , We wrap the whole App(the props is whe whole app) with Context provider and then we initialized the value with the productsList state along with a couple of methods that manipulate the state .


![在这里插入图片描述](https://img-blog.csdnimg.cn/20210628003928342.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)


To make the provider accessible to other components, we need to wrap our app with it (yes, just like in Redux).

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210628004722131.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)

### STEP THREE: Create the consumer 

> const value = useContext(MyContext);

Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.

When the nearest <MyContext.Provider> above the component updates, this Hook will trigger a rerender with the latest context value passed to that MyContext provider. Even if an ancestor uses React.memo or shouldComponentUpdate, a rerender will still happen starting at the component itself using useContext.

in our example , we have to extract the favoriate products in the Favoriate.js file. We can use the context value as we use the props , of course ,we do need to pass props again and again . 

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210628005753569.png)


### one more thing 

we can see that Context can bring us many advantages , we do not need to pass props from A to D , but it has it's own disadvantages. 

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210628012655971.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)


As Sebmarkkbage , react core team member , said it has performance issues and why we use redux(a kind of state management tool ) more often . 


### Demo code repository

[cick here ](https://github.com/AbdullA-Ababakre/context_learning/tree/main)


