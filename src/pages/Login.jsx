import React from 'react'
import { MdConnectWithoutContact } from 'react-icons/md'
import Input from '../components/Input'

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <h1>
          <MdConnectWithoutContact /> Convo <span>live</span>
        </h1>
        <h4 className="title">Login</h4>
        <div className="inputForm">
          <form>
            <Input type="email" label="Email address" id="email"/>
            <Input type="password" label="password" id="password"/>
            <button>Login</button>
          </form>
          <p>New user? please Register.</p>
        </div>
      </div>
    </div>
  )
}

export default Login