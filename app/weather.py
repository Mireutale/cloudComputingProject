import requests
import os
from openai import OpenAI
from typing import Dict, Any


class WeatherService:
    def __init__(self):
        self.weather_api_key = os.getenv('OPENWEATHER_API_KEY')
        self.openai_api_key = os.getenv('OPENAI_API_KEY')
        self.client = OpenAI(api_key=self.openai_api_key)

    def get_coordinates(self, city: str) -> tuple[float, float]:
        """Get coordinates for a city using Geocoding API"""
        geo_url = f"http://api.openweathermap.org/geo/1.0/direct?q={city}&limit=1&appid={self.weather_api_key}"
        response = requests.get(geo_url)
        data = response.json()
        
        if not data:
            raise ValueError('City not found')
            
        return data[0]['lat'], data[0]['lon']

    def get_weather_data(self, lat: float, lon: float) -> Dict[str, Any]:
        """Get weather data using coordinates"""
        weather_url = f"https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid={self.weather_api_key}&lang=kr&units=metric"
        response = requests.get(weather_url)
        data = response.json()
        print(f"Weather API Response: {data}")  # Debug log
        return data

    def get_clothing_recommendation(self, weather_data: Dict[str, Any]) -> str:
        """Get clothing recommendation using ChatGPT"""
        current = weather_data.get('current', {})
        temp = current.get('temp')
        description = current.get('weather', [{}])[0].get('description', '')
        
        prompt = f"""현재 날씨가 {temp}°C이고 {description}입니다. 
        이 날씨에 적절한 옷차림을 추천해주세요. 
        간단하고 명확하게 2-3문장으로 답변해주세요."""

        try:
            response = self.client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": "You are a helpful fashion advisor. Always respond in Korean."},
                    {"role": "user", "content": prompt}
                ]
            )
            return response.choices[0].message.content
        except Exception as e:
            return f"옷차림 추천을 가져오는데 실패했습니다: {str(e)}"

    def get_weather_info(self, city: str) -> Dict[str, Any]:
        """Get weather information and clothing recommendation"""
        try:
            # Get coordinates
            lat, lon = self.get_coordinates(city)
            
            # Get weather data
            weather_data = self.get_weather_data(lat, lon)
            
            # Check if we have current weather data
            if 'current' not in weather_data:
                raise ValueError('Failed to fetch weather data')
                
            current = weather_data.get('current', {})
            
            # Format weather data
            weather_info = {
                'temp': current.get('temp'),
                'description': current.get('weather', [{}])[0].get('description'),
                'humidity': current.get('humidity'),
                'windSpeed': current.get('wind_speed')
            }
            
            # Get clothing recommendation
            clothing_recommendation = self.get_clothing_recommendation(weather_data)
            
            print(f"Weather Info: {weather_info}")
            print(f"Clothing Recommendation: {clothing_recommendation}")
            return {
                'weather': weather_info,
                'clothingRecommendation': clothing_recommendation
            }
            
        except Exception as e:
            raise Exception(f"Error getting weather info: {str(e)}") 