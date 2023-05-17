import './SearchResultsContainer.css';
import Track from '../Track/Track';

function SearchResultsContainer(props){
  function sendData(id, title, author, album){
    props.addToPlaylist(id, title, author, album);
  }
    return (
      <div className="searchResultsContainer">
        <h2>Results</h2>
        {
          props.Songs.map(item => (
            <Track title={item.title} author={item.author} album={item.album} key={item.id} id={item.id} sendData={sendData} isOnPlaylist={false}/>
          ))
        }
      </div>  
    );
}

export default SearchResultsContainer;