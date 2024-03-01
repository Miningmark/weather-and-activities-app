import "./ListItem.css";

export default function ListItem({ activity: { id, name }, onDeleteActivity }) {
  function handleOnClick() {
    const userConfirmation = window.confirm(
      `Do you really want ${name} to delete this entry?`
    );

    if (userConfirmation) {
      onDeleteActivity(id);
    }
  }
  return (
    <li className="listItem">
      <p>{name}</p>
      <button className="deleteButton" onClick={handleOnClick}></button>
    </li>
  );
}
