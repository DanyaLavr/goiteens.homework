import PropTypes from "prop-types";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w200";

export default function CastItem({ profile_path, name, character }) {
  return (
    <li
      style={{
        maxWidth: 200,
      }}
    >
      <img src={`${IMAGE_BASE_URL}${profile_path}`} alt="" />
      <h2>Name: {name}</h2>
      <h4>Character: {character}</h4>
    </li>
  );
}
CastItem.propTypes = {
  profile_path: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
};
