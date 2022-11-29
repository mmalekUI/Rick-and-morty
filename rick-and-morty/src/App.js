import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharactersPage from "./components/CharactersPage/CharactersPage";
import LocationsPage from "./components/LocationsPage/LocationsPage";

import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Router>
        <div>Rick and Morty</div>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Homepage />} /> */}
          <Route path="/characters" element={<CharactersPage />} />
          {/* <Route path="/episodes" element={<Episodes />} /> */}
          <Route path="/locations" element={<LocationsPage />} />
          {/* <Route path="/watchlist" element={<MyWatchlist />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
