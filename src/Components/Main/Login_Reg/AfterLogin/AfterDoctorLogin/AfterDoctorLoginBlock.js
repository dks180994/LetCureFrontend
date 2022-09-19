
import "./AfterDoctorLoginBlock.css";



const AfterDoctorLoginBlock = () => {

  

  
  return (
    <div className="AfterLoginBlockMain">
      <div className="LHSBlock">
        <div>
          <div>
            <button type="button" className="btn btn-light Btn-Custom-Size ">
              Profile
            </button>
          </div>
          <div>
            <button type="button" className="btn btn-light Btn-Custom-Size">
              Appointment
            </button>
          </div>
          <div>
            <button type="button" className="btn btn-light Btn-Custom-Size">
              Booking History
            </button>
          </div>
          <div>
            <button type="button" className="btn btn-light Btn-Custom-Size">
              LogOut
            </button>
          </div>
        </div>
      </div>
      <div className="RHSBlock">
        <h1>ABCD</h1>
      </div>
    </div>
  );
};

export default AfterDoctorLoginBlock;
