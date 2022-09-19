import { useState } from "react";
import "./AfterPatientLoginBlock.css";
import Profile from "./PatientBlock/Profile"
import Appointment from "./PatientBlock/Appointment"
import History from "./PatientBlock/History"
import { useNavigate } from "react-router-dom";




const AfterPatientLoginBlock = () => {
    const Home = useNavigate();    
    const [datavalue, setDataValue] = useState(<Profile />);

    function ButtonClick(event) {
        

        if (event.target.value === "Profile") {
            setDataValue(
                <Profile />);
        } else if (event.target.value === "Appointment") {
            setDataValue(
                <Appointment />);
        } else if (event.target.value === "History") {
            setDataValue(
                <History />);
        } else if (event.target.value === "Logout") {
            localStorage.removeItem("Patient Log");
            window.alert("THANK YOU FOR VISITING OUR SITE");
            Home("/");                       
        }
    }

    return (
        <div className="AfterLoginBlockMain">
            <div className="LHSBlock">
                <div>
                    <div>
                        <button type="button"
                            onClick={ButtonClick}
                            value="Profile"
                            className="btn btn-light Btn-Custom-Size ">
                            Profile
                        </button>
                    </div>
                    <div>
                        <button type="button"
                            onClick={ButtonClick}
                            value="Appointment"
                            className="btn btn-light Btn-Custom-Size">
                            Appointment
                        </button>
                    </div>
                    <div>
                        <button type="button"
                            onClick={ButtonClick}
                            value="History"
                            className="btn btn-light Btn-Custom-Size">
                            Booking History
                        </button>
                    </div>
                    <div>
                        <button type="button"
                            onClick={ButtonClick}
                            value="Logout"
                            className="btn btn-light Btn-Custom-Size">
                            LogOut
                        </button>
                    </div>
                </div>
            </div>
            <div className="RHSBlock">
                {datavalue}
             </div>
        </div>
    );
};

export default AfterPatientLoginBlock;
