HOC  simply means high order component,which receives a component and return a component.it wraps another component and simply add some extrta html structure or  styling or logic .

### one form of HOC 

![在这里插入图片描述](https://img-blog.csdnimg.cn/2021011408410830.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)


![在这里插入图片描述](https://img-blog.csdnimg.cn/20210114084730864.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)


here,withClass is a high order component,it receives another components then adds div wrapper to them . 

### function form

accepts a component as an argument and then return a new component .

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210114091716560.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)


How to use it 

![在这里插入图片描述](https://img-blog.csdnimg.cn/2021011409135320.png)



### typical usage 


````
import React, { Component } from 'react'
import Modal from '../../components/UI/Modal/index'

const WithErrorHandler = (WrappedComponent, axios) => {

    return class Error extends Component {
        state = {
            error: null
        }

        componentDidMount() {
            // Add a request interceptor
            axios.interceptors.request.use(req=> {
                this.setState({error: null})
                console.log("before request");
                return req;
            });
             
             // add a response interceptor
            axios.interceptors.response.use(res=> res,error=>{
                this.setState({error: error});
            });
        }


        handleError = () => {
            this.setState({ 
                error: null 
            })
        }

        render() {
            return (
                <>
                    <Modal show={this.state.error} modalClosed={this.handleError}>
                        {this.state.error?this.state.error:null}
                        {/* error occurred */}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </>
            )
        }
    }

}

export default WithErrorHandler;
````

This is a handleError component, when there is something wrong when we request from the server, we can show the error message in the Modal .

and this is a typical HOC , recieve a component and handle it ,then return it .


