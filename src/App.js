import "./App.css";
import Rating from "./components/Rating";
import ThankYou from "./components/ThankYou";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Rating />}></Route>
            <Route path="thankyou" element={<ThankYou />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
