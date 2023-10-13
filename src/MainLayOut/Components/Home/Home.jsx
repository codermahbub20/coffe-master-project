import Gallery from "../Gallery/Gallery";
import About from "./About/About";
import Banner from "./Banner/Banner";
import NavBar from "./NavBar/NavBar";


const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <About></About>

            <Gallery></Gallery>
        </div>
    );
};

export default Home;