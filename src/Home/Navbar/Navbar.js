import React from 'react';
import { FaAirbnb } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { BiAperture } from "react-icons/bi";
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="shadow-sm">
            <div className="container py-4">
                <div className="row">
                    <div className="col-lg-4 col-md-2 d-none d-md-block d-lg-block">
                        <div className="d-flex flex-row " >
                            <FaAirbnb color='red' size="40px"></FaAirbnb>
                            <p className='navbar-logo-text mt-2 text-danger'>airbnb</p>
                        </div>
                    </div>
                    <div className='col-sm-1 d-md-none d-flex flex-row'>
                        <div> <FaAngleLeft></FaAngleLeft></div>
                        <p className='text-start'><a href="" className='text-decoration-none text-black d-inline'> Home</a></p>
                    </div>
                    <div className="col-lg-4 col-md-3 d-none d-block d-md-block d-lg-block ">
                        <div className='rounded-pill border p-2'><input type="text" className='  w-75 border-0' placeholder='Start your search' ></input>
                            <FaSistrix />
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-7 mtFaBars-1 d-none d-md-block d-lg-block '>
                        <div className=" d-felx flex-row">
                            <p className='d-inline m-3 font-weight-bold '>Airbnb your home</p>
                            <div className="d-inline"><BiAperture size="25px"></BiAperture></div>
                            <div className='d-inline m-3 border p-2 rounded-pill' ><FaBars></FaBars><BiUserCircle size="35px"></BiUserCircle></div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    );
};

export default Navbar;