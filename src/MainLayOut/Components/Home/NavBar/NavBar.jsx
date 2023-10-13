import Logo from '../../../../assets/more/logo1.png'
const NavBar = () => {
    return (
        <div className="hero min-h-[10vh]" style={{ backgroundImage: 'url(https://i.ibb.co/DVztGT5/15.jpg)' }}>
            <div className="hero-overlay bg-opacity-10"></div>
          <div className='flex items-center'>
          <div>
            <img className='w-16 ' src={Logo} alt="" />
           </div>
           <div>
            <h1 className='text-5xl text-white font-rancho'>Espresso Emporium</h1>
           </div>
          </div>
        </div>
    );
};

export default NavBar;