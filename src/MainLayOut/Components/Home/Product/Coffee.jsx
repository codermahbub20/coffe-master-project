import { GrView } from "react-icons/gr";
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const Coffee = ({ coffee }) => {

    const { photo, name, chef, category } = coffee;

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
                            <button className="btn bg-[#E3B577] btn-sm"><GrView className="w-6 h-6 text-white "></GrView></button>
                            <button className="btn rounded-lg btn-sm bg-[#331A15]"><BiSolidPencil className="w-6 h-6 text-white"></BiSolidPencil></button>
                            <button className="btn bg-[#EA4744] btn-sm"><MdDelete className="w-6 h-6 text-white"></MdDelete></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffee;