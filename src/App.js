import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Boris",
      animal: "Cat",
      breed: "Black"
    }),
    React.createElement(Pet, {
      name: "Boo Boo",
      animal: "Dog",
      breed: "German Shepard"
    }),
    React.createElement(Pet, {
      name: "Whisker",
      animal: "Cat",
      breed: "Calico"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
