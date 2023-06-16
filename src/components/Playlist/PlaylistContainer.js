import "./PlaylistContainer.css";
import TracklistContainer from "../Tracklist/TracklistContainer";

function PlaylistContainer(props){
  let client_id = '9384028492f94286bea56685784abee0';
  let redirect_uri = 'http://localhost:3000';
  let url = 'https://accounts.spotify.com/authorize'+'?client_id=' + client_id + '&response_type=token&scope=playlist-modify-public' + '&redirect_uri=' + redirect_uri;
  
  function sendId(id, uri){
    props.deleteFromPlaylist(id, uri);
  }

    return (
      <div className="playlistContainer">
        <h2>New playlist</h2>
        <input type="text" className="nameInput" id="playlistName" onChange={e => props.setPlaylistName(e.target.value)}/>
        <TracklistContainer Tracklist={props.Tracklist} sendId={sendId}/>
        {props.token ? 
        <button onClick={props.saveToProfile} id="saveToSpotify">Save</button> 
        : <a href={url} className="logInToSpotifyButton">Log in to spotify</a>}
      </div>  
    );
}

export default PlaylistContainer;