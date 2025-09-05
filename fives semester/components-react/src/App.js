import "./App.css";
import GalleryList from "./gallery/GalleryList";
import paintings from "./data/paintings.json";
import users from "./data/users.json";
import Panel from "./Panel";
import Profile from "./Profile";
import Container from "./Container";
import UsersList from "./users/UsersList";
function App() {
  return (
    <div className="App">
      <Panel title="Nav Panel">
        <p>Panel Props</p>
      </Panel>
      <Profile>
        <h3>Name : Jonh Brawn</h3>
        <h4>Email : jonh@gmail.com</h4>
      </Profile>
      <Container title="Gallery">
        <GalleryList items={paintings} />
      </Container>
      <UsersList users={users} />
    </div>
  );
}

export default App;
