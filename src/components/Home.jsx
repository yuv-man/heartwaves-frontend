import React, { useState, useContext } from "react";
import { HeartContext } from "../libs/HeartContext";

function Home() {
  const { isLogin, firstName } = useContext(HeartContext);

  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}

export default Home;
