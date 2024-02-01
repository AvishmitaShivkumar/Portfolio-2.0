import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about"/>
          <Route path="/projects"/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
