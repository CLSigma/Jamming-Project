import "./SearchBarContainer.css";

function SearchBarContainer(props){
    return (
      <div className="searchbar">
        {props.token ? 
        <form onSubmit={props.searchSongs}>
          <input type="search" className="songInput" onChange={e => props.setSearchValue(e.target.value)}/>
          <button type="submit">Search</button>
        </form>
        :
        <h2>Please log in to search songs</h2>
        }
      </div>  
    );
}

export default SearchBarContainer;