import React from 'react';
import Welcome from './Welcome';
import { Link } from 'react-router-dom';
import './form.css';

function debounce(func, delay) {
  let timer;
  return function(...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  }
}

function validName(value){
  var nameIsValid;
  if(value.length < 3){
    nameIsValid = 'Usernames should be up to three characters';
    return {isValid: false, message: nameIsValid};
  }
  else{
    nameIsValid = 'Name added successfully';
    return {isValid: true, message: nameIsValid};
  }
}

function validPassword(value){
  var passwordIsValid;
  var strongPassword = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).*$/;
  var isStrong = strongPassword.test(value);
  
  if((value.length >= 8) && isStrong){
    passwordIsValid = 'Strong password';
    return {isValid: true, message: passwordIsValid};
  }
  else{
    passwordIsValid = 'Weak password';
    return {isValid: false, message: passwordIsValid};
  }
}

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: undefined,
      nameIsValid: '',
      passwordIsValid: ''
    }
    this.nameRef = React.createRef();
    this.debouncedInputName = debounce(this.handleInput,800);
    this.debouncedInputPassword = debounce(this.handlePassword,800);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }
  
  handleInput = (e)=>{
   this.setState({
     value: e.target.value.toString()
   })
   const nameIsValid = validName(e.target.value).message;
   this.setState({nameIsValid});
  }
  
  handlePassword = (e)=>{
    this.setState({
     value: e.target.value.toString()
   })
   const passwordIsValid = validPassword(e.target.value).message;
   this.setState({passwordIsValid});
  }
  
  handleSubmit = (e)=>{
    e.preventDefault();
    const nameValidated = 'Name added successfully';
    const passValid = 'Strong password';
   
    if(nameValidated === this.state.nameIsValid && passValid === this.state.passwordIsValid) alert('Successfully logging in');
    
    else alert('Failed to log in, username or password is invalid');
    
}
  
  render(){
    return (
      <>
      <Welcome />
      <form onSubmit={this.handleSubmit} method='POST' autoComplete='on'>
      <input id='name' type='text' name='username' onInput={this.debouncedInputName} placeholder='Username' required />
      <p style={{ color: this.state.nameIsValid === 'Usernames should be up to three characters' ? 'red' : 'green' }} id="nameValid">{this.state.nameIsValid}</p>
      <input onInput={this.debouncedInputPassword} id='password' type='password' name='password' placeholder='Password' required/>
      <p style={{ color: this.state.passwordIsValid === 'Weak password' ? 'red' : 'green' }} id="passwordStrong">{this.state.passwordIsValid}</p>
      <input id='login' type='submit' value='Login'/>
      <p className="forgottenPassword">Forgotten Password? <Link to="/create-password">Click here</Link></p>
      <p className="signUp">Don't have an account? <Link to="/register">Sign Up</Link></p>
      </form>
      </>
    );
  }
}

export default Form;