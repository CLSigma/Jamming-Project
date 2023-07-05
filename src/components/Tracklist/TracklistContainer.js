import "./TracklistContainer.css";
import Track from '../Track/Track';

function TracklistContainer(props){
  function sendId(id, uri){
    props.sendId(id, uri);
  }
    return (
      <div>
        {
          props.Tracklist.map(song => (
            <Track key={song[0]} id={song[0]} title={song[1]} author={song[2]} album={song[3]} uri={song[4]} sendId={sendId} isOnPlaylist={true} />
          ))
        }
      </div>
    );
}

export default TracklistContainer;