import React from 'react';
import axios from 'axios';
import { EarthCanvas } from "./canvas";

const Card = props => (
  <div className="contact-card">
    {props.children}
  </div>
);

const Form = props => (
  <form className="contact-form" onSubmit={props.onSubmit}>{props.children}</form>
);

const TextInput = props => (
  <div className="text-input">
    <label
      className={(props.focus || props.value !== '') ? 'label-focus' : ''}
      htmlFor={props.name}>{props.label}</label>
    <input
      className={(props.focus || props.value !== '') ? 'input-focus' : ''}
      type={props.type || "text"}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      required />
  </div>
);

const TextArea = props => (
  <div className="text-area">
    <label
      className={(props.focus || props.value !== '') ? 'label-focus' : ''}
      htmlFor={props.name}>{props.label}</label>
    <textarea
      className={(props.focus || props.value !== '') ? 'input-focus' : ''}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      required />
  </div>
);

const Button = props => (
  <button
    className="contact-button"
    type="submit"
    disabled={props.disabled}>
    {props.children}
  </button>
);

class ContactUs extends React.Component {
  constructor() {
    super();
    this.state = {
      name: {
        name: 'name',
        label: 'Name',
        value: '',
        focus: false,
      },
      email: {
        name: 'email',
        label: 'Email',
        value: '',
        focus: false,
      },
      message: {
        name: 'message',
        label: 'Message',
        value: '',
        focus: false,
      },
      submitting: false,
      submitStatus: null
    }
  }

  handleFocus(e) {
    const name = e.target.name;
    const state = {...this.state[name]};
    state.focus = true;
    this.setState({ [name]: state });
  }
  
  handleBlur(e) {
    const name = e.target.name;
    const state = {...this.state[name]};
    state.focus = false;
    this.setState({ [name]: state });
  }
  
  handleChange(e) {
    const name = e.target.name;
    const state = {...this.state[name]};
    state.value = e.target.value;
    this.setState({ [name]: state });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare submission data
    const submissionData = {
      name: this.state.name.value,
      email: this.state.email.value,
      message: this.state.message.value
    };

    // Set submitting state
    this.setState({ 
      submitting: true, 
      submitStatus: null 
    });

    try {
      // Send form data to backend
      const response = await axios.post('http://localhost:5000/api/contact', submissionData);
      
      // Handle successful submission
      this.setState({
        submitting: false,
        submitStatus: 'success',
        name: {...this.state.name, value: ''},
        email: {...this.state.email, value: ''},
        message: {...this.state.message, value: ''}
      });

      // Optional: Show success message to user
      alert('Message sent successfully!');
    } catch (error) {
      // Handle submission error
      this.setState({
        submitting: false,
        submitStatus: 'error'
      });

      // Optional: Show error message to user
      alert('Failed to send message. Please try again.');
    }
  }
  
  render() {
    const {name, email, message, submitting} = this.state;
    
    return (
      <div className="section contact-container">
        <div className="contact-section">
          <Card>
            <h2 style={{textAlign: "center"}}>Contact me</h2>
            <Form onSubmit={this.handleSubmit}>
              <TextInput
                {...name}
                onFocus={this.handleFocus.bind(this)}
                onBlur={this.handleBlur.bind(this)}
                onChange={this.handleChange.bind(this)} />
              <TextInput
                {...email}
                type="email"
                onFocus={this.handleFocus.bind(this)}
                onBlur={this.handleBlur.bind(this)}
                onChange={this.handleChange.bind(this)} />
              <TextArea
                {...message}
                onFocus={this.handleFocus.bind(this)}
                onBlur={this.handleBlur.bind(this)}
                onChange={this.handleChange.bind(this)} />
              <Button disabled={submitting}>
                {submitting ? 'Sending...' : 'Send'}
              </Button>
            </Form>
          </Card>
        </div>
        <div className="contact-section">
          <EarthCanvas />
        </div>
      </div>
    );
  }
}

export default ContactUs;