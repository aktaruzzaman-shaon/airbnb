import React from 'react';

const Footer = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div>
                        <h4 className='text-start'>Support</h4>
                        <p className='text-start'>Add your trip dates to get the cancellation details for this stay.</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div>
                        <h4 className='text-start'>Community</h4>
                        <p className='text-start'>Add your trip dates to get the cancellation details for this stay.</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div>
                        <h4 className='text-start'>Hsoiting</h4>
                        <p className='text-start'>Add your trip dates to get the cancellation details for this stay.</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div>
                        <h4 className='text-start'>Aibng</h4>
                        <p className='text-start'>Add your trip dates to get the cancellation details for this stay.</p>
                    </div>
                </div>
            </div>
            <hr />


            <div>
                <div className="container ">
                    {/* Copy right part */}
                    <div className='row'>
                        <div className='col-sm-12 col-md-6 col-lg-6 copy-right'><p >&copy; 2023 023 Airbnb, Inc.</p></div>
                        <div className='col-sm-12 col-md-6 col-lg-6 d-sm-text-start'>
                            <a href="" className='text-black text-decoration-none'>Terms</a>
                            <a href="" className='text-black text-decoration-none'>Cookie Policy</a>
                            <a href="" className='text-black text-decoration-none'>Terms</a>
                            <a href="" className='text-black text-decoration-none'>Privacy</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;