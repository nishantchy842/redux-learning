import logo from "./logo.svg";
import "./App.css";

function App() {
  //useSelector make box
  //useDispaction for action call

  return (
    <div className="App">
      <ColorPicker onChange={(value, hex) => console.log(value, hex)} />
    </div>
  );
}

export default App;
