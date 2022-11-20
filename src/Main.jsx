import React, { useState } from 'react';
import Item1 from './Item1';
import Sdata from './Sdata';


const arr = [... new Set(Sdata.map((val) => {
    return val.type;
})), "all"];

console.log(arr);



const Main = () => {

    const [items, setItems] = useState(Sdata);
    const [menu, setmenu] = useState(arr);

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

                    {/* {
                        menu.map((currval)=> {
                            return(
                                <>
                                <button className='btn btn-warning' onClick={() => filterItem(currval)}>{currval}</button>
                                </>
                            );
                        })
                    } */}
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
                                <Item1 key={val.toString()} name={val.name} desc={val.desc} img={val.img}/>
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