import React from 'react';
import BannerImg from '../../Asset/BannerImg.PNG'

const Review = () => {
    return (
        <div className='container my-5'>
            <hr />
            <h4 className='text-start'>4.87 · 171 reviews
            </h4>
            <div className="row">
                <div className="col">
                    <div>
                        <div>
                            <img src={BannerImg} alt="" className='img-fluid d-inline h-25 w-25    rounded-circle' />
                            <h4>Natasha</h4>
                            <p>May 2023</p>
                        </div>
                        <p>Great location and a wonderful host, couldn't ask for more
                        </p>
                    </div>
                    <div>
                        <div>
                            <h4>Natasha</h4>
                            <p>May 2023</p>
                        </div>
                        <p>Great location and a wonderful host, couldn't ask for more
                        </p>
                    </div>
                    <div>
                        <div>
                            <h4>Natasha</h4>
                            <p>May 2023</p>
                        </div>
                        <p>Great location and a wonderful host, couldn't ask for more
                        </p>
                    </div>
                </div>
                <div className="col">
                    <div>
                        <div>
                            <h4>Natasha</h4>
                            <p>May 2023</p>
                        </div>
                        <p>Great location and a wonderful host, couldn't ask for more
                        </p>
                    </div>
                    <div>
                        <div>
                            <h4>Natasha</h4>
                            <p>May 2023</p>
                        </div>
                        <p>Great location and a wonderful host, couldn't ask for more
                        </p>
                    </div>
                    <div>
                        <div>
                            <h4>Natasha</h4>
                            <p>May 2023</p>
                        </div>
                        <p>Great location and a wonderful host, couldn't ask for more
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;