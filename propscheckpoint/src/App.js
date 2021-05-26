import "./App.css";
import Profile from "./profile/Profile";
import { myinformation } from "./profile/myinformation";

function App() {
  return (
    <div className="App">
      <Profile information={myinformation} />
    </div>
  );
}

export default App;
