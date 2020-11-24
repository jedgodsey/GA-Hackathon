import React from 'react';
import Dashboard from './Dashboard';

const Login = (props) => {
  return(
    <div>
      <h1>LOGIN</h1>
      <form onSubmit={props.toggleView}>
        
      <input type="text" placeholder="USERNAME" />
      <input type="password" placeholder="PASSWORD" />
      <input type="submit" />
      </form>
    </div>
  )
}

export default Login;
