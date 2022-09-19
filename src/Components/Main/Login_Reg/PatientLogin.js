import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const PatientLogin = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const adminNavigate = useNavigate();

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
    //////////////LOCAL STORAGE VALIDATION///////////////////////////////  
    let data = localStorage.getItem("PatientData");
    let patData=JSON.parse(data);
    if((patData.Email===userName) && (patData.Password === password)){
      localStorage.setItem("Patient Log","true");
      adminNavigate("admin");
    }    
    ////////////////////////////////////////////////////////////////////////
    setUserName("");
    setPassword("");


  }

  return (
    <div>
      <p>
        <Link to="/doctorlogin">Doctor Login Here</Link>
      </p>
      <h4 className="opacity-75">Patient Login</h4>
      <form className="col-sm-30">
        <p className="opacity-50">Patient Email ID</p>
        <input
          className="form-control"
          type="Email"
          value={userName}
          placeholder="Enter Email ID"
          onChange={userNameChange}
          required
        />
        <br />
        <p className="opacity-50">Patient Password</p>
        <input
          className="form-control"
          type="password"
          value={password}
          placeholder="Enter Password"
          onChange={passwordChange}
          required
        />
        <br />
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
      <br />
      <Link to="/patientRegistration">New Patient ? Reg. Here</Link>
    </div>
  );
};

export default PatientLogin;
