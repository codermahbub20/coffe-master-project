import BG from '../../../assets/more/11.png'
import { Link, useLoaderData } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

const ViewDetails = () => {

    const coffeeDetails = useLoaderData()
    // const detail = coffeeDetails.find(coffee => coffee._id === details._id)
    const {  photo, name, chef, category,supplier,taste,details } = coffeeDetails;
    return (
        <div className='min-h-[80vh]' style={{ backgroundImage: `url(${BG})` }}>
             <div className='w-3/4 mx-auto flex items-center'>
                        <FaLongArrowAltLeft className='w-16 h-5'></FaLongArrowAltLeft>
                        <Link to="/"><h1 className='text-[#374151] text-3xl font-rancho font-medium p-4'>Back To Home</h1></Link>
                    </div>
            <div className='w-3/4 mt-12 mx-auto  bg-[#F4F3F0] p-14 md:p-10 lg::p-20'>
                <div className='md:flex md:justify-normal lg:justify-evenly items-center'>
                    <div>
                        <img className='md:h-72' src={photo} alt="Coffee Photo" />
                    </div>

                    <div className='font-rancho space-y-2 '>
                        <h1 className='sm:text-2xl font-medium text-[#331A15] md:text-5xl'>Niceties</h1>
                        <h3 className='text-3xl'>Name: <span className='text-xl text-[#5C5B5B] font-sans'>{name}</span></h3>
                        <h3 className='text-3xl'>Chef: <span className='text-xl text-[#5C5B5B] font-sans'>{chef}</span></h3>
                        <h3 className='text-3xl'>Supplier: <span className='text-xl text-[#5C5B5B] font-sans'>{supplier}</span></h3>
                        <h3 className='text-3xl'>Taste: <span className='text-xl text-[#5C5B5B] font-sans'>{taste}</span></h3>
                        <h3 className='text-3xl'>Category: <span className='text-xl text-[#5C5B5B] font-sans'>{category}</span></h3>
                        <h3 className='text-3xl'>Details: <span className='text-xl text-[#5C5B5B] font-sans'>{details}</span></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;