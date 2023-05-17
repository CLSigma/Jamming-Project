import "./PlaylistContainer.css";
import TracklistContainer from "../Tracklist/TracklistContainer";

function PlaylistContainer(props){
  function sendId(id){
    props.deleteFromPlaylist(id);
  }
  function sendPlaylistName(){
    props.changePlaylistName(document.getElementById("playlistName").value);
  }
    return (
      <div className="playlistContainer">
        <h2>New playlist</h2>
        <input type="text" className="nameInput" id="playlistName" onChange={sendPlaylistName}/>
        <TracklistContainer Tracklist={props.Tracklist} sendId={sendId}/>
        <button>Save</button>
      </div>  
    );
}

export default PlaylistContainer;