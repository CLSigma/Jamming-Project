import "./SearchResultsContainer.css";
import Track from '../Track/Track';
import Songs from './testResults';
function SearchResultsContainer(){
    return (
      <div className="searchResultsContainer">
        <h2>Results</h2>
        {
          Songs.map(item => (
            <Track title={item.title} author={item.author} album={item.album} id={item.id}/>
          ))
        }
      </div>  
    );
}

export default SearchResultsContainer;