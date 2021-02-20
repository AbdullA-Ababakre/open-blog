### The simplest form 

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210102175239856.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)

### one complete form submission

#### contactData.jsx

````
import React, { Component } from 'react'
import './contactData.scss';
import Button from '../../../components/UI/Button'
import axios from '../../../axios-order'
import Spinner from '../../../components/UI/Spinner/spinner'
import Input from '../../../components/UI/Input/input'

import {
    withRouter
} from "react-router-dom";

class ContactData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orderForm: {
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your name'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched:false
                },
                street: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your street'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched:false
                },
                zipCode: {
                    elementType: 'input',
                    elementConfig: {
                        inputtype: 'text',
                        placeholder: 'ZIP CODE'
                    },
                    value: '',
                    validation: {
                        required: true,
                        minLength: 5,
                        maxLength: 5
                    },
                    valid: false,
                    touched:false
                },
                country: {
                    elementType: 'input',
                    elementConfig: {
                        inputtype: 'text',
                        placeholder: 'Country'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched:false
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                        inputtype: 'email',
                        placeholder: 'Email'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched:false
                },
                deliveryMethod: {
                    elementType: 'select',
                    elementConfig: {
                        options: [
                            { value: "fastest", displayValue: 'Fastest' },
                            { value: 'cheapest', displayValue: 'Cheapest' }
                        ]
                    },
                    valid:true,
                    value: 'fastest'
                }
            },
            loading: false,
            formIsValid:false
        }
    }

    checkValidity = (value, rules) => {
        let isValid = true;
        // debugger;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = (value.length >= rules.minLength) && isValid;
        }

        if (rules.maxLength) {
            isValid = (value.length <= rules.maxLength) && isValid;
        }

        return isValid;
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        });

        const orderData = {};
        for (let inputIdentifer in this.state.orderForm) {
            orderData[inputIdentifer] = this.state.orderForm[inputIdentifer].value;
        }

        const order = {
            ingredients: this.props.ingredients,
            pirce: this.props.price,
            orderData: orderData
        }

        console.log("order-axios", order);

        axios.post('/order.json', order).then((res) => {
            //  success
            this.setState({
                loading: false,
            })
            this.props.history.push('/');
        }).catch((err) => {
            this.setState({
                loading: false,
            })
        })
    }

    inputChangeHandler = (event, inputIdentifer) => {
        console.log("event", event.target.value);
        const val = event.target.value;
        const updatedOrderForm = { ...this.state.orderForm };
        const updatedOrderFormElement = { ...updatedOrderForm[inputIdentifer] };
        updatedOrderFormElement.value = val;
        if(updatedOrderFormElement.validation){
            updatedOrderFormElement.valid = this.checkValidity(updatedOrderFormElement.value, updatedOrderFormElement.validation)
        }
        
        updatedOrderFormElement.touched=true;
        updatedOrderForm[inputIdentifer] = updatedOrderFormElement;

        let formIsValid=true;
        for(let identifer in updatedOrderForm){
            formIsValid = updatedOrderForm[identifer].valid && formIsValid;
        }

        this.setState({ orderForm: updatedOrderForm,formIsValid:formIsValid });
    }

    render() {
        
        let submitBtn=null;
        if(this.state.formIsValid===true){
            submitBtn=<input type="submit" value="Order" />;
        }else{
            submitBtn=<input type="submit" value="Order" disabled="disabled" />;
        }

        const formElementArr = [];
        for (let key in this.state.orderForm) {
            formElementArr.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }



        let form = (
            <form onSubmit={this.orderHandler} id="form1">
                {
                    formElementArr.map((formElement) => {
                        return (
                            <Input
                                key={formElement.id}
                                value={formElement.config.value}
                                elementType={formElement.config.elementType}
                                elementConfig={formElement.config.elementConfig}
                                placeholder={formElement.config.placeholder}
                                isValid={formElement.config.valid}
                                shouldValid={formElement.config.validation}
                                touched={formElement.config.touched}
                                changed={(event) => this.inputChangeHandler(event, formElement.id)}
                            />
                        )
                    })
                }
                {/* <Button btnType="Success" form="form1" type="submit">ORDER</Button> */}
                {/* <input type="submit" value="Order" disabled="disabled" /> */}
                {submitBtn}
            </form>
        )

        if (this.state.loading === true) {
            form = <Spinner />;
        }

        return (
            <div className="contactData">
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default withRouter(ContactData);
````

#### input.jsx

````
import React from 'react'
import './input.scss'


class Input extends React.Component {
    render() {
        let inputElement = null;
        let inputElementClass=['inputElement'];
        if(!this.props.isValid && this.props.shouldValid && this.props.touched){
            inputElementClass.push('inValid');
        }

        switch (this.props.elementType) {
            case ('input'):
                inputElement = <input 
                className={inputElementClass.join(' ')}
                {...this.props.elementConfig} 
                value={this.props.value}
                onChange={this.props.changed}
                 />;
                break;
            case ('textarea'):
                inputElement = <textarea className={inputElementClass.join(' ')} {...this.props.elementConfig} value={this.props.value} onChange={this.props.changed} />;
                break;
            case ('select'):
                inputElement = (
                    <select className={inputElementClass.join(' ')} value={this.props.value} onChange={this.props.changed} >
                        {
                            this.props.elementConfig.options.map((option) => {
                                return (
                                    <option key={option.value} value={option.value}>{option.displayValue}</option>
                                )
                            })
                        }
                    </select>
                )
                break;
            default:
                inputElement = <input className={inputElementClass.join(' ')} {...this.props.elementConfig} value={this.props.value}  />;
        }


        return (
            <div className="input">
                <label className="label">{this.props.label}</label>
                {inputElement}
            </div>
        )
    }
}

export default Input;
````