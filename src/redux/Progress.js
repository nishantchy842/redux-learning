// //import React, { useState } from 'react';
// import { incrementNumber ,decrementNumber, increment, decrement} from './reduces';
// import {useSelector,useDispatch} from "react-redux"
// import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
// import { Button, Progress } from 'antd';
// const ProgressBar = () => {
  
//   const dispatch = useDispatch();
//   const v = useSelector((state)=>state.value);
//   console.log(v ,"v");
//   const increase = () => {
//     dispatch(incrementNumber(10));
//     dispatch(increment(10))
//   };
//   const decline = () => {
//     dispatch(decrementNumber(10));
//     dispatch(decrement(10))
//   };
  
//   return (
//     <>
//       <div
//         style={{
//           marginBottom: 10,
//         }}
//       >
//         <Progress percent={v} />
//         <Progress type="circle" percent={v} />
//       </div>
//       <Button.Group>
//         {/* <Button onClick={decline()} icon={<MinusOutlined />} /> */}

//         <Button onClick={() => v}>decrement</Button>
        
//         <Button onClick={() => incrementNumber}>increase</Button>
// {/*         
//         <Button onClick={increase()} icon={<PlusOutlined />} /> */}
//       </Button.Group>
//     </>
//   );
// };

// export default ProgressBar;
import { incrementNumber, decrementNumber, increment, decrement } from './reduces';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Progress } from 'antd';

const ProgressBar = () => {
  const dispatch = useDispatch();
  const v = useSelector((state) => state.value);

  const increase = () => {
    dispatch(incrementNumber(10));
    dispatch(increment(10));
  };

  const decline = () => {
    dispatch(decrementNumber(10));
    dispatch(decrement(10));
  };

  const getResponse = () => {
    if (v >= 80) {
      return 'Almost there!';
    } else if (v >= 50) {
      return 'Making progress!';
    } else {
      return 'Keep going!';
    }
  };

  return (
    <>
      <div
        style={{
          marginBottom: 10,
        }}
      >
        <Progress percent={v} />
        <Progress type="circle" percent={v} />
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