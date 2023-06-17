import React from 'react';

const Footer = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <div>
                        <h4 className='text-start'>Support</h4>
                        <p className='text-start'>Add your trip dates to get the cancellation details for this stay.</p>
                    </div>
                </div>
                <div className="col">
                    <div>
                        <h4 className='text-start'>Community</h4>
                        <p className='text-start'>Add your trip dates to get the cancellation details for this stay.</p>
                    </div>
                </div>
                <div className="col">
                    <div>
                        <h4 className='text-start'>Hsoiting</h4>
                        <p className='text-start'>Add your trip dates to get the cancellation details for this stay.</p>
                    </div>
                </div>
                <div className="col">
                    <div>
                        <h4 className='text-start'>Aibng</h4>
                        <p className='text-start'>Add your trip dates to get the cancellation details for this stay.</p>
                    </div>
                </div>
            </div>
            <hr />


            <div>
                <div className="container ">
                    {/* Social Media part */}
                    <div className="row">
                        <div className="col-12 mt-5">
                        </div>
                    </div>


                    {/* Copy right part */}
                    <div className='row'>
                        <div className='col-sm-12 col-md-6 col-lg-6 copy-right'><p className='text-start'>&copy; 2023 023 Airbnb, Inc.</p></div>
                        <div className='col-sm-12 col-md-6 col-lg-6 termCoockie-Style text-end'>
                            <a href="" cla>Terms</a>
                            <a href="">Cookie Policy</a>
                            <a href="">Terms</a>
                            <a href="">Privacy</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;