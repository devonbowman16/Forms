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
                    {
                        firstName.length <2 && firstName.length>0?
                        <p className="text-danger">First name must be at least two characters long</p>:
                        ""
                    }
                    
                </div>
                <div className ="form-group">
                    <label htmlFor="">Last Name:</label>
                    <input onChange ={(d)=>setLastName(d.target.value)}type="text" name="" id="" className="form-control" />
                    {
                        lastName.length <2 && lastName.length>0?
                        <p className="text-danger">Last name must be at least two characters long</p>:
                        ""
                    }
                </div>
                <div className ="form-group">
                    <label htmlFor="">Email:</label>
                    <input onChange ={(d)=>setEmail(d.target.value)}type="email" name="" id="" className="form-control" />
                    {
                        email.length <5 && email.length>0?
                        <p className="text-danger">Email must be at least 5 characters long</p>:
                        ""
                    }
                </div>
                <div className ="form-group">
                    <label htmlFor="">Password:</label>
                    <input onChange ={(d)=>setPassword(d.target.value)}type="password" name="" id="" className="form-control" />
                    {
                        password.length <8 && password.length>0?
                        <p className="text-danger">Your password must be at least eight characters long</p>:
                        ""
                    }
                </div>
                <div className ="form-group">
                    <label htmlFor="">Confirm Password:</label>
                    <input onChange ={(d)=>setConfPass(d.target.value)} type="password" name="" id="" className="form-control" />
                    {
                        password !== confPass?
                        <p className="text-danger">Your passwords must match</p>:
                        ""
                    }
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