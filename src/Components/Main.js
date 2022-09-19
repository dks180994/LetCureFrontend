import "./Main.css";
import { Route, Routes } from "react-router-dom";
import BoxRHS from "./Main/BoxRHS";
import AfterLogin from "./Main/Login_Reg/AfterLogin/AfterLogin";
import DoctorLogin from "./Main/Login_Reg/DoctorLogin";
import DoctorReg from "./Main/Login_Reg/DoctorReg";
import PatientLogin from "./Main/Login_Reg/PatientLogin";
import PatientReg from "./Main/Login_Reg/PatientReg"

const Main = () => {
  return(
    <>
      <div>
        <Routes>
          <Route path="*"
            element={<BoxRHS />}>
            <Route path="doctorlogin"
              element={<DoctorLogin />} />
            <Route path="patientlogin"
              element={<PatientLogin />}>
            </Route>
          </Route>
          <Route>
            <Route path="patientRegistration"
              element={<PatientReg />} />
            <Route path="doctorRegistration"
              element={<DoctorReg />} />
          </Route>
          <Route path="/admin" element={<AfterLogin />} />

        </Routes>
      </div >
    </>
  );
 
}




export default Main;
