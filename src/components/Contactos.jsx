const Card = props => (
    <div className="card">
      {/*<div className="waves">
      </div>*/}
      {props.children}
    </div>
  );
  
  const Form = props => (
    <form className="form">{props.children}</form>
  );
  
  const TextInput = props => (
    <div
      className="text-input">
      <label
        className={(props.focus || props.value !== '') ? 'label-focus' : ''}
        htmlFor={props.name}>{props.label}</label>
      <input
        className={(props.focus || props.value !== '') ? 'input-focus' : ''}
        type="text"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onInput={props.onInput}
        onFocus={props.onFocus}
        onBlur={props.onBlur} />
    </div>
  );
  
  const TextArea = props => (
    <div
      className="text-area">
      <label
        className={(props.focus || props.value !== '') ? 'label-focus' : ''}
        htmlFor={props.name}>{props.label}</label>
      <textarea
        className={(props.focus || props.value !== '') ? 'input-focus' : ''}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onInput={props.onInput}
        onFocus={props.onFocus}
        onBlur={props.onBlur} />
    </div>
  );
  
  const Button = props => (
    <button
      className="button">{props.children}</button>
  );
  
  /** Root Component */
  class Contactos extends React.Component {
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
      }
    }
    
    handleFocus(e) {
      const name = e.target.name;
      const state = Object.assign({}, this.state[name]);
      state.focus = true;
      this.setState({ [name]: state },()=>{console.log(state)});
    }
    
    handleBlur(e) {
      const name = e.target.name;
      const state = Object.assign({}, this.state[name]);
      state.focus = false;
      this.setState({ [name]: state },()=>{console.log(state)});
    }
    
    handleChange(e) {
      const name = e.target.name;
      const state = Object.assign({}, this.state[name]);
      state.value = e.target.value;
      this.setState({ [name]: state },()=>{console.log(state)});
    }
    
    render() {
      const {name, email, message} = this.state;
      return (
        <div className="container">
          <Card>
            <h1>Send us a Message!</h1>
            <Form>
              <TextInput
                {...name}
                onFocus={this.handleFocus.bind(this)}
                onBlur={this.handleBlur.bind(this)}
                onChange={this.handleChange.bind(this)} />
              <TextInput
                {...email}
                onFocus={this.handleFocus.bind(this)}
                onBlur={this.handleBlur.bind(this)}
                onChange={this.handleChange.bind(this)} />
              <TextArea
                {...message}
                onFocus={this.handleFocus.bind(this)}
                onBlur={this.handleBlur.bind(this)}
                onChange={this.handleChange.bind(this)} />
              <Button>Send</Button>
            </Form>
          </Card>
        </div>
      );
    }
  }