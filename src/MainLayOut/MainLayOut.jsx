import { Outlet } from "react-router-dom";
import NavBar from "./Components/Home/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";



const MainLayOut = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;