import './App.css';
import { useState } from 'react';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';
import SearchResultsContainer from './components/SearchResults/SearchResultsContainer';
import PlaylistContainer from './components/Playlist/PlaylistContainer';
import Songs from './data/testResults';

function App() {
  const [Tracklist, setTracklist] = useState([]);
  function addToPlaylist(id, title, author, album){
    Tracklist.find(song => song[0] === id) === undefined ? 
    setTracklist(Tracklist => [...Tracklist, [id, title, author, album]]) : console.log('Song already on tracklist');
  }
  function deleteFromPlaylist(id){
    setTracklist(Tracklist => Tracklist.filter(song => song[0] !== id));
  }
  return (
    <div className="App">
      <SearchBarContainer/>
      <div className="trackList">
        <SearchResultsContainer addToPlaylist={addToPlaylist} Songs={Songs}/>
        <PlaylistContainer Tracklist={Tracklist} deleteFromPlaylist={deleteFromPlaylist}/>
      </div>
    </div>
  );
}

export default App;
