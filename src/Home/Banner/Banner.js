import React from 'react';
import { FaStar } from "react-icons/fa";
import { FaChevronCircleDown } from "react-icons/fa";
import BannerImg from '../../Asset/BannerImg.PNG'


const Banner = () => {
    return (
        <div className='my-4'>
            <div className="container">
                <h3 className='text-start'>Enjoy historic Valencia and close to the beach.</h3>
                <div className='d-flex flex-row row'>
                    <div className='col-lg-6 col-sm-12 justify-content-start'>
                        <div className='justify-content-start'>
                            <FaStar></FaStar>4.87 <a href="" className='text-black'>171 reviews . </a>Superhost <a href="" className='text-black'>Valencia , Spain</a>
                            <FaChevronCircleDown></FaChevronCircleDown>
                        </div>
                    </div>
                    <div className='d-flex justify-content-end col-lg-6 d-md-block d-lg-block d-none'>
                        <div className='d-inline mx-3'><button className='border-0 '>Share</button></div>
                        <div className='d-inline'><button className='border-0'>Save</button></div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src={BannerImg} className='img-fluid' alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 d-md-block d-lg-block d-none">
                        <div className="row mb-3">
                            <div className='col-md-6'><img className='img-fluid ' src={BannerImg} alt="" /></div>
                            <div className='col-md-6'><img src={BannerImg} className='img-fluid' alt="" /></div>
                        </div>
                        <div className="row d-flex flex-row">
                            <div className='col-md-6 mb-2'><img src={BannerImg} className='img-fluid ' alt="" /></div>
                            <div className='col-md-6'><img src={BannerImg} className='img-fluid ' alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;