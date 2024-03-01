import ListItem from "../ListItem/ListItem";
import { useState } from "react";
import { uid } from "uid";
import "./List.css";

export default function List({}) {
  const [activities, setActivities] = useState([
    { name: "wdwadw", isForGoodWeather: true, id: uid() },
    { name: "xyz", isForGoodWeather: false, id: uid() },
    { name: "abc", isForGoodWeather: true, id: uid() },
    { name: "123", isForGoodWeather: false, id: uid() },
    { name: "test", isForGoodWeather: true, id: uid() },
    { name: "example", isForGoodWeather: false, id: uid() },
    { name: "coding", isForGoodWeather: true, id: uid() },
    { name: "hiking", isForGoodWeather: false, id: uid() },
    { name: "reading", isForGoodWeather: true, id: uid() },
    { name: "playing", isForGoodWeather: true, id: uid() },
  ]);
  const [isGoodWeather, setIsGoodWeather] = useState(true);
  return (
    <ul className="activitiesList">
      {activities
        .filter((activity) => isGoodWeather === activity.isForGoodWeather)
        .map((activity) => (
          <ListItem key={activity.id} activity={activity}></ListItem>
        ))}
    </ul>
  );
}
