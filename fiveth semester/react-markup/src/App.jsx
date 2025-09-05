import "./App.css";
import Task1 from "./classTasks/Task1/Task1";
import Task2 from "./classTasks/Task2/Task2";
import { Task3 } from "./classTasks/Task3/Task3";
import { Task4 } from "./classTasks/Task4/Task4";
import { Task5 } from "./classTasks/Task5/Task5";
import Weather from "./classTasks/Task6/Weather";
import Calendar from "./classTasks/calendar/Calendar";
import Task8 from "./classTasks/task8/Task8";
import UserLogin from "./classTasks/userLogin/UserLogin";
import Users from "./classTasks/users/Users";
import BookList from "./components/bookList/BookList";
import { Card } from "./components/card/Card";
import { Mailbox } from "./components/mailbox/Mailbox";
function App({ txt }) {
  return (
    <div className="App">
      <h1>{txt}</h1>
      <Mailbox />
      <Card
        url="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        name="lorem100"
        price="0.000021 BTC"
      />
      <BookList />

      <>
        <Task1 />
        <Task2 />
        <Task3
          url="https://i.ytimg.com/vi/QSleKjOmEZk/maxresdefault.jpg"
          name="Movie"
        />
        <Task4
          colors={[
            { id: 1, name: "red" },
            { id: 2, name: "blue" },
            { id: 3, name: "yellow" },
          ]}
        />
        <Task5 href="https://www.google.com.ua/?hl=uk" />
        <Weather temperature={11} />
        <Task8 />
        <Users />
        <Calendar />
        <UserLogin />
      </>
    </div>
  );
}

export default App;
