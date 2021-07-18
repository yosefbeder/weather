import Home from './pages/Home';
import CityWeather from './pages/CityWeather';

const routes = [
  { path: '/', component: Home },
  { path: '/city/:cityName', component: CityWeather },
];

export default routes;
