import "./App.css";
import BuildInStyles from "./build-ic-css/BuildInStyles";
import FollowButton from "./preprocesors/FollowButton";
import LoginButton from "./preprocesors/LoginButton";
import AlertVanile from "./vanileStyles/AlertVanile";

function App() {
  return (
    <div className="App">
      <BuildInStyles />
      <AlertVanile isOutlined={true} isElevated={true}>
        Input your email!
      </AlertVanile>
      <AlertVanile variant="error" isOutlined={false} isElevated={true}>
        Input your email!
      </AlertVanile>
      <AlertVanile variant="success" isOutlined={true} isElevated={false}>
        Input your email!
      </AlertVanile>
      <LoginButton />
      <FollowButton />
    </div>
  );
}

export default App;
