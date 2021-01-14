when to optimize the performance

some components are updated merely because of the updaion of the parent component , at this time, you can use below two methods to optimize the performance.

## Class based component

shouldComponentUpdate(nextProps, nextState){}

## Function based component

React.memo



#### [React.pureComponent](https://reactjs.org/docs/react-api.html#reactpurecomponent)

if we check all the components ,we do not need to write shouldComponentUpdate , there is easier way to write ,it is React.pureComponent.

React.PureComponent is similar to React.Component. The difference between them is that React.Component doesn’t implement shouldComponentUpdate(), but React.PureComponent implements it with a shallow prop and state comparison.

If your React component’s render() function renders the same result given the same props and state, you can use React.PureComponent for a performance boost in some cases.