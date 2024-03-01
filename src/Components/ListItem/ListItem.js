import "./ListItem.css";

export default function ListItem({ activity: { id, name } }) {
  function handleOnClick() {
    const userConfirmation = window.confirm(
      `Do you really want ${name} to delete this entry?`
    );

    if (userConfirmation) {
      console.log("gelöscht", id);
    }
    console.log("test");
  }
  return (
    <li className="listItem">
      <p>{name}</p>
      <button className="deleteButton" onClick={handleOnClick}></button>
    </li>
  );
}
