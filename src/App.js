import './App.css';
import { useState, useEffect } from 'react';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';
import SearchResultsContainer from './components/SearchResults/SearchResultsContainer';
import PlaylistContainer from './components/Playlist/PlaylistContainer';
import Songs from './data/testResults';
import axios from 'axios';

function App() {
  const [Tracklist, setTracklist] = useState([]);
  const [token, setToken] = useState();
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    if(!token && hash){
      let urlParams = new URLSearchParams(window.location.hash.replace("#","?"));
      token = urlParams.get('access_token');
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);
  }, [])

  let client_id = '9384028492f94286bea56685784abee0';
  let redirect_uri = 'http://localhost:3000';
  let url = 'https://accounts.spotify.com/authorize'+'?client_id=' + client_id + '&redirect_uri=' + redirect_uri +'&response_type=token';

  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");
    async function searchSongs(event){
      event.preventDefault();
      const {data} = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          q: searchValue,
          type: "track"
        }
      })
      setSearchResult(data.tracks.items);
  } 

  function addToPlaylist(id, title, author, album){
    Tracklist.find(song => song[0] === id) === undefined ? 
    setTracklist(Tracklist => [...Tracklist, [id, title, author, album]]) : console.log('Song already on tracklist');
  }
  function deleteFromPlaylist(id){
    setTracklist(Tracklist => Tracklist.filter(song => song[0] !== id));
  }
  function saveToProfile(){
    setTracklist(Tracklist => Tracklist.filter(song => song === true));
  }
  return (
    <div className="App">
      <SearchBarContainer token={token} searchSongs={searchSongs} setSearchValue={setSearchValue}/>
      <div className="trackList">
        <SearchResultsContainer addToPlaylist={addToPlaylist} Songs={Songs} searchResult={searchResult}/>
        <PlaylistContainer Tracklist={Tracklist} deleteFromPlaylist={deleteFromPlaylist} saveToProfile={saveToProfile} url={url} token={token}/>
      </div>
    </div>
  );
}

export default App;
