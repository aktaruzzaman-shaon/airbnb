import React from 'react';

const About = () => {
    return (
        <div>
            <div className="container ">
                <div className="row my-3">
                    <div className="col-md-4 col-sm-6 ">
                        <div>
                            <h4 className='text-start'>House rules
                            </h4>
                            <p className='text-start'>Check-in after 2:00 PM</p>
                            <p className='text-start'>Check-in after 2:00 PM</p>
                            <p className='text-start'>Check-in after 2:00 PM</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div>
                            <h4 className='text-start'>Safety & property
                            </h4>
                            <p className='text-start'>Security camera/recording device
                            </p>
                            <p className='text-start'>Carbon monoxide alarm
                            </p>
                            <p className='text-start'>Check-in after 2:00 PM</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div>
                            <h4 className='text-start'>Cancellation policy

                            </h4>
                            <p className='text-start'>Add your trip dates to get the cancellation details for this stay.

                            </p>

                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default About;