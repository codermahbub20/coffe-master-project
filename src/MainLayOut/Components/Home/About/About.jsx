import TEA from '../../../../assets/icons/1.png'
import Badge from '../../../../assets/icons/2.png'
import Photo from '../../../../assets/icons/3.png'
import Coffee from '../../../../assets/icons/4.png'

const About = () => {
    return (
        <div className="bg-[#ECEAE3] flex justify-center items-center min-h-[40vh]">
            <div className="w-3/4 mt-3 mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">

                <div className='space-y-1  font-rancho'>
                    <img src={TEA} alt="" />
                    <h1 className='text-3xl'>Awesome Aroma</h1>
                    <p className='text-xl'>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='space-y-1  font-rancho'>
                    <img src={Badge} alt="" />
                    <h1 className='text-3xl'>High Quality</h1>
                    <p className='text-xl'>We served the coffee to you maintaining the best quality</p>
                </div>
                <div className='space-y-1  font-rancho'>
                    <img src={Photo} alt="" />
                    <h1 className='text-3xl'>Pure Grades</h1>
                    <p className='text-xl'>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className='space-y-1  font-rancho'>
                    <img src={Coffee} alt="" />
                    <h1 className='text-3xl'>Proper Roasting</h1>
                    <p className='text-xl'>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default About;