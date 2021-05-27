import "./App.css";
import Profile from "./profile/Profile";
import { myinformation } from "./profile/myinformation";

function App() {
  const handelName = (name) => {
    alert(name);
  };
  return (
    <div className="App">
      <Profile information={myinformation} handelName={handelName}>
        <img
          src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png"
          alt="pfoto"
          style={{ width: "15%" }}
        />
      </Profile>
    </div>
  );
}

export default App;
