import React from 'react';

const Sresult = (props) => {
    const img = `https://source.unsplash.com/400x300/?${props.search}`;

    return (
        <>
            <div className='images'>
                <img src={img} alt='Search Not Found' />
            </div>
        </>
    );
};

export default Sresult;