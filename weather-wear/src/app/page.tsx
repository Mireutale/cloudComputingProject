'use client';

import { useState } from 'react';
import WeatherForm from '@/components/WeatherForm';
import OutfitRecommendation from '@/components/OutfitRecommendation';

interface WeatherData {
  temp: number;
  description: string;
  humidity: number;
  windSpeed: number;
}

export default function HomePage() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [recommendation, setRecommendation] = useState("");

  const handleSearch = (location: string) => {
    // MOCKED response
    const mockWeather: WeatherData = {
      temp: 17,
      description: "흐림",
      humidity: 72,
      windSpeed: 4.5,
    };

    const mockGPTRecommendation = `
      오늘은 흐리고 기온이 낮으므로 가벼운 자켓이나 바람막이를 추천합니다.
      긴팔 셔츠와 청바지를 입고, 바람이 불 수 있으니 얇은 스카프도 좋습니다.
    `;

    setWeatherData(mockWeather);
    setRecommendation(mockGPTRecommendation);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-b from-blue-100 to-blue-200">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">오늘 뭐 입지?</h1>
      <div className="w-full max-w-xl bg-white p-6 rounded-xl shadow-md space-y-6">
        <WeatherForm onSearch={handleSearch} />
        {weatherData && recommendation && (
          <OutfitRecommendation
            weatherData={weatherData}
            recommendation={recommendation}
          />
        )}
      </div>
    </main>
  );
}
