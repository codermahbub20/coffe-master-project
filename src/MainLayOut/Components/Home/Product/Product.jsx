import { Link, useLoaderData } from "react-router-dom";

import BG from '../../../../assets/more/1.png'
import { RiCupLine } from "react-icons/ri";
import { useState } from "react";
import Coffee from "./Coffee";




const Product = () => {

    const coffees = useLoaderData()

    return (
        <div className="min-h-screen  bg-no-repeat mt-2 bg-cover" style={{backgroundImage: `url(${BG})`}}>
            <div className="text-center space-y-2">
                <p className="text-xl">--- Sip & Savor ---</p>
                <h1 className="text-4xl font-rancho text-[#331A15] font-bold">Our Popular Products</h1>
                <Link to="/addcoffee"><button className="btn mt-2 font-rancho bg-[#E3B577]  border-[#331A15] border-2">Add Coffee  <RiCupLine className="h-10 w-6"></RiCupLine></button></Link>
            </div>
            <div className="grid lg:grid-cols-2 lg:w-3/4 mt-5 mb-5 mx-auto gap-7">
                {
                    coffees.map(coffee => <Coffee key={coffees._id} coffee={coffee}></Coffee>)
                }
            </div>
        </div>
    );
};

export default Product;