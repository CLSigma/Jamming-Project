import './Track.css';
function Track(props){
    function sendData(){
        props.sendData(props.id, props.title, props.author, props.album);
    }
    function sendId(){
        props.sendId(props.id);
    }
    return (
        <div className="trackContainer">
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
            <div className="trackAddContainer" onClick={props.isOnPlaylist ? sendId : sendData}>
                {props.isOnPlaylist ? "-" : "+"}
            </div>
        </div>
    );
}
export default Track;