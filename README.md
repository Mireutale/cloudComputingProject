<p align="center">
    <img src="./pusanUnibersity_signature04.png" alt="부산대학교로고" width="250px">
</p>

# cloudComputingProject
> 2025년 1학기 부산대학교 클라우드컴퓨팅 059분반 팀2 프로젝트 코드  
> 2025, first semester, Pusan National University Cloud Computing 059 and Team 2 Project Code

# 목차
- [기술스택](#기술스택)
- [Weather API Service](#weather-api-service)
- [Team2_Member](#team2_member)

## 기술스택
- ![BackEnd](https://img.shields.io/badge/TechStack-BackEnd-green)
    - ![Python](https://img.shields.io/badge/python-blue?logo=python&logoColor=white)
    - ![Flask](https://img.shields.io/badge/Flask-black?logo=Flask&logoColor=white)
    - ![Open AI API](https://img.shields.io/badge/OpenAI-white?logo=OpenAI&logoColor=black)
    - ![OpenWeather API](https://img.shields.io/badge/TechStack-OpenWeather%20API-orange)
- ![FrontEnd](https://img.shields.io/badge/TechStack-FrontEnd-green)
    - ![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
    - ![Typescript](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)
    - ![React](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge)
    - ![Tailwind CSS](https://img.shields.io/badge/tailwindcss-0F172A?&logo=tailwindcss)
- ![Cloud Server](https://img.shields.io/badge/TechStack-Cloud%20Server-green)

## Weather API Service

Flask를 사용한 날씨 정보 API 서비스입니다.

## 설치 방법

1. 필요한 패키지 설치:
```bash
pip install -r requirements.txt
```

2. 환경 변수 설정:
- `.env` 파일을 생성하고 다음 내용을 추가하세요:
```
OPENWEATHER_API_KEY=your_api_key_here
```
- `your_api_key_here`를 OpenWeather API 키로 교체하세요.

## 실행 방법

```bash
python -m flask run
```

## API 사용 방법

### 날씨 정보 조회
- 엔드포인트: `/weather`
- 메소드: GET
- 파라미터:
  - `city`: 도시 이름 (기본값: Seoul)
- 예시:
  ```
  GET /weather?city=Tokyo
  ```

## OpenWeatherAPI 응답 예시
```json
{
  "city": "Seoul",
  "current": {
    "temp": 15.5,
    "feels_like": 14.8,
    "humidity": 65,
    "pressure": 1012,
    "weather": "맑음",
    "wind_speed": 2.1,
    "clouds": 20
  },
  "daily": [
    {
      "dt": 1672918169,
      "temp": {
        "day": 16.2,
        "min": 12.5,
        "max": 18.0
      },
      "weather": [{
        "description": "맑음",
        "icon": "01d"
      }]
    }
  ]
}
```

## Team2_Member
<div align="center">

<table>
  <thead>
    <tr>
      <th align="center">역할</th>
      <th align="center">이름</th>
      <th align="center">GitHub 프로필</th>
      <th align="center">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">BackEnd</td>
      <td align="center">강태진</td>
      <td align="center">
        <img src="https://github.com/mireutale.png" width="50"/><br>
        <a href="https://github.com/mireutale">@mireutale</a>
      </td>
      <td align="center">xowls0319@pusan.ac.kr</td>
    </tr>
    <tr>
      <td align="center">FrontEnd</td>
      <td align="center">daulet</td>
      <td align="center">
        <img src="https://github.com/suyenish.png" width="50"/><br>
        <a href="https://github.com/suyenish">@suyenish</a>
      </td>
      <td align="center">daulet2001@pusan.ac.kr</td>
    </tr>
    <tr>
      <td align="center">Deployment (배포)</td>
      <td align="center">윤민혁</td>
      <td align="center">
        <img src="https://github.com/---.png" width="50"/><br>
        <a href="https://github.com/---">@---</a>
      </td>
      <td align="center">ghini7170@naver.com</td>
    </tr>
    <tr>
      <td align="center">Announcement (발표)</td>
      <td align="center">김진영</td>
      <td align="center">
        <img src="https://github.com/---.png" width="50"/><br>
        <a href="https://github.com/---">@---</a>
      </td>
      <td align="center">jin41333@naver.com</td>
    </tr>
  </tbody>
</table>

</div>
