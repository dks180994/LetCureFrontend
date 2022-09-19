import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DocPatient.css";

  const PatientReg = () => {
  const navigate = useNavigate();
  const NavigateHome = () => {
    navigate("/");
  };

  const [gender, setGender] = useState();
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [dob, setDOB] = useState();
  const [email, setEmail] = useState();
  const [mobileno, setMobileNo] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();

  const ResetField =()=>{
    setGender("");
    setFirstName("");
    setLastName("");
    setDOB("");
    setEmail("");
    setPassword("");
    setAddress("");
    setCity("");
    setState("");
    setMobileNo("");    
  }

  function onClickGender(event) {
    setGender(event.target.value);
  }
  function FirstNameChange(event) {
    setFirstName(event.target.value);
    console.log();
  }
  function LastNameChange(event) {
    setLastName(event.target.value);
  }
  function DOBChange(event) {
    setDOB(event.target.value);
  }
  function EmailChange(event) {
    setEmail(event.target.value);
  }
  function PasswordChange(event) {
    setPassword(event.target.value);
  }
  function MobileNoChange(event) {
    setMobileNo(event.target.value);
  }
  function AddressChange(event) {
    setAddress(event.target.value);
  }
  function CityChange(event) {
    setCity(event.target.value);
  }
  function StateChange(event) {
    setState(event.target.value);
  }

  function onSubmitClick(event) {
    event.preventDefault();
    const patientReg = {
      FirstName: firstname,
      LastName: lastname,
      DOB: new Date(dob),
      Gender: gender,
      Email: email,
      Password: password,
      MobileNo: mobileno,
      Address: address,
      City: city,
      State: state,
    };

    if (
      ((patientReg.FirstName !== undefined) && (patientReg.FirstName !== "")) &&
      ((patientReg.Email !== undefined) && (patientReg.Email !== "")) &&
      ((patientReg.Password !== undefined) && (patientReg.Password !== "")) &&
      ((patientReg.Address !== undefined) && (patientReg.Address !== "")) &&
      ((patientReg.City !== undefined ) && (patientReg.City !== "")) &&
      ((patientReg.State !== undefined ) && (patientReg.State!== ""))
    ) {
      const patientData = JSON.stringify(patientReg);
      localStorage.setItem("PatientData",patientData);
      console.log(patientData)
      window.alert("THANK YOU FOR REGISTRATING WITH US ");
      NavigateHome();
    }
  }

  return (
    <div>
      <div className="RegistrationBody">
        <h3
          className="mb-4 pb-2 pb-md-0 mb-md-5"
          style={{ textAlign: "center" }}
        >
          Patient Registration Form
        </h3>
        <form>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="form-outline">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="First Name"
                  value={firstname}
                  onChange={FirstNameChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="form-outline">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  value={lastname}
                  placeholder="Last Name"
                  onChange={LastNameChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <input
                type="date"
                className="form-control form-control-lg , input-group date"
                placeholder="Date Of Birth (DOB)"
                value={dob}
                onChange={DOBChange}
              />
            </div>
            <div className="col-md-6 mb-4" >
              <h6 className="mb-2 pb-1">Gender: </h6>
              <div className="form-check form-check-inline" >
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="femaleGender"
                  onClick={onClickGender}
                  value="Female"
                  
                />
                <label className="form-check-label" for="femaleGender">
                  Female
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="maleGender"
                  onClick={onClickGender}
                  value="Male"
                />
                <label className="form-check-label" for="maleGender">
                  Male
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-4 pb-2">
                <div className="form-outline">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email ID"
                    value={email}
                    onChange={EmailChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6 mb-4 pb-2">
                <div className="form-outline">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    value={password}
                    placeholder="Password"
                    onChange={PasswordChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6 mb-4 pb-2">
                <div className="form-outline">
                  <input
                    type="tel"
                    className="form-control form-control-lg"
                    placeholder="Mobile No."
                    value={mobileno}
                    onChange={MobileNoChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div class="form-outline mb-4">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Address"
                    value={address}
                    onChange={AddressChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div class="form-outline mb-4">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="City"
                    value={city}
                    onChange={CityChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div class="form-outline mb-4">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="State"
                    value={state}
                    onChange={StateChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 mb-6 pb-8">
              <button type="Submit" onClick={onSubmitClick} className="btn btn-success SubmitButtonStyle">
                SUBMIT
              </button>
              <button type="Submit" onClick={NavigateHome} className="btn btn-primary BackButtonStyle">
                Go Back
              </button>
              <button type="Submit" onClick={ResetField} className="btn btn-secondary ">
                Reset
              </button>
            </div>            
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientReg;
