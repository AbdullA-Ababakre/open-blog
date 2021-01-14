![在这里插入图片描述](https://img-blog.csdnimg.cn/20210111083821931.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)


want to set some initial state based on the props do it in the constructor


![在这里插入图片描述](https://img-blog.csdnimg.cn/20210111092610414.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)



需要研究 section7




Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

- Mounting
- Updating   
- Unmounting 

### Mounting 

Mounting means putting elements into the DOM.React has four built-in lifecycle methods,in this order,when mounting a component:

- constructor() 

> The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.

- getDrivedStateFromProps()

> The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM.This is the natural place to set the state object based on the initial props.It takes state as an argument, and returns an object with changes to the state.

- render()

> The render() method is required, and is the method that actually outputs the HTML to the DOM.

- componentDidMount()

> The componentDidMount() method is called after the component is rendered.This is where you run statements that requires that the component is already placed in the DOM.


### Updating 

The next phase in the lifecycle is when a component is updated.A component is updated whenever there is a change in the component's state or props.

React has five built-in methods that gets called, in this order, when a component is updated:

- getDrivedStateFromProps()

> This is the first method that is called when a component gets updated.This is still the natural place to set the state object based on the initial props.


- shouldComponentUpdate(nextProps,nextState)

> In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not.The default value is true.

take an example,below:

````
     shouldComponentUpdate(nextProps,nextState){
         if(nextProps.persons !== this.props.persons){
             return true;
         }else{
             return false;
         }
     }
````

- render() 

> The render() method is of course called when a component gets updated, it has to re-render the HTML to the DOM, with the new changes.

- getSnapshotBeforeUpdate()

> In the getSnapshotBeforeUpdate() method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.

- componentDidUpdate()

> The componentDidUpdate method is called after the component is updated in the DOM.



### Unmounting 

The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.

React has only one built-in method that gets called when a component is unmounted:

- componentWillUnmount()

> The componentWillUnmount method is called when the component is about to be removed from the DOM.

### Reference 

- [w3school](https://www.w3schools.com/react/react_lifecycle.asp#:~:text=Each%20component%20in%20React%20has,Mounting%2C%20Updating%2C%20and%20Unmounting)

- [react-lifecycle-methods-diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)











