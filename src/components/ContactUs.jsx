import React from 'react';
import axios from 'axios';
import { EarthCanvas } from "./canvas";
import { motion, AnimatePresence } from "framer-motion";
import AnimateSection from './AnimateSection';
import PropTypes from 'prop-types';


const Card = props => (
  <div className="contact-card glass-effect">
    {props.children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired
};

const Form = props => (
  <form className="contact-form" onSubmit={props.onSubmit}>{props.children}</form>
);

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired
};

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

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool
};

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
              initialX={-100}         
              finalOpacity={1}        
              finalX={0}
              initialY={0}
              finalY={0}              
              duration={0.8}         
              threshold={0.8}     
              triggerOnce={true}
              customStyle={{width: "100%", height: "100%", padding: "2rem"}}
            >
              <h2 className="contact-title">Get in Touch</h2>
              <p className="contact-subtitle">Feel free to reach out. I'd love to hear from you!</p>
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
                  {submitting ? (
                    <>
                      <span className="spinner"></span>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span className="button-text">Send Message</span>
                      <span className="button-icon">→</span>
                    </>
                  )}
                </Button>
              </Form>
            </AnimateSection>
          </Card>
        </div>

        <div className="contact-section">
          <div className="contact-card glass-effect">
            <AnimateSection
              initialOpacity={0}
              initialX={100}         
              finalOpacity={1}        
              finalX={0}
              initialY={0}
              finalY={0}              
              duration={0.8}         
              threshold={0.8}     
              triggerOnce={true}
              customStyle={{width: "100%", height: "100%"}}
            >
              <EarthCanvas/>
            </AnimateSection>
          </div>
        </div>

        <AnimatePresence>
          {submitStatus && (
            <motion.div 
              className={submitStatus}
              initial={{ y: -100, opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ y: 0, opacity: 1, scale: 1, rotate: 0 }}
              exit={{ y: -100, opacity: 0, scale: 0.8, rotate: 10 }}
              transition={{
                duration: 0.5,
                ease: [0.19, 1.0, 0.22, 1.0], // Custom easing for a bouncy feel
                scale: {
                  type: "spring",
                  damping: 8,
                  stiffness: 100
                }
              }}
              style={{
                position: 'fixed',
                left: '42%',
                top: '20px',
                zIndex: 1000,
                transform: 'translateX(-50%)',
                padding: '16px 32px',
                borderRadius: '20px',
                backgroundColor: submitStatus === 'success' 
                  ? 'rgba(29, 211, 176, 0.95)'  // Cosmic green
                  : 'rgba(255, 88, 124, 0.95)',  // Cosmic red
                color: 'white',
                boxShadow: submitStatus === 'success'
                  ? '0 0 20px rgba(29, 211, 176, 0.5), 0 0 40px rgba(29, 211, 176, 0.3)'
                  : '0 0 20px rgba(255, 88, 124, 0.5), 0 0 40px rgba(255, 88, 124, 0.3)',
                fontSize: '16px',
                fontWeight: '600',
                minWidth: '300px',
                textAlign: 'center',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <motion.p 
                style={{ 
                  margin: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px'
                }}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                {submitStatus === 'success' ? (
                  <>
                    <span>Message sent successfully!</span>
                  </>
                ) : (
                  <>
                    <span>Failed to send message.</span>
                  </>
                )}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    );
  }
}

export default ContactUs;
