import PropTypes from "prop-types";
import { nanoid } from "nanoid";
const User = ({ userName, userAge, isStudent, userHobbies = [], userCity }) => {
  return (
    <ul>
      <li>Name: {userName}</li>
      <li>Age: {userAge}</li>
      {isStudent && <li>I am a student</li>}
      {userHobbies.length && (
        <ul>
          {userHobbies.map((hobbie) => (
            <li key={nanoid()}>{hobbie}</li>
          ))}
        </ul>
      )}
      <li>City: {userCity}</li>
    </ul>
  );
};
export default User;

User.propTypes = {
  userName: PropTypes.string.isRequired,
  userAge: PropTypes.number.isRequired,
  userCity: PropTypes.string.isRequired,
  isStudent: PropTypes.bool.isRequired,
  userHobbies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
