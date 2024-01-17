function ListGroup() {
  const options = ["item1", "item2", "item3","item4", "item5", "item6"];
  return (
    <>
      <h1 className="">Todo</h1>
      <ul className="list-group">
        {options.map((item) => (
          <li className="list-group-item">
            {item.charAt(0).toUpperCase() + item.substring(1)}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
