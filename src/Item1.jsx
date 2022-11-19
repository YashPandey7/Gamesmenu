import React from 'react';
import valo from './images/valo.jpg';

const Item1 = (props) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className='items shadow mb-5 align' style={{ maxWidth: "26rem", margin:'auto' }}>
                    <div className="card" style={{ maxWidth: "26rem" }}>
                        <img src={props.img} className="card-img-top" alt={props.name} />
                        <div className="card-body">
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">{props.desc}</p>
                            <a href="#" className="btn btn-primary">Order Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Item1;