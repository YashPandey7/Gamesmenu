import React, { useState } from 'react';
import Menu from './Menu';
import Sresult from './Sresult';

const Search = () => {
    const [img, setImg] = useState('');
    const inputevent = (event) => {
        const data = event.target.value;
        setImg(data);
    };

    return (
        <>
            <Menu/>
            <div className='search'>
                <input type='text' placeholder='Search ...' value={img} onChange={inputevent} />
            </div>
            {img === "" ? null : <Sresult search={img} />}
        </>
    );
};

export default Search;