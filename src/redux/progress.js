import {
    incrementNumber,
    decrementNumber,
    increment,
    decrement,
  } from "./reduces";
  import { useSelector, useDispatch } from "react-redux";
  import { Button, Progress } from "antd";
  
  const ProgressBar = () => {
    const dispatch = useDispatch();
    const v = useSelector((state) => state.todo);
  
    const increase = () => {
      dispatch(incrementNumber(10));
      dispatch(increment(10));
    };
  
    const decline = () => {
      dispatch(decrementNumber(10));
      dispatch(decrement(10));
    };
  
    const getResponse = () => {
      if (v.vlaue >= 80) {
        return "Almost there!";
      } else if (v.value >= 50) {
        return "Making progress!";
      } else {
        return "Keep going!";
      }
    };
  
    return (
      <>
        <div
          style={{
            marginBottom: 10,
          }}
        >
          <Progress percent={v?.value} />
          <Progress type="circle" percent={v?.value} />
        </div>
        <Button.Group>
          <Button onClick={decline}>decrement</Button>
          <Button onClick={increase}>increase</Button>
        </Button.Group>
        <div style={{ marginTop: 10 }}>{getResponse()}</div>
      </>
    );
  };
  
  export default ProgressBar;