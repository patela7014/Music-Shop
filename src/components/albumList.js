import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Panel, Grid, Col, Row, Button} from 'react-bootstrap';
import Album from './album';
import MusicPlayer from './musicPlayer';
import CSSTransitionGroup from 'react-addons-css-transition-group';
// import css from '../../public/styles/style.styl';

import axios from 'axios';
// import {tracks} from '../../napster-endpoint';
import SideBar from './sideBar';

import {getAlbums} from '../actions/albumActions';
class AlbumList extends React.Component{

    componentDidMount(){
        this.props.getAlbums();
    }
    render(){
        let classObj = this;
        let albumList = "";
        if(this.props.albums !== undefined){
            albumList = this.props.albums.map(function (album) {
                return(
                    // <div className="col-xs-4 col-sm-4 col-md-3" key={album.id}>
                    //     <Album {...album}/>
                    // </div>
                    //
                    <div
                        key={album.id}
                        className="track" >
                        <Album {...album}/>
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