import logo from "./logo.svg"; 
import "./App.css";
import SpModal from "./redux/Model";
import ProgressBar from "./redux/progress";
import { ColorPicker } from "antd";

function App() {
  //useSelector make box
  //useDispaction for action call

  return (
    <div className="App">
      {/* <ColorPicker onChange={(value, hex) => console.log(value, hex)} />
      <ProgressBar/> */}
      <SpModal/>
    </div>
  );
}

export default App;