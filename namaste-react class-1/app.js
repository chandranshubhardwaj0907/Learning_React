const parent = React.createElement(
    "div",
    { id: "parent" },
    [
      React.createElement("div", { id: "child1" },
        [
          React.createElement("h2", {}, "i am a h2 tag"),
          React.createElement("h1", {}, "i am a h1 tag")
        ]
      ),
      React.createElement("div", { id: "child2" },
        [
          React.createElement("h2", {}, "i am a h2 tag"),
          React.createElement("h1", {}, "i am a h1 tag")
        ]
      )
    ]
  );
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);
  
// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     React.createElement("div", { id: "child1" },
//       [
//         React.createElement("h1", {}, "hello i am Chandranshu Bhardwaj"),
//         React.createElement("h1", {}, "i am 19 years old")
//       ]
//     )
//   );
  
//   const root = createRoot(document.getElementById("root"));
//   root.render(parent);
  