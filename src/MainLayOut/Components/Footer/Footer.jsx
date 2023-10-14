import BG from '../../../assets/more/13.jpg'
import LOGO from '../../../assets/more/logo1.png'
import FooterBg from '../../../assets/more/24.jpg'
import { BiPhoneCall, BiLogoTwitter, BiLogoInstagramAlt, BiLogoFacebookSquare, BiLogoYoutube } from "react-icons/bi";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
    return (
        <div>
            <div className="bg-red-300 mt-12 min-h-[80vh]" style={{ backgroundImage: `url(${BG})` }} >
                <div className='w-3/4 mx-auto grid sm:grid-cols-1 md:grid-cols-2'>
                    <div className='space-y-4'>
                        <img src={LOGO} className='w-24' alt="Coffee Master" />
                        <h1 className='text-5xl font-rancho text-[#331A15]'>Espresso Emporium</h1>
                        <p className='text-xl font-rancho text-[#331A15]'>Always ready to be your friend. Come & Contact with us to share your <br /> memorable moments, to share with your best companion.</p>
                        <div className=" gap-5 flex  text-[#331A15]">
                            <a href=""><BiLogoTwitter className='w-10 h-10'></BiLogoTwitter></a>
                            <a href=""><BiLogoInstagramAlt className='w-10 h-10'></BiLogoInstagramAlt></a>
                            <a href=""><BiLogoFacebookSquare className='w-10 h-10'></BiLogoFacebookSquare></a>
                            <a href=""><BiLogoYoutube className='w-10 h-10'></BiLogoYoutube></a>
                        </div>
                        <h1 className='text-4xl mt-3 text-[#331A15] font-medium font-rancho'>Get in Touch</h1>

                        <div className='flex items-center mt-3 space-x-3'>
                            <BiPhoneCall className='w-10 h-6 text-[#331A15]'></BiPhoneCall>
                            <p className='text-xl text-[#331A15] font-rancho'>+88 01533 333 333</p>
                        </div>
                        <div className='flex items-center mt-3 space-x-3'>
                            <MdEmail className='w-10 h-6 text-[#331A15]'></MdEmail>
                            <p className='text-xl text-[#331A15] font-rancho'>info@gmail.com</p>
                        </div>
                        <div className='flex items-center mt-3 space-x-3'>
                            <MdLocationOn className='w-10 h-6 text-[#331A15]'></MdLocationOn>
                            <p className='text-xl text-[#331A15] font-rancho'>72, Wall street, King Road, Dhak</p>
                        </div>
                    </div>

                    <div>
                        <div className='h-32'></div>
                        <div className='space-y-5'>
                            <h1 className='text-5xl font-rancho  text-[#331A15]'>Connect With Us</h1>
                            <input type="text" placeholder="Name" className="input input-bordered w-full " />
                            <input type="email" placeholder="Email" className="input input-bordered w-full" />
                            <div className="form-control">
                                <textarea className="textarea textarea-bordered h-24" placeholder="Message"></textarea>
                            </div>
                            <button className="font-rancho text-xl rounded-3xl border-[#331A15] px-10  py-3 border-2 btn-outline hover:bg-[#331A15]">Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='min-h-[8vh] mt-2' style={{ backgroundImage: `url(${FooterBg})` }}>
                <h1 className=' text-center text-4xl  text-white font-rancho'>Copyright Espresso Emporium ! All Rights Reserved</h1>
            </div>
        </div>
    );
};

export default Footer;