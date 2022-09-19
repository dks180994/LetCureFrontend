import "./BoxRHS.css";
import PatientLogin from "./Login_Reg/PatientLogin";
import Pic from "./LoginImg/Login.jpg";
import DoctorLogin from "./Login_Reg/DoctorLogin";
import { Routes, Route } from "react-router-dom";



const BoxRHS = () => {
  return (
    <div className="BoxRHSBody">
      <div>
        <img
          src={Pic}
          alt="LoginImage"
          width="300px"
          height="300px"
          id="Login"
        />
      </div>
      <div id="BoxRHSLine"></div>
      <div className="LoginDiv">
        <Routes>
          <Route path="/" element={<PatientLogin />} />
          <Route path="doctorlogin" element={<DoctorLogin/>} />
          <Route path="patientlogin" element={<PatientLogin/>} />
        </Routes>
      </div>
    </div>
  );
};



export default BoxRHS;

// <form>
// <div className="mb-3 row">
//     <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
//     <div className="col-sm-10">
//     <input type="Email" className="form-control" id="inputEmail" />
//     </div>
// </div>
// <div className="mb-3 row">
//     <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
//     <div className="col-sm-10">
//     <input type="password" className="form-control" id="inputPassword"/>
//     </div>
// </div>
// <div>
//     <button type="Submit" className="btn btn-primary">SUBMIT</button>
// </div>
// </form>
