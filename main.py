from flask import Flask, jsonify, request
from app.weather import WeatherService
from dotenv import load_dotenv

from flask_cors import CORS
# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS(app)
weather_service = WeatherService()

@app.route('/weather', methods=['GET'])
def get_weather():
    # Get city from query parameters
    city = request.args.get('city', 'Seoul')
    
    try:
        # Get weather info and clothing recommendation
        result = weather_service.get_weather_info(city)
        return jsonify(result)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host="0.0.0.0",port=5000,debug=True)
