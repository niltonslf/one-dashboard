import React, { useState, useEffect } from "react";
import "./styles.css";

import WidgetSmall from "../../components/Widgets/small";
import CalendarWidget from "../../components/Widgets/CalendarWidget";
import TaskWidget from "../../components/Widgets/TaskWidget";

import WeatherService from "../../services/WeatherService";
import PictureService from "../../services/PictureService";

const initialWeather = {
  city: "city",
  description: "weather",
  temperature: { temp: 0, min: 0, max: 0 }
};

export default function Dashboard() {
  const [weather, setWeather] = useState(initialWeather);
  const [weatherPicture, setWeatherPicture] = useState("");
  const [hour, setHour] = useState("00:00");

  useEffect(() => {
    const weatherData = WeatherService.fetch();
    weatherData.then(data => {
      setWeather(data); // salva os dados do clima
      // busca uma imagem relacionada ao clima
      PictureService.getPictureFromKeyword(data.description).then(picture => {
        setWeatherPicture(picture);
      });
    });
  }, []);

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setHour(`${date.getHours()}:${date.getMinutes()}`);
    }, 1000);
  }, []);

  return (
    <div className="page-container">
      <nav className="navbar-container">Navbar</nav>
      <div className="body-container">
        <div className="row first">
          <WidgetSmall
            title={weather.description}
            bodyLeft={`${weather.temperature.min}º /${weather.temperature.max}º`}
            bodyRight={hour}
            footer={weather.city}
            backgroundSource={weatherPicture}
          />
          <WidgetSmall
            title="BTC"
            bodyRight="USD 20.00,00"
            footer="Última atualização: 15min"
          />
          <WidgetSmall
            title="ITAUSA"
            bodyRight="R$ 20,00"
            footer="Última atualização: 15min"
            color="purple"
          />
          <WidgetSmall
            title="XPML11"
            bodyRight="R$ 120,00"
            footer="Última atualização: 15min"
            color="pink"
          />
          <WidgetSmall
            title="Tesouro direto"
            bodyRight="R$ 20,00"
            footer="Última atualização: 15min"
            color="blue"
          />
        </div>

        <div className="row second">
          <CalendarWidget />
          <TaskWidget />
          <div className="widget-default">Widget</div>
        </div>

        <div className="row third">
          <div className="widget-default">Widget</div>
          <div className="widget-default">Widget</div>
          <div className="widget-default">Widget</div>
        </div>
      </div>
    </div>
  );
}
