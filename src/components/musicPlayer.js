import React from 'react';
import {connect} from 'react-redux';


class MusicPlayer extends React.Component{
    componentDidMount(){

    }
    render(){
        return(
            <div className="player">
                <div className="image"><img className="cover" src="http://fistintheair.com/wp-content/uploads/2016/12/quinn-xcii-straightjacket.jpg" alt="Cover"/>
                    <div className="filter"></div>
                </div>
                <div className="description">
                    <p>Quinn XCII</p>
                    <h1>Straightjacket</h1>
                </div>
                <div className="buttons"><img className="playButton" src="https://s29.postimg.org/5pit0vpk7/music_player_play_1.png" alt="PlayButton"/><img className="pauseButton" src="https://s29.postimg.org/8nv0wtxef/pause_button.png" alt="pauseButton"/></div>
                <div className="time">
                    <p className="timePlayed">1:27</p>
                    <p className="timeLeft">1:59</p>
                </div>
                <div className="lines">
                    <div className="songLength"></div>
                    <div className="lengthLeft"></div>
                </div>
                <div className="likeandfav">
                    <div className="fa fa-heart"></div>
                    <div className="fa fa-star"></div>
                </div>
            </div>
        );
    };
}

function mapStateToProps(state) {
    return{
        albums: state.albums.albums
    }
}

export default connect(mapStateToProps,null)(MusicPlayer);