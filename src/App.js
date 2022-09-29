import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";

import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Home></Home>
      <Blog></Blog>
    </div>
  );
}

export default App;
