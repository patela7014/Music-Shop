import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Panel, Grid, Col, Row, Button} from 'react-bootstrap';
import Track from './track';
import axios from 'axios';
// import {tracks} from '../../napster-endpoint';
import SideBar from './sideBar';

import {getTracks} from '../actions/trackActions';
class TrackList extends React.Component{

    componentDidMount(){
        this.props.getTracks();
    }
    render(){
        let classObj = this;
        const trackList = this.props.tracks.map(function (track) {
            return(
                <div
                    key={track.id}
                    className="track" >
                    <Track {...track}/>
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
                                        {trackList}
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
        tracks: state.albums.tracks
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getTracks},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(TrackList);