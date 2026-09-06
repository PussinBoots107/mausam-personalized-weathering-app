# Mausam Personalized Homepage Prototype

## Run
No build system is required.

Open `onboarding.html` first, or open `index.html` directly.

For the best experience, serve the folder with a local static server, for example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/onboarding.html`.

## Main flow

- `onboarding.html` → choose lifestyle → `index.html`
- `index.html` → switch Health / Fitness / Travel / Family / Agriculture / Commute / Beach / Events
- Metric cards open their corresponding detail pages.
- `travel.html` → saved destinations → `destination.html`
- `locations.html` → add a demo destination
- `alerts.html` → actionable alerts
- `profile.html` → personalize interests

## Important

This prototype uses realistic mock data. The values are NOT live weather data.

The UI is intentionally structured so API integration can be added later. Do not put real API keys into frontend JavaScript. Use a backend/proxy for production API credentials.

Suggested future providers:
- OpenWeatherMap
- Tomorrow.io
- WeatherAPI
- NOAA for US-focused data

The core demonstration is:

USER PROFILE → LIFESTYLE → WEATHER DATA → ACTIONABLE INSIGHT → PERSONALIZED HOMEPAGE
