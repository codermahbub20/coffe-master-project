

const Banner = () => {
    return (
        <div className="hero bg-cover bg-center min-h-[90vh] md:min-h-[90vh]" style={{ backgroundImage: 'url(https://i.ibb.co/93HhWyz/3.png)' }}>
            {/* <div className="hero-overlay bg-opacity-60"></div> */}
            <div className=" text-center text-white">
                <div className="lg:ml-[500px] mt-12">
                    <h1 className="mb-5 text-2xl md:text-5xl  font-rancho">Would you like a Cup of Delicious Coffee?</h1>
                    <p className="mb-5 max-w-2xl">It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className="px-5 py-3 text-black text-xl font-rancho bg-[#E3B577] hover:bg-white">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;