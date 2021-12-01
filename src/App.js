// import logo from './logo.svg';
import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favourites from "./component/Favourites";
import Extra from "./component/Extra";

const arr = [
  { id: 1, value: "high", checked: false },
  { id: 2, value: "cruel", checked: false },
  { id: 3, value: "sable", checked: false },
  { id: 4, value: "mine", checked: false },
  { id: 5, value: "vagabond", checked: false },
  { id: 6, value: "sassy", checked: false },
  { id: 7, value: "steer", checked: false },
  { id: 8, value: "argument", checked: false },
  { id: 9, value: "unaccountable", checked: false },
  { id: 10, value: "tie", checked: false },
  { id: 11, value: "middle", checked: false },
  { id: 12, value: "nappy", checked: false }
];

function App() {
  const [data, setData] = useState([]);
  const [favData, setFavData] = useState([]);
  useEffect(() => {
    if (arr && arr.length) {
      setData(arr);
    }
  }, [data, favData]);
  const passData = (id) => {
    let temp = [];
    let newData = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        data[i].checked = !data[i].checked;
      }
      if (data[i].checked) {
        temp.push(data[i]);
      }
      newData.push(data[i]);
    }
    setFavData(temp);
    setData(newData);
  };

  return (
    <React.Fragment>
      <Router>
        {/* <Extra/> */}
        <Routes>
          <Route
            exact
            path="/"
            element={<Home data={data} passData={passData} />}
          />

          <Route
            exact
            path="/favourites"
            element={<Favourites favData={favData} />}
          />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
