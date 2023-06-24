import React,{useState} from 'react'

function Register() {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [status,setStatus]=useState(false);
  const [message,setMessage]=useState("");

  const handleRegister=()=>{
    setStatus(true);
    setMessage("Registration successfully ")
  }

  return (
    <div>register
      <br></br>
      {status?(<><p>{message}</p></>):(<><label>name</label>
        <input type='text' value={name} name="name" onChange={(e)=>{setName(e.target.value)}}></input>
        <label>email</label>
        <input type='text' value={email} name="email" onChange={(e)=>{setEmail(e.target.value)}}></input>
        <br></br>
        <button onClick={handleRegister}>Register</button></>)}
        
    </div>
  )
}
export default Register
