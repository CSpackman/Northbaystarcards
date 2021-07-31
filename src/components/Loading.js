import React from "react";
import Spinner from 'react-bootstrap/Spinner'

const style = {
      float: "left",
      marginRight: "30px",
      marginTop: "10px"
    };

const Loading = () => {
  return (
    <div className="loading">
    <Spinner  animation="border" role="status" style={style}/>
    <h1 className="loading">Loading...</h1>
    </div>
  );
};


export default Loading;
