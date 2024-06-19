import "./App.css";
import Home from "./routes/Home.jsx";
import Detail from './routes/Detail.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route path={`${process.env.PUBLIC_URL}/`} element={< Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
