import './App.css';
import { useState, useEffect } from 'react';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';
import SearchResultsContainer from './components/SearchResults/SearchResultsContainer';
import PlaylistContainer from './components/Playlist/PlaylistContainer';

function App() {
  const [playlistName, setPlaylistName] = useState("");
  const [Tracklist, setTracklist] = useState([]);
  const [token, setToken] = useState();
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [uriTable, seturiTable] = useState([]);
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
    async function searchSongs(event){
      event.preventDefault();
      fetch(`https://api.spotify.com/v1/search?type=track&q=${searchValue}`, {
          headers: {
            Authorization: `Bearer ${token}`
          },
          method: 'GET'
        }).then(response => {
          return response.json()
        }).then(responseJSON => {
          setSearchResult(responseJSON.tracks.items);
        });
  } 

  function addToPlaylist(id, title, author, album, uri){
    if(Tracklist.find(song => song[0] === id) === undefined){
      setTracklist(Tracklist => [...Tracklist, [id, title, author, album, uri]]);
      seturiTable(uriTable => [...uriTable, uri]);
    }
    else{
      alert('Song already on tracklist');
    }
  }
  function deleteFromPlaylist(id, uri){
    setTracklist(Tracklist => Tracklist.filter(song => song[0] !== id));
    seturiTable(uriTable => uriTable.filter(song => song !== uri));
  }
  function clearTracklist(){
    setTracklist(Tracklist => Tracklist.filter(song => song[0] === undefined));
    seturiTable(uriTable => uriTable.filter(song => song === undefined));
  }
  async function saveToProfile(event){ 
    if(playlistName !== "" && uriTable.length !==0){
      event.preventDefault();
      let userId;
      fetch(`https://api.spotify.com/v1/me`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        method: 'GET'
      })
      .then(response=> {
        return response.json();
      }).then( responseJSON => {
        userId = responseJSON.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          headers: {
            Authorization: `Bearer ${token}`
          },
          method: 'POST',
          body: JSON.stringify({ name: playlistName })
        })
      }).then(response => {
        return response.json();
      }).then(responseJSON => {
        let playlistID = responseJSON.id;
        fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistID}/tracks`, {
          headers: {
            Authorization: `Bearer ${token}`
          },
          method: 'POST',
          body: JSON.stringify({ uris: uriTable })
        })
      }).catch((err) => console.log(err));
      clearTracklist();
    }
    else{
      alert("Playlist name is empty or there are no tracks selected");
    }
  }
  return (
    <div className="App">
      <SearchBarContainer token={token} searchSongs={searchSongs} setSearchValue={setSearchValue}/>
      <div className="trackList">
        <SearchResultsContainer addToPlaylist={addToPlaylist} searchResult={searchResult}/>
        <PlaylistContainer Tracklist={Tracklist} deleteFromPlaylist={deleteFromPlaylist} saveToProfile={saveToProfile} token={token} setPlaylistName={setPlaylistName}/>
      </div>
    </div>
  );
}

export default App;
