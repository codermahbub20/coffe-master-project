import { GrView } from "react-icons/gr";
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Coffee = ({ coffee,coffees,setCoffees }) => {

    const { _id, photo, name, chef, category } = coffee;

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be delete your coffee item this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`,{
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee Item Has Been Removed.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id !== _id)
                            setCoffees(remaining)
                        }
                    })
            }
        })
    }

    return (
        <div>
            <div className="card p-5 card-side bg-none shadow-lg">
                <figure><img className="md:h-48 w-full" src={photo} alt="Movie" /></figure>
                <div className="flex  md:flex-1 justify-center items-center">
                    <div className="flex-1 md:text-3xl font-rancho">
                        <h1>Name: {name}</h1>
                        <h1>Chef: {chef}</h1>
                        <h1>Category: {category}</h1>
                    </div>
                    <div >
                        <div className="btn-group gap-2 mr-4  btn-group-vertical">
                           
                           <Link to={`/details/${_id}`}><button className="btn bg-[#E3B577] btn-sm"><GrView className="w-6 h-6 text-white hover:text-black "></GrView></button></Link>

                           <Link to={`updatedcoffee/${_id}`}> <button className="btn rounded-lg btn-sm hover:text-black bg-[#331A15]"><BiSolidPencil className="w-6 h-6 text-white "></BiSolidPencil></button></Link>

                            <button onClick={() => handleDelete(_id)} className="btn hover:text-black bg-[#EA4744] btn-sm"><MdDelete className="w-6 h-6 text-white "></MdDelete></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffee;