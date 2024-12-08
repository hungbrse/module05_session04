import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Bai1 from "./components/Bai1";
import Bai2 from "./components/Bai2";
import Bai3 from "./components/Bai3";
import Bai4 from "./components/Bai4";
import Bai5 from "./components/Bai5";
import Bai6 from "./components/Bai6";
import Bai7 from "./components/Bai7";
import Bai8 from "./components/Bai8";
import Bai9 from "./components/Bai9";
import Bai10 from "./components/Bai10";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Bai1></Bai1>
      <Bai2 />
      <Bai3></Bai3>
      <Bai4 />
      <Bai5 />
      <Bai6 />
      <Bai7></Bai7>
      <Bai8></Bai8>
      <Bai9></Bai9>
      <Bai10></Bai10>
      <Bai11></Bai11>
    </>
  );
}

export default App;
