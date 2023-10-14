
import Gallery from "../Gallery/Gallery";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Product from "./Product/Product";




const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Product></Product>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;