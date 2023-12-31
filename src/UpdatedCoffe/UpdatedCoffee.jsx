import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link, useLoaderData } from 'react-router-dom';
import BackGround from '../assets/more/11.png'
import Swal from "sweetalert2";

const UpdatedCoffee = () => {

    const coffee = useLoaderData()
    const { _id} = coffee;

    const handleUpdatedCoffee = e =>{
        e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const chef = form.chef.value;
            const supplier = form.supplier.value;
            const taste = form.taste.value;
            const category = form.category.value;
            const details = form.details.value;
            const photo = form.photo.value;

            const updatedCoffee = {name,chef,supplier,taste,category,details,photo}
            // console.log(coffee)

            
            fetch(`http://localhost:5000/coffee/${_id}`,{
                method: 'PUT',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedCoffee)
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data)
                if(data.modifiedCount){
                    Swal.fire({
                        title: 'Success!',
                        text: 'YAY...!! Coffee Added Successfully Done !!',
                        icon: 'success',
                        confirmButtonText: 'Great'
                      })
                }
            })

            form.reset()
    }


    return (
        <div>
        <div className='min-h-screen' style={{ backgroundImage: `url(${BackGround})` }}>
            <div className='w-3/4 mx-auto'>
                <div className='flex items-center'>
                    <FaLongArrowAltLeft className='w-16 h-5'></FaLongArrowAltLeft>
                    <Link to="/"><h1 className='text-[#374151] text-3xl font-rancho font-medium p-4'>Back To Home</h1></Link>
                </div>

                <div className='bg-[#F4F3F0] p-10 space-y-4'>
                    <h1 className='text-4xl pt-6 font-rancho flex justify-center '>Update Existing Coffee Details</h1>
                    <p className='text-center lg:mx-auto md:w-[600px] lg:w-[700px]'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                    <form onSubmit={handleUpdatedCoffee}>
                        <div className='md:flex md:px-24'>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-rancho text-xl">Coffee Name</span>
                                </label>
                                <input type="text" placeholder="Enter coffee name" className="input input-bordered" name='name'   />

                            </div>
                            <div className="form-control md:ml-4 md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-rancho text-xl">Chef Name</span>
                                </label>
                                <input type="text" placeholder="Enter coffee chef" className="input input-bordered" name='chef'   />
                            </div>
                        </div>

                        
                        <div className='md:flex md:px-24'>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-rancho text-xl">Supplier Name</span>
                                </label>
                                <input type="text" placeholder="Enter coffee supplier" className="input input-bordered" name='supplier'   />

                            </div>
                            <div className="form-control md:ml-4 md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-rancho text-xl">Coffee Taste</span>
                                </label>
                                <input type="text" placeholder="Enter coffee taste" className="input input-bordered" name='taste'   />
                            </div>
                        </div>
                        <div className='md:flex md:px-24'>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-rancho text-xl">Coffee Category</span>
                                </label>
                                <input type="text" placeholder="Enter coffee Category" className="input input-bordered" name='category'  />

                            </div>
                            <div className="form-control md:ml-4 md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-rancho text-xl">Coffee Details</span>
                                </label>
                                <input type="text" placeholder="Enter coffee details" className="input input-bordered" name='details'   />
                            </div>
                        </div>
                        <div className="form-control md:px-24  w-full">
                                <label className="label">
                                    <span className="label-text font-rancho text-xl">Coffee Photo</span>
                                </label>
                                <input type="text" placeholder="Enter coffee Photo Url" className="input input-bordered" name='photo'   />
                            </div>
                        <div className="form-control md:px-24  w-full">
                                <input className='btn mt-3 w-full mx-auto border-2 border-[#331A15] hover:bg-[#D2B48C] bg-[#D2B48C]' type="submit" value="Update Coffee Details" />
                            </div>
                           
                    </form>



                </div>
            </div>
        </div>
    </div>
    );
};

export default UpdatedCoffee;