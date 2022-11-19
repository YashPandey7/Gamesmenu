import React, { useState } from 'react';
import Item1 from './Item1';
import Sdata from './Sdata';

const Main = () => {

    const [items, setItems] = useState(Sdata);

    const filterItem = (categItem) => {
        const updatedItems = Sdata.filter((curElem) => {
            return curElem.type === categItem;
        });

        setItems(updatedItems);
    }


    return (
        <>
            <div className='text-center mt-3'>
                <h1>Games</h1>
                <hr />
            </div>

            <div className='menu-tabs container'>
                <div className='menu-tab d-flex justify-content-around'>
                    <button className='btn btn-warning' onClick={() => filterItem("Shooting")}>Shooting Game</button>
                    <button className='btn btn-warning' onClick={() => filterItem("Racing")}>Racing Game</button>
                    <button className='btn btn-warning' onClick={() => filterItem("openworld")}>Openworld Game</button>
                    <button className='btn btn-warning' onClick={() => setItems(Sdata)}>All</button>
                </div>
            </div>

            {/* Food items */}
            <div className='container' style={{ marginTop: '50px' }}>
                <div className='row'>

                    {/* Single card items */}

                    {
                        items.map((val) => {
                            return (
                                <>
                                <Item1 name={val.name} desc={val.desc} img={val.img}/>
                                </>
                            );
                        })
                    }

                </div>
            </div>


        </>
    );
};

export default Main;