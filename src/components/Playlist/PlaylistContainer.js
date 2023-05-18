import "./PlaylistContainer.css";
import TracklistContainer from "../Tracklist/TracklistContainer";
import { useState } from 'react';

function PlaylistContainer(props){
  const [playlistName, setPlaylistName] = useState("");
  function sendId(id){
    props.deleteFromPlaylist(id);
  }
    return (
      <div className="playlistContainer">
        <h2>New playlist</h2>
        <input type="text" className="nameInput" id="playlistName" onChange={e => setPlaylistName(e.target.value)}/>
        <TracklistContainer Tracklist={props.Tracklist} sendId={sendId}/>
        {props.token ? 
        <button onClick={props.saveToProfile} id="saveToSpotify">Save</button> 
        : <a href={props.url} className="logInToSpotifyButton">Log in to spotify</a>}
      </div>  
    );
}

export default PlaylistContainer;