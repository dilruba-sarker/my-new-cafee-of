
import profile from "../../assets/images/profile.png"
const Header = () => {
    return (
        <div className="flex justify-between max-w-5xl mx-auto">
           <h1 className="text-2xl font-bold"> Knowledge</h1> 
           <img src={profile} alt="" />
        


        </div>
    );
};

export default Header;