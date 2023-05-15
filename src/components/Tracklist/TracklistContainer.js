import "./TracklistContainer.css";
import Tracklist from "./Tracklist";
import Track from "../Track/Track";
function TracklistContainer(){
    return (
      <div className="tracklistContainer">
        {
          Tracklist.map(item => (
            <Track title={item.title} author={item.author} album={item.album} id={item.id}/>
          ))
        }
      </div>  
    );
}

export default TracklistContainer;