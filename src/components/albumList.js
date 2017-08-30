import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Panel, Grid, Col, Row, Button} from 'react-bootstrap';
import Album from './album';
import MusicPlayer from './musicPlayer';
import CSSTransitionGroup from 'react-addons-css-transition-group';
// import css from '../../public/styles/style.styl';
// import '../../public/css/player.scss';

import axios from 'axios';
// import {tracks} from '../../napster-endpoint';
import SideBar from './sideBar';

import {getAlbums} from '../actions/albumActions';
class AlbumList extends React.Component{

    constructor(){
        super();

        this.state={
            playingUrl : '',
            audio : null,
            playing : false
        };
    }

    componentDidMount(){
        this.props.getAlbums();
    }

    playAudio(url){
        let audio = new Audio(url);
        console.log('playing', this.state);
        if(!this.state.playing){
            this.setState(
                {
                    playingUrl : url,
                    audio: audio,
                    playing: true
                }
            )
            audio.play();
        }else{
            if(this.state.playingUrl === url){
                this.state.audio.pause();
                this.setState(
                    {
                        playing: false
                    }
                )
            }else{
                this.state.audio.pause();
                audio.play();
                this.setState(
                    {
                        playingUrl : url,
                        audio: audio,
                        playing: true
                    }
                )
            }
        }

    }
    render(){
        let classObj = this;
        let albumList = "";
        if(this.props.albums !== undefined){
            albumList = this.props.albums.map(function (album) {
                return(
                    <div
                        key={album.id}
                        className="track" onClick={()=>{classObj.playAudio(album.previewURL)}}  >
                        <Album playingUrl={classObj.state.playingUrl} playing={classObj.state.playing} {...album}/>
                    </div>
                )
            })
        }
        return(
            <div>
                <SideBar/>
                <div className="page-content">
                    <div className="row-col">
                        <div className="col-lg-9 b-r no-border-md">
                            <div className="padding">
                                <div className="row">
                                    <ul className="equal-height-thumbnail">
                                        {albumList}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        albums: state.albums.albums
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getAlbums},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(AlbumList);