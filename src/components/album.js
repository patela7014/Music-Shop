"use strict"

import React from 'react';
import {Panel, Grid, Col, Row, Button} from 'react-bootstrap';

class Album extends React.Component{

    componentDidMount(){

    }
    render(){
        return(
            <div className="col-xs-4 col-sm-4 col-md-3">
                <div className="item r" data-id="item-3" data-src="http://api.soundcloud.com/tracks/79031167/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                    <div className="item-media ">
                        <a href="track.detail.html" className="item-media-content" ></a>
                        <div className="item-overlay center">
                            <button  className="btn-playpause">Play</button>
                        </div>
                    </div>
                    <div className="item-info">
                        <div className="item-overlay bottom text-right">
                            <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                            <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h"></i></a>
                            <div className="dropdown-menu pull-right black lt"></div>
                        </div>
                        <div className="item-title text-ellipsis">
                            <a href="track.detail.html">I Wanna Be In the Cavalry</a>
                        </div>
                        <div className="item-author text-sm text-ellipsis ">
                            <a href="artist.detail.html" className="text-muted">Jeremy Scott</a>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default Album;