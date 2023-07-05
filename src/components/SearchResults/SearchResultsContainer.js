import './SearchResultsContainer.css';
import Track from '../Track/Track';

function SearchResultsContainer(props){
  function sendData(id, title, author, album, uri){
    props.addToPlaylist(id, title, author, album, uri);
  }
    return (
      <div className="searchResultsContainer">
        <h2>Results</h2>
        {
          props.searchResult.map(item => (
          <Track title={item.name} author={item.artists[0].name} album={item.album.name} key={item.id} id={item.id} uri={item.uri} sendData={sendData} isOnPlaylist={false}/>
          ))
        }
      </div>  
    );
}

export default SearchResultsContainer;