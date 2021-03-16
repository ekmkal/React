import './App.css';
import cityWeather from './city-weather.json';
import ListOfCities from './components/ListOfCities';

function App() {
  return (
    <div className="app">
      <h1 className="mainHeader">Weather</h1>
      <ListOfCities cityWeather={cityWeather}/>
    </div>
  );
};

export default App;
