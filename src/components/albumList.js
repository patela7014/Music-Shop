import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Panel, Grid, Col, Row, Button} from 'react-bootstrap';
import Album from './album';
class AlbumList extends React.Component{

    componentDidMount(){

    }
    render(){

        return(
            <div id="content" className="app-content white bg box-shadow-z2" role="main">
                <div className="app-footer app-player grey bg">
                    <div className="playlist"></div>
                </div>
                <div className="app-body" id="view">

                    <div className="page-content">
                        <div className="row-col">
                            <div className="col-lg-9 b-r no-border-md">
                                <div className="padding">


                                    <div className="page-title m-b">
                                        <h1 className="inline m-a-0">Browse</h1>
                                        <div className="dropdown inline">
                                            <button className="btn btn-sm no-bg h4 m-y-0 v-b dropdown-toggle text-primary" data-toggle="dropdown">All</button>
                                            <div className="dropdown-menu">
                                                <a href="#" className="dropdown-item active">
                                                    All
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    acoustic
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    ambient
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    blues
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    classical
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    country
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    electronic
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    emo
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    folk
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    hardcore
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    hip hop
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    indie
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    jazz
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    latin
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    metal
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    pop
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    pop punk
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    punk
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    reggae
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    rnb
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    rock
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    soul
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    world
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <Album/>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-3 w-xxl w-auto-md">
                                <div className="padding" data-ui-jp="stick_in_parent">
                                    <h6 className="text text-muted">5 Likes</h6>
                                    <div className="row item-list item-list-sm m-b">
                                        <div className="col-xs-12">
                                            <div className="item r" data-id="item-6" data-src="http://api.soundcloud.com/tracks/236107824/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                <div className="item-media ">
                                                    <a href="track.detail.html" className="item-media-content"></a>
                                                </div>
                                                <div className="item-info">
                                                    <div className="item-title text-ellipsis">
                                                        <a href="track.detail.html">Body on me</a>
                                                    </div>
                                                    <div className="item-author text-sm text-ellipsis ">
                                                        <a href="artist.detail.html" className="text-muted">Rita Ora</a>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12">
                                            <div className="item r" data-id="item-8" data-src="http://api.soundcloud.com/tracks/236288744/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                <div className="item-media ">
                                                    <a href="track.detail.html" className="item-media-content" ></a>
                                                </div>
                                                <div className="item-info">
                                                    <div className="item-title text-ellipsis">
                                                        <a href="track.detail.html">Simple Place To Be</a>
                                                    </div>
                                                    <div className="item-author text-sm text-ellipsis ">
                                                        <a href="artist.detail.html" className="text-muted">RYD</a>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12">
                                            <div className="item r" data-id="item-5" data-src="http://streaming.radionomy.com/JamendoLounge">
                                                <div className="item-media ">
                                                    <a href="track.detail.html" className="item-media-content" ></a>
                                                </div>
                                                <div className="item-info">
                                                    <div className="item-title text-ellipsis">
                                                        <a href="track.detail.html">Live Radio</a>
                                                    </div>
                                                    <div className="item-author text-sm text-ellipsis ">
                                                        <a href="artist.detail.html" className="text-muted">Radionomy</a>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12">
                                            <div className="item r" data-id="item-11" data-src="http://api.soundcloud.com/tracks/218060449/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                <div className="item-media ">
                                                    <a href="track.detail.html" className="item-media-content" ></a>
                                                </div>
                                                <div className="item-info">
                                                    <div className="item-title text-ellipsis">
                                                        <a href="track.detail.html">Spring</a>
                                                    </div>
                                                    <div className="item-author text-sm text-ellipsis ">
                                                        <a href="artist.detail.html" className="text-muted">Pablo Nouvelle</a>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12">
                                            <div className="item r" data-id="item-10" data-src="http://api.soundcloud.com/tracks/237514750/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                <div className="item-media ">
                                                    <a href="track.detail.html" className="item-media-content" ></a>
                                                </div>
                                                <div className="item-info">
                                                    <div className="item-title text-ellipsis">
                                                        <a href="track.detail.html">The Open Road</a>
                                                    </div>
                                                    <div className="item-author text-sm text-ellipsis ">
                                                        <a href="artist.detail.html" className="text-muted">Postiljonen</a>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="text text-muted">Go mobile</h6>
                                    <div className="btn-groups">
                                        <a href="" className="btn btn-sm dark lt m-r-xs" >
                <span className="pull-left m-r-sm">
                  <i className="fa fa-apple fa-2x"></i>
                </span>
                                            <span className="clear text-left l-h-1x">
                  <span className="text-muted text-xxs">Download on the</span>
                  <b className="block m-b-xs">App Store</b>
                </span>
                                        </a>
                                        <a href="" className="btn btn-sm dark lt" >
                <span className="pull-left m-r-sm">
                  <i className="fa fa-play fa-2x"></i>
                </span>
                                            <span className="clear text-left l-h-1x">
                  <span className="text-muted text-xxs">Get it on</span>
                  <b className="block m-b-xs m-r-xs">Google Play</b>
                </span>
                                        </a>
                                    </div>
                                    <div className="b-b m-y"></div>
                                    <div className="nav text-sm _600">
                                        <a href="#" className="nav-link text-muted m-r-xs">About</a>
                                        <a href="#" className="nav-link text-muted m-r-xs">Contact</a>
                                        <a href="#" className="nav-link text-muted m-r-xs">Legal</a>
                                        <a href="#" className="nav-link text-muted m-r-xs">Policy</a>
                                    </div>
                                    <p className="text-muted text-xs p-b-lg">&copy; Copyright 2016</p>
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

export default connect(mapStateToProps,null)(AlbumList);