const Pet = ({
  name,
  animal,
  breed
}) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ])
}

const App = () => {
  return React.createElement(
    "div", {},
    [
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
    ]
  )
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));