import React from 'react';
import valo from './images/valo.jpg';

const Item = () => {

    return (
        <>

            <div className=' col-lg-4 col-md-6 col-sm-12' style={{ width:'width:100%' }}>
                <div className='shadow mb-5 bg-body rounded row' style={{fontSize:'15px'}}>
                    <div className='col-5'>
                        <img src={valo} className="img-fluid imgs" alt="menu-pic" />
                    </div>

                    <div className='col-7'>
                        <div className='row'>
                            <h1>Momo</h1>
                            <p>Descriptions</p>
                        </div>

                        <div className='row mt-4' >
                            <div className='col-6'>
                                <p style={{ color: '#0275d8' }}>Price : Rs. 10</p>
                            </div>
                            <div className='col-6'>
                                <button className='btn btn-primary'>Order Now</button>
                            </div>
                        </div>

                        <div className='row'>
                            <p>*Prices may vary on selected date.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Item;