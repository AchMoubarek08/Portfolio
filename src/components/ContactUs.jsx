import React from 'react';
import axios from 'axios';
import { EarthCanvas } from "./canvas";
import { StarsCanvas } from "./canvas";
import { motion } from "framer-motion";
import AnimateSection from './AnimateSection';


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
<motion.button
  className={`btn btn-border-2 ${props.disabled ? 'btn-disabled' : ''}`}
  type="submit"
  disabled={props.disabled}
  whileHover={{ 
    scale: props.disabled ? 1 : 1.05, 
    boxShadow: props.disabled ? "none" : "0px 4px 10px rgba(0, 0, 0, 0.2)" 
  }}
  whileTap={{ scale: props.disabled ? 1 : 0.95 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
>
  {props.children}
</motion.button>
);

class ContactUs extends React.Component {
  constructor() {
    super();
    this.state = {
      name: { name: 'name', label: 'Name', value: '', focus: false },
      email: { name: 'email', label: 'Email', value: '', focus: false },
      message: { name: 'message', label: 'Message', value: '', focus: false },
      submitting: false,
      submitStatus: null,
    };
  }

  handleFocus(e) {
    const name = e.target.name;
    const state = { ...this.state[name] };
    state.focus = true;
    this.setState({ [name]: state });
  }

  handleBlur(e) {
    const name = e.target.name;
    const state = { ...this.state[name] };
    state.focus = false;
    this.setState({ [name]: state });
  }

  handleChange(e) {
    const name = e.target.name;
    const state = { ...this.state[name] };
    state.value = e.target.value;
    this.setState({ [name]: state });
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const submissionData = {
      name: this.state.name.value,
      email: this.state.email.value,
      message: this.state.message.value,
    };

    this.setState({
      submitting: true,
      submitStatus: null,
    });

    try {
      const response = await axios.post('http://localhost:5000/api/contact', submissionData);

      this.setState({
        submitting: false,
        submitStatus: 'success',
        name: { ...this.state.name, value: '' },
        email: { ...this.state.email, value: '' },
        message: { ...this.state.message, value: '' },
      });

      // Automatically hide popup after 3 seconds
      setTimeout(() => {
        this.setState({ submitStatus: null });
      }, 3000);
    } catch (error) {
      this.setState({
        submitting: false,
        submitStatus: 'error',
      });

      // Optional: Hide error after 3 seconds
      setTimeout(() => {
        this.setState({ submitStatus: null });
      }, 3000);
    }
  };

  render() {
    const { name, email, message, submitting, submitStatus } = this.state;

    return (
<section className="section contact-container">
    <div className="contact-section">
      <Card>
      <AnimateSection
                  initialOpacity={0}
                  initialX={0}         
                  finalOpacity={1}        
                  finalX={250}
                  initialY={0}
                  finalY={0}              
                  duration={0.8}         
                  threshold={0.8}     
                  triggerOnce={false}
                  customStyle={{width: "50%", height: "55%"}}
      >
        <h2 style={{ textAlign: "center" }}>Contact me</h2>
        <Form onSubmit={this.handleSubmit}>
          <TextInput
            {...name}
            onFocus={this.handleFocus.bind(this)}
            onBlur={this.handleBlur.bind(this)}
            onChange={this.handleChange.bind(this)}
          />
          <TextInput
            {...email}
            type="email"
            onFocus={this.handleFocus.bind(this)}
            onBlur={this.handleBlur.bind(this)}
            onChange={this.handleChange.bind(this)}
          />
          <TextArea
            {...message}
            onFocus={this.handleFocus.bind(this)}
            onBlur={this.handleBlur.bind(this)}
            onChange={this.handleChange.bind(this)}
          />
          <Button disabled={submitting}>
            {submitting ? 'Sending...' : 'Send'}
          </Button>
        </Form>
        </AnimateSection>
      </Card>
    </div>
    <div className="contact-section">
    <div className="contact-card">
      <AnimateSection
      initialOpacity={0}
      initialX={250}         
      finalOpacity={1}        
      finalX={0}
      initialY={0}
      finalY={0}              
      duration={0.8}         
      threshold={0.8}     
      triggerOnce={false}
      customStyle={{width: "50%", height: "55%"}}
      >
      <EarthCanvas/>
      </AnimateSection>
      </div>
    </div>


  {/* Custom popup for success or error */}
  {submitStatus === 'success' && (
    <div className="popup success">
      <p>Message sent successfully!</p>
    </div>
  )}
  {submitStatus === 'error' && (
    <div className="popup error">
      <p>Failed to send message. Please try again.</p>
    </div>
  )}
</section>
    );
  }
}

export default ContactUs;
