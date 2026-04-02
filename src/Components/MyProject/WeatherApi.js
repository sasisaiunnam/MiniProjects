import { useState } from "react";

// Pro tip: In a real project, move this to a .env file as REACT_APP_WEATHER_KEY
const API_KEY = "2d6f74acbcd1189b33efc9db73ab739f"; 

export default function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    const trimmedCity = city.trim();
    if (!trimmedCity) return;

    setLoading(true);
    setError("");
    // We don't clear data immediately so the old UI stays until the new one loads
    
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        trimmedCity
      )}&units=metric&appid=${API_KEY}`;
      
      const res = await fetch(url);
      
      if (!res.ok) {
        if (res.status === 404) throw new Error("City not found. Try another!");
        if (res.status === 401) throw new Error("Invalid API key - Check your settings.");
        throw new Error("Unable to fetch weather at this time.");
      }
      
      const json = await res.json();
      setData(json);
    } catch (e) {
      setData(null); // Clear data only if there's an error
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 p-4">
      {/* Container - Using Onyx-style colors to match your theme */}
      <div className="w-full max-w-md bg-[#353935] rounded-2xl shadow-2xl p-6 border border-slate-700">
        <h2 className="text-2xl font-bold text-white text-center mb-1">
          Weather App
        </h2>
        <p className="text-sm text-slate-400 text-center mb-6">
          Get real-time weather updates
        </p>

        {/* Search Form */}
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name..."
            className="flex-1 px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white text-sm outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold disabled:opacity-50 transition-colors"
          >
            {loading ? "..." : "Search"}
          </button>
        </form>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-900/30 border border-red-500/50 rounded-lg">
            <p className="text-center text-red-400 text-sm font-medium">{error}</p>
          </div>
        )}

        {/* Loading Spinner Placeholder */}
        {loading && !data && (
           <div className="flex justify-center my-10">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
           </div>
        )}

        {/* Result UI */}
        {data && (
          <div className={`space-y-4 transition-opacity duration-300 ${loading ? 'opacity-50' : 'opacity-100'}`}>
            <div className="text-center">
              <p className="text-xl font-bold text-white">
                {data.name}, {data.sys.country}
              </p>
              <p className="text-sm capitalize text-slate-400">
                {data.weather[0].description}
              </p>
            </div>

            <div className="flex items-center justify-center gap-6 bg-slate-800/50 rounded-2xl p-6">
              <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} // Changed to @4x for better quality
                alt="weather icon"
                className="w-20 h-20"
              />
              <div>
                <p className="text-5xl font-extrabold text-white">
                  {Math.round(data.main.temp)}°C
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Feels like {Math.round(data.main.feels_like)}°C
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
                <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Humidity</p>
                <p className="text-lg font-bold text-white">{data.main.humidity}%</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
                <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Wind Speed</p>
                <p className="text-lg font-bold text-white">{data.wind.speed} m/s</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}