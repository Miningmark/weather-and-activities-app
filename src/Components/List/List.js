import ListItem from "../ListItem/ListItem";
import "./List.css";

export default function List({ activities, weatherData, onDeleteActivity }) {
  return (
    <ul className="activitiesList">
      {activities
        .filter(
          (activity) => weatherData.isGoodWeather === activity.isForGoodWeather
        )
        .map((activity) => (
          <ListItem
            key={activity.id}
            activity={activity}
            onDeleteActivity={onDeleteActivity}
          ></ListItem>
        ))}
    </ul>
  );
}
