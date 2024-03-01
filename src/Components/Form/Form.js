import "./Form.css";

import { useState } from "react";
import { uid } from "uid";

export default function Form({ onAddActivity }) {
  const [name, setName] = useState("");
  const [isForGoodWeather, setIsForGoodWeather] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();
    const updateAddAtivity = {
      id: uid(),
      name,
      isForGoodWeather,
    };

    onAddActivity(updateAddAtivity);

    setName("");
    setIsForGoodWeather(false);
  }

  return (
    <>
      <h1>Add new Activity</h1>
      <form className="activity__form__item" onSubmit={handleFormSubmit}>
        <div className="activity__form__item">
          <label htmlFor="activity-name" className="activity__form__label">
            Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            name="activity-name"
            id="activity-name"
            className="activity__form__input"
          />
        </div>

        <div className="activity__form__item">
          <label
            htmlFor="activity-isForGoodWeather"
            className="activity__form__label"
          >
            Good weather activity:
          </label>
          <input
            type="checkbox"
            checked={isForGoodWeather}
            onChange={(event) => setIsForGoodWeather(event.target.checked)}
            name="activity-isForGoodWeather"
            id="activity-isForGoodWeather"
            className="activity__form__input"
          />
        </div>

        <div className="activity__form__button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
