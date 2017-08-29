import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Panel, Grid, Col, Row, Button} from 'react-bootstrap';
import Artist from './artist';
import axios from 'axios';
// import {tracks} from '../../napster-endpoint';
import SideBar from './sideBar';

import {getArtists} from '../actions/artistAction';
class ArtistList extends React.Component{

    componentDidMount(){
        this.props.getArtists();
    }
    render(){
        let classObj = this;
        const artistList = this.props.artists.map(function (artist) {
            return(
                <div
                    key={artist.id}
                    className="track" >
                    <Artist {...artist}/>
                </div>
            )
        })
        return(
            <div>
                <SideBar/>
                <div className="page-content">
                    <div className="row-col">
                        <div className="col-lg-9 b-r no-border-md">
                            <div className="padding">
                                <div className="row">
                                    <ul className="equal-height-thumbnail">
                                        {artistList}
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
        artists: state.albums.artists
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getArtists},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(ArtistList);