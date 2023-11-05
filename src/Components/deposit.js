import React from 'react';
import { useContext } from 'react';
import Card from './context';
import UserContext from './usercontext';

function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [isDisabled, setDisabled] = React.useState(true);
  const ctx = useContext(UserContext);  

  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    if (isNaN(parseInt(field)) | field < 0) {
      alert('Please write a positive number.');
      setAmount(0);
      return false;
    }
    return true;
  }
  function handleCreate(){
    if (!validate(amount,    'amount'))    return;
    ctx.users[ctx.activeUser].balance += Number(amount);
    setDisabled(true);
    setShow(false);
    return;
  }     
  function writeForm(field){
    setAmount(field);
    (field) ? setDisabled(false) : setDisabled(true);
  }
  function clearForm(){
    setAmount('');
    setShow(true);
  }

  return (
    <Card
      txtcolor="black"
      bgcolor="success"
      header="Deposit"
      status={status}
      body={show ? (  
        <>
        Balance &nbsp; ${ctx.users[ctx.activeUser].balance}<br/>
        Deposit Amount<br/>
        <input type="number" min="0" className="form-control" id="password" placeholder="Deposit Amount" value={amount} onChange={e => writeForm(e.currentTarget.value)}/><br/>
        <button type="submit" disabled={isDisabled} className="btn btn-light" onClick={handleCreate}>Deposit</button>
        </>
      ):(
        <>
        <h5>Success</h5>
        <button type="submit" className="btn btn-light" onClick={clearForm}>Make other deposit</button>
        </>
      )}
    />
  )
}

export default Deposit;