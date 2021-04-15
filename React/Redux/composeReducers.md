1.import  combineReducers

````
import { createStore,applyMiddleware ,compose,combineReducers } from 'redux';
````

2.combine the reducers into one 

````
const rootReducer = combineReducers({
    burgerBuilder : burgerBuilderReducer,
    order : orderReducer
})
````

3.change the place we used

not the state.ingredients,but state.burgerBuilder.ingredients,because we have multiple reducers right now.

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210408073532936.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)
