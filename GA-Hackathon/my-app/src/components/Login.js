import React from 'react';
import bee from '../images/bee.svg';

const Login = (props) => {
  return(
    <div class="container">
      <img src={bee} className="logo" />
      <h1 class="log-in-header text-center mt-5 mb-5">Login to Bizzee</h1>
      <form onSubmit={props.toggleView}>
       <div class="log-in text-center mt-5">
      <input class="username" type="text" placeholder="USERNAME" />
      </div>
      <div class="text-center">
      <input class="password mt-5" type="password" placeholder="PASSWORD" />
      </div>
      <div class="text-center">
      <input class="log-in-btn mt-5 align-middle" type="submit" value="Log-In" />
      </div>
      </form>
    </div>
  )
}

export default Login;
