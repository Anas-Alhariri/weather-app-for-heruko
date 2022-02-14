import './App.scss';
import Navbar from './components/navbar/Navbar';
import WeatherCard from './components/weatherCard/WeatherCard';
import BodyWrapper from './components/bodyWrapper/BodyWrapper';
import { useState } from 'react';
import { AppContext } from './_globals/AppContext';


function App() {
  const [weatherObject, setWeatherObject] = useState(null)


  return (
    <>
      <AppContext.Provider value={{ weatherObject, setWeatherObject }}>
        <Navbar />
        <BodyWrapper>
          <WeatherCard weather={weatherObject} />
        </BodyWrapper>
      </AppContext.Provider>
    </>
  );
}

export default App;
