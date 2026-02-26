"use client";

import { useEffect, useState } from "react";

interface WeatherData {
    temperature: number;
    windSpeed: number;
    humidity: number;
    precipitationProb: number;
    lastUpdated: string;
}

export default function LiveStatus() {
    const [data, setData] = useState<WeatherData | null>(null);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        async function fetchWeather() {
            try {
                const response = await fetch(
                    "https://api.open-meteo.com/v1/forecast?latitude=25.4523&longitude=-80.4095&current=temperature_2m,relative_humidity_2m,wind_speed_10m&hourly=precipitation_probability&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=America%2FNew_York"
                );
                if (!response.ok) throw new Error("Failed to fetch");
                const json = await response.json();

                const currentHour = new Date().getHours();
                const precipProb = json.hourly.precipitation_probability[currentHour] || 0;

                setData({
                    temperature: Math.round(json.current.temperature_2m),
                    windSpeed: Math.round(json.current.wind_speed_10m),
                    humidity: Math.round(json.current.relative_humidity_2m),
                    precipitationProb: precipProb,
                    lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                });
            } catch (e) {
                setError(true);
            }
        }

        fetchWeather();
        const interval = setInterval(fetchWeather, 300000);
        return () => clearInterval(interval);
    }, []);

    if (error) return null;
    if (!data) return (
        <section className="border-t border-gray-200 bg-white px-4 py-8 w-full flex justify-center">
            <div className="h-24 animate-pulse flex flex-col justify-center items-center font-mono text-sm text-gray-400">
                CONNECTING TO TELEMETRY...
            </div>
        </section>
    );

    return (
        <section id="status" className="border-t border-gray-200 bg-white px-4 sm:px-6 lg:px-8 py-16 w-full">
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest !mt-0 !mb-0">
                        Live Gate 18 Telemetry
                    </h2>
                    <span className="text-xs text-gray-500 font-mono tracking-tight">
                        LAST UPDATED: {data.lastUpdated}
                    </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200 border border-gray-200 bg-gray-50 rounded-sm">
                    <div className="p-6 flex flex-col justify-center text-center">
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-3 font-semibold">Temperature</span>
                        <span className="text-4xl font-mono tracking-tight text-gray-900">{data.temperature}°F</span>
                    </div>
                    <div className="p-6 flex flex-col justify-center text-center">
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-3 font-semibold">Wind</span>
                        <span className="text-4xl font-mono tracking-tight text-gray-900">{data.windSpeed} <span className="text-lg">MPH</span></span>
                    </div>
                    <div className="p-6 flex flex-col justify-center text-center">
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-3 font-semibold">Humidity</span>
                        <span className="text-4xl font-mono tracking-tight text-gray-900">{data.humidity}%</span>
                    </div>
                    <div className="p-6 flex flex-col justify-center text-center">
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-3 font-semibold">Precip Prob</span>
                        <span className="text-4xl font-mono tracking-tight text-gray-900">{data.precipitationProb}%</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
