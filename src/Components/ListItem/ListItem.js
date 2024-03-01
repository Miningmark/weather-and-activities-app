import "./ListItem.css";

export default function ListItem({ activity: { id, name } }) {
  function handleOnClick() {
    console.log("test", id);
  }
  return (
    <li className="listItem">
      <p>{name}</p>
      <button className="deleteButton" onClick={handleOnClick}></button>
    </li>
  );
}
