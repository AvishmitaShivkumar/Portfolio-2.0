import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Home from "./Home";


const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles/>
      <Routes>
          <Route path="/" element={<Home/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
