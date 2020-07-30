import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import PostContainer from "./containers/PostContainer/PostContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PostContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
