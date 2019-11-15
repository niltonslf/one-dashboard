import axios from "axios";

class WeatherService {
  constructor() {
    this.key = process.env.REACT_APP_WEATHER_KEY; // FIXME: Adiciona key num arquivo .env
    // Criar forma de obter as coordenadas do usuário logado
    this.coords = {
      lon: -49.290821,
      lat: -25.50395
    };
    this.apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${this.coords.lat}&lon=${this.coords.lon}&lang=pt&appid=${this.key}`;
  }

  async fetch() {
    // busca dados na api do openWeather
    const response = await axios.get(`${this.apiUrl}`);
    const { data } = response;

    // dados da temperatura
    const temperature = {
      temp: this.kelvinToCelsius(data.main.temp),
      min: this.kelvinToCelsius(data.main.temp_min),
      max: this.kelvinToCelsius(data.main.temp_max)
    };

    // descrição do clima
    const description = data.weather[0].main;
    // nome da cidade
    const city = data.name;

    return {
      temperature,
      city,
      description
    };
  }

  /**
   * Converte temperatura de kelvin para celsius
   * @param {*} kelvinTemp
   */
  kelvinToCelsius(kelvinTemp) {
    return Math.round(kelvinTemp - 273.15);
  }
}

export default new WeatherService();
