import React, { useEffect } from 'react';
import { useContext } from 'react';
import Card from './context';
import UserContext from './usercontext';

function Login(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isDisabled, setDisabled] = React.useState(true);
  const ctx = useContext(UserContext);

  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }
  function handleCreate(){
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    for (var i = 0; i < ctx.users.length; i++) {
      if ((ctx.users[i].email === email) && (ctx.users[i].password === password)){
        ctx.activeUser = i;
        setShow(false);
        return;
      }
    }
    setStatus('Wrong login credentials');
    setTimeout(() => setStatus(''),3000);
    return;
  }     

  useEffect(() =>{
    if (email && password) {
      setDisabled(false);
    }
    else {
      setDisabled(true);
    };
  }, [email, password])

  function clearForm(){
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      txtcolor="black"
      bgcolor="warning"
      header="Login"
      status={status}
      body={show ? (  
        <>
        Email address<br/>
        <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
        Password<br/>
        <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
        <button type="submit" disabled={isDisabled} className="btn btn-light" onClick={handleCreate}>Login</button>
        </>
      ):(
        <>
        <h5>Success</h5>
        <button type="submit" className="btn btn-light" onClick={clearForm}>Login with other account</button>
        </>
      )}
    />
  )
}
export default Login;
