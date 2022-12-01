import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Weather = () => {

    const [name1, setname] = useState('Delhi');
    const [tempInfo, setTempInfo] = useState({});

    const inputevent = (event) => {
        setname(event.target.value);
    }

    const onclk = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${name1}&units=metric&appid=74138d35774f7d3a50eb758b44faa9ff`;

            const res = await fetch(url);
            const data = await res.json();

            console.log(data);

            const { temp, feels_like, humidity, pressure } = data.main;
            console.log(temp);

            const { main: weathermood } = data.weather[0];
            const { name: cityname } = data;
            const { speed } = data.wind;
            const { country } = data.sys;
            const date = new Date();
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let month = months[date.getMonth()];
            const fdate = date.getDate() + " " + month + " " + date.getFullYear();
            const ftime = date.toLocaleTimeString();

            const myweatherinfo = {
                temp,
                feels_like,
                humidity,
                pressure,
                weathermood,
                cityname,
                speed,
                country,
                fdate,
                ftime
            };

            setTempInfo(myweatherinfo);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        onclk();
    }, []);

    return (
        <>

            <div className="page-content page-container" id="page-content">
                <div className="padding">
                    <div className="row container d-flex justify-content-center ">
                        <div className="col-lg-8 grid-margin stretch-card page-item">
                            {/* <!--weather card--> */}

                            <div className="input-group mb-3 mt-3">
                                <input type="text" className="form-control" placeholder="Enter the name of city...." onChange={inputevent} value={name1} />
                                <button className="btn btn-outline-primary" type="buttons" onClick={onclk}>Search</button>
                            </div>

                            <div className="card card-weather">
                                <div className="card-body">
                                    <div className="weather-date-location">
                                        <h3>Friday</h3>
                                        <p className="text-gray">
                                            <span className="weather-date">{tempInfo.fdate} </span><br></br>
                                            {/* <span className="weather-location">{tempInfo.cityname}, {tempInfo.country}</span> */}
                                            <span>{tempInfo.ftime}</span>
                                        </p>
                                    </div>
                                    <div className="weather-data d-flex">
                                        <div className="mr-auto">
                                            <h4 className="display-3">{tempInfo.temp}
                                                <span className="symbol">&deg;</span>C</h4>
                                            <span>
                                                Feels Like : {tempInfo.feels_like}
                                                <span className="symbol">&deg;</span>C
                                            </span>
                                            <p>
                                                {tempInfo.weathermood}
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div className="card-body p-0" style={{ fontSize: '13px' }}>
                                    <div className='row '>
                                        <div className="col-3 text-center my-2">
                                            <span>Humidity :</span><br></br>
                                            <span>{tempInfo.humidity}%</span>
                                        </div>

                                        <div className="col-3 text-center my-2">
                                            <span>pressure :</span><br></br>
                                            <span>{tempInfo.pressure} mbar</span>
                                        </div>

                                        <div className="col-3 text-center my-2">
                                            <span>Speed :</span><br></br>
                                            <span>{tempInfo.speed} km/h</span>
                                        </div>

                                        <div className="col-3 text-center my-2">
                                            <span>Location :</span><br></br>
                                            <span>{tempInfo.cityname}, {tempInfo.country}</span>
                                        </div>

                                    </div>



                                    {/* <div className="d-flex weakly-weather"> */}
                                    {/* <div className="weakly-weather-item">
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
                                        
                                    </div> */}
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