const Calendar = () => {
  const todayIs = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  return <p>Today is : {todayIs.toLocaleDateString("uk-UA", options)}</p>;
};
export default Calendar;
