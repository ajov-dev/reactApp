import React from "react";
import axios from "axios";
import NavBarComponent from "./components/navbar/NavBarComponent";
function App() {
  const [posts, setPosts] = React.useState([]);
  axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
    setPosts(response.data);
  });
  return (
    <>
      <NavBarComponent />
    </>
  );
}

export default App;
