import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Weather = () => {

    const [name, setname] = useState('Delhi');

    const inputevent = (event) => {
        setname(event.target.value);
    }

    const onclk = async () => {
        try {
            let url =`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=74138d35774f7d3a50eb758b44faa9ff`;

            const res = await fetch(url);
            const data = await res.json();

            console.log(data);
        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        onclk();
    },[]);

    return (
        <>

            <div className="page-content page-container" id="page-content">
                <div className="padding">
                    <div className="row container d-flex justify-content-center ">
                        <div className="col-lg-8 grid-margin stretch-card page-item">
                            {/* <!--weather card--> */}

                            <div className="input-group mb-3 mt-3">
                                <input type="text" className="form-control" placeholder="Enter the name of city...." onChange={inputevent} value={name}/>
                                <button className="btn btn-outline-primary" type="buttons" onClick={onclk}>Search</button>
                            </div>
                            
                            <div className="card card-weather">
                                <div className="card-body">
                                    <div className="weather-date-location">
                                        <h3>Friday</h3>
                                        <p className="text-gray">
                                            <span className="weather-date">25 March, 2019</span>
                                            <span className="weather-location">Sydney, Australia</span>
                                        </p>
                                    </div>
                                    <div className="weather-data d-flex">
                                        <div className="mr-auto">
                                            <h4 className="display-3">32
                                                <span className="symbol">&deg;</span>C</h4>
                                            <p>
                                                Cloudy
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <div className="d-flex weakly-weather">
                                        <div className="weakly-weather-item">
                                            <p className="mb-0">
                                                Sun
                                            </p>
                                            <i className="mdi mdi-weather-cloudy"></i>
                                            <p className="mb-0">
                                                30&deg;
                                            </p>
                                        </div>
                                        <div className="weakly-weather-item">
                                            <p className="mb-1">
                                                Mon
                                            </p>
                                            <i className="mdi mdi-weather-hail"></i>
                                            <p className="mb-0">
                                                31&deg;
                                            </p>
                                        </div>
                                        <div className="weakly-weather-item">
                                            <p className="mb-1">
                                                Tue
                                            </p>
                                            <i className="mdi mdi-weather-partlycloudy"></i>
                                            <p className="mb-0">
                                                28&deg;
                                            </p>
                                        </div>
                                        <div className="weakly-weather-item">
                                            <p className="mb-1">
                                                Wed
                                            </p>
                                            <i className="mdi mdi-weather-pouring"></i>
                                            <p className="mb-0">
                                                30&deg;
                                            </p>
                                        </div>
                                        <div className="weakly-weather-item">
                                            <p className="mb-1">
                                                Thu
                                            </p>
                                            <i className="mdi mdi-weather-pouring"></i>
                                            <p className="mb-0">
                                                29&deg;
                                            </p>
                                        </div>
                                        <div className="weakly-weather-item">
                                            <p className="mb-1">
                                                Fri
                                            </p>
                                            <i className="mdi mdi-weather-snowy-rainy"></i>
                                            <p className="mb-0">
                                                31&deg;
                                            </p>
                                        </div>
                                        <div className="weakly-weather-item">
                                            <p className="mb-1">
                                                Sat
                                            </p>
                                            <i className="mdi mdi-weather-snowy"></i>
                                            <p className="mb-0">
                                                32&deg;
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--weather card ends--> */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Weather;