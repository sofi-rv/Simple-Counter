//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./component/secondsCounter.jsx";

//function setInterval(() => {},1000)
let counter = 0
setInterval(() => {

    //render your react application
    ReactDOM.render(<SecondsCounter secondOne={counter} secondTwo={counter} secondThree={counter} secondFour={counter} secondFive={counter} secondSix= {counter} />, document.querySelector("#app"));
    counter = counter + 1;
}, 1000);