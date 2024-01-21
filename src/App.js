// import logo from "./logo.svg";
import "./App.css";
// import { ColorPicker } from "antd";
import BoxComponent from "./redux/BoxComponent";
import { useDispatch } from "react-redux";
import { setChangeBackgroundColor } from "./redux/reduces";
import CustomButtons from "./redux/components/CustomButtons";


function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      {/* <ColorPicker onChange={(value, hex) => console.log(value, hex)} /> */}
      <BoxComponent/>
      <CustomButtons/>
    </div>
  );

  //useSelector make box
  //useDispaction for action call
}

export default App;

//A --ADD
//C --COMMIT
//P --PUSH

// git checkout main -- change to branch main
// git branch nelson  -- goes to  branch main

//git fetch
//git pull origin develop
