const Users = () => {
  const usersArr = [
    {
      id: 1,
      age: 17,
      name: "John",
    },
    {
      id: 2,
      age: 23,
      name: "Kate",
    },
    {
      id: 3,
      age: 3,
      name: "Bob",
    },
  ];
  return (
    <ul>
      {usersArr.map(({ id, age, name }) => (
        <li key={id}>
          <p>Age: {age}</p>
          <p>Name: {name}</p>
        </li>
      ))}
    </ul>
  );
};
export default Users;
