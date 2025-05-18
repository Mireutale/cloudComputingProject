interface WeatherData {
    temp: number;
    description: string;
    humidity: number;
    windSpeed: number;
  }
  
  interface Props {
    weatherData: WeatherData;
    recommendation: string;
  }
  
  export default function OutfitRecommendation({ weatherData, recommendation }: Props) {
    return (
      <div className="space-y-4">
        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="font-semibold text-lg mb-2">현재 날씨</h2>
          <p>기온: {weatherData.temp}°C</p>
          <p>상태: {weatherData.description}</p>
          <p>습도: {weatherData.humidity}%</p>
          <p>풍속: {weatherData.windSpeed} m/s</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-md">
          <h2 className="font-semibold text-lg mb-2">추천 옷차림</h2>
          <p>{recommendation}</p>
        </div>
      </div>
    );
  }
  