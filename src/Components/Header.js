
import "./Header.css"
import pic from "./HeaderImage/HeaderImages.png"

const Header = () =>{
    return(
        <div className="HeaderBody ">
            <div>
                <img src={pic} alt="Let's Cure Logo" width="20%" height="20%" />            
            </div>            
        </div>
    );
}

export default Header;