import React, {Component} from "react"
import emailjs from "emailjs-com"

import "./app-form.scss"
import axios from "axios"

export default class AppForm extends Component
{constructor(props){
  super(props)
  this.state = {
      text: '',
      email: "",
      phone: "",
      message: ""
  }
  this.onChange = this.onChange.bind(this)
  this.onSubmit = this.onSubmit.bind(this)
}

  onChange (e){
    const {name, value} =e.target
    this.setState({[name]: value})
  }

  onSubmit (e){
    e.preventDefault()
    const {text, email, phone, message} = this.state

    emailjs.sendForm('2564', 'template_9m1bhyb', e.target, 'user_YdwaDn0c92qXW6JEr43mk')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    this.setState({
        text: "",
        email: "",
        phone: "",
        message: ""
    })
    e.target.reset()
  }

  render(){

    const {text, email, phone, message} = this.state

  return (
    <div className="contact-form__wrapper">
          <form className="contact-form" onSubmit={this.onSubmit}>
            <input 
            name="text" 
            type="text" 
            placeholder="Name" 
            className="contact-form__input"
                    onChange={this.onChange}
                    value={text}/>
            <input 
            name="email" 
            type="email" 
            placeholder="E-mail" 
            className="contact-form__input"
                    onChange={this.onChange}
                    value={email}/>
            <input 
            name="phone" 
            type="phone" 
            placeholder="Phone number" 
            className="contact-form__input"
                    onChange={this.onChange}
                    value={phone}/>
            <textarea 
            name="message" 
            placeholder="Message" 
            className="contact-form__input textarea"
                    onChange={this.onChange}
                    value={message}/>
            <button type="submit" className="contact-form__button">Send</button>
          </form>
      </div>
    )
  }
}
;
