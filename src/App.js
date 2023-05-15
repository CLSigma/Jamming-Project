import './App.css';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';
import SearchResultsContainer from './components/SearchResults/SearchResultsContainer';
import PlaylistContainer from './components/Playlist/PlaylistContainer';

function App() {
  return (
    <div className="App">
      <SearchBarContainer/>
      <div className="trackList">
        <SearchResultsContainer/>
        <PlaylistContainer/>
      </div>
    </div>
  );
}

export default App;
