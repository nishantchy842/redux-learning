// import logo from "./logo.svg";
import "./App.css";
import { ColorPicker } from "antd";
import BoxComponent from "./redux/BoxComponent";
import { useDispatch } from "react-redux";
import { setChangeBackgroundColor } from "./redux/reduces";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <BoxComponent />
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
