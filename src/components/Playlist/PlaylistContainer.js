import "./PlaylistContainer.css";
import TracklistContainer from "../Tracklist/TracklistContainer";
function PlaylistContainer(){
    return (
      <div className="playlistContainer">
        <h2>New playlist</h2>
        <input type="text" className="nameInput"/>
        <TracklistContainer />
        <button>Save</button>
      </div>  
    );
}

export default PlaylistContainer;