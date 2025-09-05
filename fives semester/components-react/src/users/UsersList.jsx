import User from "./User";
import { nanoid } from "nanoid";

const UsersList = ({ users }) => {
  return (
    <div className="users__container">
      <h2>Users</h2>
      {users.map(({ name, age, isStudent, hobbies, address }) => (
        <User
          key={nanoid()}
          userName={name}
          userAge={age}
          isStudent={isStudent}
          userCity={address.city}
          userHobbies={hobbies}
        />
      ))}
    </div>
  );
};

export default UsersList;
