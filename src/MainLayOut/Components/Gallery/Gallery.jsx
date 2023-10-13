import Cup1 from '../../../assets/cups/Rectangle 9.png'
import Cup2 from '../../../assets/cups/Rectangle 10.png'
import Cup3 from '../../../assets/cups/Rectangle 11.png'
import Cup4 from '../../../assets/cups/Rectangle 12.png'
import Cup5 from '../../../assets/cups/Rectangle 13.png'
import Cup6 from '../../../assets/cups/Rectangle 14.png'
import Cup7 from '../../../assets/cups/Rectangle 15.png'
import Cup8 from '../../../assets/cups/Rectangle 16.png'

const Gallery = () => {
    return (
        <div className="min-h-[60vh]">
            <div className="text-center space-y-2 mt-5">
                <p className='text-xl'>Follow Us Now</p>
                <h1 className="text-4xl font-rancho text-[#331A15] font-bold">Follow on Instagram</h1>
            </div>

            <div className="w-3/4 mt-10 mx-auto">

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={Cup1} alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={Cup2} alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={Cup3} alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={Cup4} alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={Cup5} alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={Cup6} alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={Cup7} alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={Cup8} alt=""/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Gallery;