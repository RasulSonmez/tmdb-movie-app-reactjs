import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import WatchList from "./components/WatchList";
import Watched from "./components/Watched";
import WatchAdd from "./components/WatchAdd";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <>
      <GlobalProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<WatchList />} />
            <Route path="/watched" element={<Watched />} />
            <Route path="/watchadd" element={<WatchAdd />} />
          </Routes>
        </Router>
      </GlobalProvider>
    </>
  );
}

export default App;
