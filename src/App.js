import { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";

import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [activities, setActivities] = useLocalStorageState("activityData", {
    defaultValue: [],
  });

  function handleAddActivity(updateAddAtivity) {
    setActivities([...activities, updateAddAtivity]);
  }

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();
      setWeatherData(data);
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
      <main>
        <h1>
          {weatherData.condition} {weatherData.temperature}°C
        </h1>
        <Form onAddActivity={handleAddActivity} />
        <List
          weatherData={weatherData}
          activities={activities}
          onDeleteActivity={handleDeleteActivity}
        />
      </main>
    </>
  );
}

export default App;
