import React, {useState} from 'react';

const Infoform = () => {
    const[firstName, setFirstName]   = useState("");        
    const[lastName, setLastName]   = useState("");
    const[email, setEmail]   = useState("");
    const[password, setPassword]   = useState("");
    const[confPass, setConfPass]   = useState("");



    return (

        <div className ="container">
            <form>
                <div className ="form-group">
                    <label htmlFor="">First Name:</label>
                    <input onChange ={(d)=>setFirstName(d.target.value)}  type="text" name="" id="" className="form-control" />
                </div>
                <div className ="form-group">
                    <label htmlFor="">Last Name:</label>
                    <input onChange ={(d)=>setLastName(d.target.value)}type="text" name="" id="" className="form-control" />
                </div>
                <div className ="form-group">
                    <label htmlFor="">Email:</label>
                    <input onChange ={(d)=>setEmail(d.target.value)}type="email" name="" id="" className="form-control" />
                </div>
                <div className ="form-group">
                    <label htmlFor="">Password:</label>
                    <input onChange ={(d)=>setPassword(d.target.value)}type="password" name="" id="" className="form-control" />
                </div>
                <div className ="form-group">
                    <label htmlFor="">Confirm Password:</label>
                    <input onChange ={(d)=>setConfPass(d.target.value)} type="password" name="" id="" className="form-control" />
                </div>
            </form>

            <h3>Your Information:</h3>
            <div>
                <h4>First Name: {firstName}</h4>
                <h4>Last Name: {lastName}</h4>
                <h4>Email: {email}</h4>
                <h4>Password: {password}</h4>
                <h4>Confirmation Password: {confPass}</h4>
            </div>
        </div>
    );
};

export default Infoform;