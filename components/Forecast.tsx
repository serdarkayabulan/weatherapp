import Degree from './Degree'
import Sunrise from './Icons/Sunrise'
import Sunset from './Icons/Sunset'
import Tile from './Tile'

import {
  getHumidityValue,
  getWindDirection,
  getVisibilityValue,
  getSunTime,
  getPop,
} from './../helpers'

import { forecastType } from '../types'

type Props = {
  data: forecastType
}

const Forecast = ({ data }: Props) => {
  const today = data.list[0]

  return (
     
    //<div className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center  md:px-10 lg:p-8 h-full sm:h-[500px] lg:h-[900px] bg-gradient-to-br from-sky-400  to-yellow-400 bg-opacity-30 backdrop-blur-ls rounded-lg drop-shadow-lg  text-slate-950 shadow-lg">
    <div>
      <div className="w-full flex flex-col items-center mx-auto   drop-shadow-lg" >
        <section className="text-center">
          <div className='flex flex-wrap items-center'>
          <img
                alt={`weather-icon-${data.list[0].weather[0].description}`}
                src={`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`}
              />
          <h2 className="text-2xl font-black text-slate-950">
            {data.name} <span className="font-thin">{data.country}</span>
          </h2>
          
          </div>
          <h1 className="text-4xl font-extrabold text-slate-950 ">
          <Degree temp={Math.round(today.main.temp)} />
          </h1>
          <p className="text-xl text-slate-950">
            {today.weather[0].main} ({today.weather[0].description})
          </p>
          <p className="text-xl text-slate-950">
            High: <Degree temp={Math.ceil(today.main.temp_max)} /> - 
            Low:{' '}
            <Degree temp={Math.floor(today.main.temp_min)} />
          </p>
        </section>

        <section className="w-full flex overflow-x-auto scrollbar-thin  mt-4 pb-4 mb-4 ">
          {data.list.map((item, i) => (
            <div
              key={i}
              className="inline-block text-center w-[50px] flex-shrink-0"
            >
              <p className="text-md">
                {i === 0 ? 'Now' : item.dt_txt.substring(16,11)}
              </p>
              <img
                alt={`weather-icon-${item.weather[0].description}`}
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              />
              <p className="text-lg font-bold">
                <Degree temp={Math.round(item.main.temp)} />
              </p>
            </div>
          ))}
        </section>

        <section className="w-full flex  flex-col  items-center justify-between text-slate-950">
          <div className='w-full flex flex-wrap mb-2'>
          <div className="w-[200px] flex px-4 py-2 text-md items-center  bg-white bg-opacity-20 backdrop-blur-ls rounded-full drop-shadow-lg  mx-2">
            <Sunrise /> <span className="m-2 font-bold">{getSunTime(data.sunrise)}</span>
            <p className='text-md'>Sunrise</p>
          </div>
          <div className="w-[200px] flex px-4 py-2  text-md  items-center bg-white bg-opacity-20 backdrop-blur-ls rounded-full drop-shadow-lg  mx-2">
            <Sunset /> <span className="m-2 font-bold">{getSunTime(data.sunset)}</span>
            <p className='text-md'>Sunset</p>
          </div>
          </div>
          

          <Tile
            icon="wind"
            title="Wind"
            info={`${Math.round(today.wind.speed)} km/h`}
            description={`${getWindDirection(
              Math.round(today.wind.deg)
            )}, gusts 
            ${today.wind.gust.toFixed(1)} km/h`}
          />
          <Tile
            icon="feels"
            title="Feels like"
            info={<Degree temp={Math.round(today.main.feels_like)} />}
            description={`Feels ${
              Math.round(today.main.feels_like) < Math.round(today.main.temp)
                ? 'colder'
                : 'warmer'
            }`}
          />
          <Tile
            icon="humidity"
            title="Humidity"
            info={`${today.main.humidity} %`}
            description={getHumidityValue(today.main.humidity)}
          />
          <Tile
            icon="pop"
            title="Precipitation"
            info={`${Math.round(today.pop * 100)}%`}
            description={`${getPop(today.pop)}, clouds at ${today.clouds.all}%`}
          />
          <Tile
            icon="pressure"
            title="Pressure"
            info={`${today.main.pressure} hPa`}
            description={` ${
              Math.round(today.main.pressure) < 1013 ? 'Lower' : 'Higher'
            } than standard`}
          />
          <Tile
            icon="visibility"
            title="Visibility"
            info={`${(today.visibility / 1000).toFixed()} km`}
            description={getVisibilityValue(today.visibility)}
          />
        </section>
      </div>
    </div>
  )
}

export default Forecast