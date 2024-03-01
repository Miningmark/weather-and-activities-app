import { useState, useEffect } from "react";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();
      setWeatherData(data);
      console.log(data); // Weather infos
      setIsLoading(false);
    }

    const interval = setInterval(() => {
      getData(); // Enable after launch !
    }, 5000);

    return () => {
      clearInterval(interval);
      console.log("Interval cleared");
    };
  }, []);
  // Loading screen
  if (isLoading) {
    return (
      <h3 style={{ textAlign: "center", marginTop: "50%" }}>Loading weather</h3>
    );
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        {weatherData.condition} {weatherData.temperature}°C
      </h1>
    </>
  );
}

export default App;
