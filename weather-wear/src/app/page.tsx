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

  const handleSearch = async (location: string) => {
    try{
    const res = await fetch(`http://18.217.184.182:5000/weather?city=${location}`);
    const data = await res.json();
    setWeatherData(data.weather);
    setRecommendation(data.clothingRecommendation);
    }
    catch(err){
    console.error("API 호출 실패",err);
    }
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
