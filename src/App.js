import "./App.css";
import DetailSong from "./Components/DetailSong";
import ListSongs from "./Components/ListSongs";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player">
        {/* span 1 */}
        <DetailSong />
        {/* span 2 */}
        <ListSongs />
      </div>
    </div>
  );
}

export default App;
