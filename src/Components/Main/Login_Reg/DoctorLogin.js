
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const DoctorLogin = (props)=>{

    const adminNavigate=useNavigate();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const userNameChange = (event) => {
        setUserName(event.target.value);
      };
      const passwordChange = (event) => {
        setPassword(event.target.value);
      };
    
      const ResetField = (event) => {
        event.preventDefault();
        setUserName("");
        setPassword("");
      };
    
      function onLoginClick(event) {
        event.preventDefault();
        ////////////////LOCAL STORAGE VALIDATION///////////////////////
        let data = localStorage.getItem("DoctorData");
        let docData=JSON.parse(data);
        if((docData.Email===userName) && (docData.Password === password)){
          localStorage.setItem("Doctor Log","true")
          adminNavigate("admin")
          
        }        
    
        setUserName("");
        setPassword("");
      }
    
    
    return(
        <div>
            <p>
                <Link to="/patientlogin">Patient Login Here</Link>
            </p>            
            <h4 className="opacity-75">Doctor Login</h4>
            <form className="col-sm-30" >
                <p className="opacity-50">Doctor Email ID</p>
                <input className="form-control" value={userName} type="Email" placeholder="Enter Email ID" onChange={userNameChange} required/><br/>
                <p className="opacity-50">Doctor Password</p>
                <input className="form-control" value={password} type="password" placeholder="Enter Password" onChange={passwordChange} required/><br/>
                <div className="row">
                    <div className="col-md-10 mb-6 pb-8">
                        <button
                            type="Submit"
                            onClick={onLoginClick}
                            className="btn btn-success SubmitButtonStyle"
                            >
                            SUBMIT
                        </button>
                        <button
                            type="Submit"
                            onClick={ResetField}
                            className="btn btn-secondary "
                            >
                            Reset
                        </button>
                    </div>
                </div>                            
            </form>
            <br/>
            <Link to="/doctorRegistration">New Doctor ? Reg. Here</Link>
                       
        </div>
    );
}

export default DoctorLogin;