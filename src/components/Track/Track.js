import './Track.css';
function Track(props){
    function addToTracklist(){

    }
    return (
        <div className="trackContainer" key={props.id}>
            <div className="trackInfoContainer">
                <div className="trackTitle">
                    {props.title}
                </div>
                <div className="trackAuthorYear">
                    {props.author}
                    <span className="horizontalMargin">
                        &bull;
                    </span>
                    {props.album}
                </div>
            </div>
            <div className="trackAddContainer" onClick={addToTracklist}>
                +
            </div>
        </div>
    );
}
export default Track;