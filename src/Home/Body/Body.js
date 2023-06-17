import React from 'react';
import Calendar from 'react-calendar';
import { FaRestroom } from "react-icons/fa";
import { FaCouch } from "react-icons/fa";
import { FaDharmachakra } from "react-icons/fa";
import '../../../node_modules/react-calendar/dist/Calendar.css';
import './Body.css'



const Body = () => {
    return (
        <div>
            <div className="container">
                <div className='row  d-flex '>
                    <div className="col-md-8 col-lg-8 col-sm-12">

                        <h4 className='text-start'>Room in a rental unit hosted by Sagrario</h4>

                        {/* Bed details */}
                        <div className='row my-3'>
                            <div className="col-4 h-100">
                                <div class="card p-3">
                                    <div class="card-body">
                                        <FaRestroom></FaRestroom>
                                        <p class=" d-lg-inline">1 Double bed</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-4 object-fit-container">
                                <div class="card p-3">
                                    <div class="card-body">
                                        <FaRestroom></FaRestroom>
                                        <p class="d-lg-inline">1 Double bed</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div class="card p-3">
                                    <div class="card-body">
                                        <FaRestroom></FaRestroom>
                                        <p class="d-lg-inline">1 Double bed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />

                        {/* Room Features  */}


                        <div>
                            <div className='d-flex '>
                                <div className='pe-2'><FaCouch></FaCouch></div>
                                <div>
                                    <h5 className='text-start'>Room in a rental unit</h5>
                                    <p className='text-start'>Your own room in a home, plus access to shared spaces.
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className='pe-2'><FaCouch></FaCouch></div>
                                <div>
                                    <h5 className='text-start'>Dedicated workspace</h5>
                                    <p className='text-start'>A room with wifi that’s well-suited for working.
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className='pe-2'><FaCouch></FaCouch></div>
                                <div>
                                    <h5 className='text-start'>Room in a rental unit</h5>
                                    <p className='text-start'>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='d-flex '>
                            <div className='pe-2 mt-2'><FaDharmachakra></FaDharmachakra></div>
                            <p className='mt-2'>Some info has been automatically translated <strong><a href="" className='text-black'>Show original language</a></strong></p>
                        </div>
                        <hr />


                        {/* Meet your guest */}


                        <div>
                            <h3 className='text-start'>Meet your guest</h3>
                            <div>
                                <div class="card bg-light p-5 border-0">
                                    <div class="card-body">


                                        <div className='shadow-lg rounded mb-5'>
                                            <div className=" card">
                                                <div className="card-body">
                                                    <div className="row">

                                                        <div className="col-9">
                                                            <h3>Sagario</h3>
                                                            <p>Superthost</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <h3>316</h3>
                                                            <small>reviews</small>
                                                            <hr />
                                                            <h3>4.86</h3>
                                                            <small>ratings</small>
                                                            <hr />
                                                            <h3>7</h3>
                                                            <small>years hosting</small>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* client details */}
                                        <div>
                                            <div className='d-flex ms-5 '>
                                                <div className='pe-2'><FaCouch></FaCouch></div>
                                                <div>
                                                    <p className='text-start'>My work: coach</p>
                                                </div>
                                            </div>
                                            <div className='d-flex ms-5 '>
                                                <div className='pe-2'><FaCouch></FaCouch></div>
                                                <div>
                                                    <p className='text-start'>Fun fact: No one believes my age
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='d-flex ms-5 '>
                                                <div className='pe-2'><FaCouch></FaCouch></div>
                                                <div>
                                                    <p className='text-start'>What makes my home unique: Good energy and feeling at home
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='d-flex ms-5 '>
                                                <div className='pe-2'><FaCouch></FaCouch></div>
                                                <div>
                                                    <p className='text-start'>For guests, I always: Help them enjoy Valencia
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='d-flex ms-5 '>
                                                <div className='pe-2'><FaCouch></FaCouch></div>
                                                <div>
                                                    <p className='text-start'>Your own room in a home, plus access to shared spaces.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='d-flex ms-5 '>
                                                <div className='pe-2'><FaCouch></FaCouch></div>
                                                <div>
                                                    <p className='text-start'>Your own room in a home, plus access to shared spaces.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='d-flex ms-5 '>
                                                <div className='pe-2'><FaCouch></FaCouch></div>
                                                <div>
                                                    <p className='text-start'>Your own room in a home, plus access to shared spaces.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className='ms-5 text-start'>
                                            Open and communicative, with donation of people and happy to welcome friends from the world at home.
                                        </p>
                                        <p className='text-start ms-5'><a href="" className='text-black'><strong>Show more</strong></a>
                                        </p>
                                        <div className=' d-flex justify-content-start ms-5'>
                                            <button type="button" class="btn btn-dark ms-0">Message Host</button>
                                        </div>
                                        <hr />
                                        <p className='text-start ms-5'><small>To protect your payment, never transfer money or communicate outside of the Airbnb website or app.
                                        </small></p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* about this place */}

                        <div className='my-4'>
                            <h3 className='text-start'>About this place
                            </h3>
                            <p className='text-start'>Nice and spacious room in the heart of Valencia, with double bed and a balcony. Silent because there is no traffic. Surrounded by all the landmarks , museums , cathedral , leisure, and close to the beach where you can go by bike, bus , tram or car if your means of transportation.</p>
                            <p className='text-start'>I would love to receive people wanting to enjoy my city and help in what I can
                            </p>
                            <div className="d-flex justify-content-start"><a href="" className='text-black'><strong >Show more</strong></a></div>
                        </div>
                        <hr />


                        {/* where to sleep */}


                        <div>
                            <h3 className='text-start'>Where you'll sleep
                            </h3>
                            <div class="card w-25">
                                <div class="card-body">
                                    <FaRestroom></FaRestroom>
                                    <p><strong>Bedroom</strong></p>
                                    <p>2 bed room</p>
                                </div>
                            </div>
                        </div>
                        <hr />

                        {/* what is this place offer */}

                        <div className='row mb-4'>
                            <h2 className='text-start'>What's this place offers</h2>
                            <div className="col mt-3">
                                <div>
                                    <div className='d-flex '>
                                        <div className='pe-2 mt-2'><FaDharmachakra></FaDharmachakra></div>
                                        <p className='mt-2'>Some info has been automatically translated</p>
                                    </div>
                                    <div className='d-flex '>
                                        <div className='pe-2 mt-2'><FaDharmachakra></FaDharmachakra></div>
                                        <p className='mt-2'>Some info has been automatically translated</p>
                                    </div>
                                    <div className='d-flex '>
                                        <div className='pe-2 mt-2'><FaDharmachakra></FaDharmachakra></div>
                                        <p className='mt-2'>Some info has been automatically translated</p>
                                    </div>
                                    <div className='d-flex '>
                                        <div className='pe-2 mt-2'><FaDharmachakra></FaDharmachakra></div>
                                        <p className='mt-2'>Some info has been automatically translated</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col mt-3">
                                <div>
                                    <div className='d-flex '>
                                        <div className='pe-2 mt-2'><FaDharmachakra></FaDharmachakra></div>
                                        <p className='mt-2'>Some info has been automatically translated</p>
                                    </div>
                                    <div className='d-flex '>
                                        <div className='pe-2 mt-2'><FaDharmachakra></FaDharmachakra></div>
                                        <p className='mt-2'>Some info has been automatically translated</p>
                                    </div>
                                    <div className='d-flex '>
                                        <div className='pe-2 mt-2'><FaDharmachakra></FaDharmachakra></div>
                                        <p className='mt-2'>Some info has been automatically translated</p>
                                    </div>
                                    <div className='d-flex '>
                                        <div className='pe-2 mt-2'><FaDharmachakra></FaDharmachakra></div>
                                        <p className='mt-2'>Some info has been automatically translated</p>
                                    </div>

                                </div>
                            </div>
                            <div className='d-flex justify-content-start my-5'>
                                <button type="button" class="btn btn-outline-dark">Show all 37 aminities</button>
                            </div>
                            <hr />
                        </div>


                        {/* calender */}

                        <div className='d-flex'>
                            <div className='col '><Calendar className="border-0 ps-3 "></Calendar></div>
                            <div className='col ps-2 d-none d-md-block d-lg-block'><Calendar className="border-0 "></Calendar></div>
                        </div>
                    </div>

                    <div className="col-md-4  col-lg-4 d-none d-md-block d-lg-block style-body-right ">
                        <div class="card" >
                            <div class="card-body">
                                <h5 class="card-title ">$37 night</h5>
                                <p class="card-text">4.87 ·
                                    171 review</p>
                                <a href="#" class="btn btn-primary">Check Availablity</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;