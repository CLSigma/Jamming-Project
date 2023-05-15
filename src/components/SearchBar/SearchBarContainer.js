import "./SearchBarContainer.css";
function SearchBarContainer(){
    return (
      <div className="searchbar">
        <input type="search" className="songInput"/>
        <button>Search</button>
      </div>  
    );
}

export default SearchBarContainer;