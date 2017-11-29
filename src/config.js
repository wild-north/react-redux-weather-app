export const getApiUrl = (cityName) => (
    `http://api.openweathermap.org/data/2.5/weather?q=${ cityName }&APPID=d2eeaf4dae5c05563d31da5c8f85d62d`
);