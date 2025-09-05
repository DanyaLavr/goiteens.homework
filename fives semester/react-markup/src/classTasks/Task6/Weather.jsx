const Weather = ({ temperature }) => {
  return temperature > 20 ? (
    <p>На вулиці тепло</p>
  ) : (
    <p>На вулиці прохолодно</p>
  );
};
export default Weather;
