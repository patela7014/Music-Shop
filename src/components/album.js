"use strict"

import React from 'react';
import {Panel, Grid, Col, Row, Button} from 'react-bootstrap';

class Album extends React.Component{

    constructor(){
        super();
        this.state={
            trackImage:''
        }
    }
    componentDidMount(){

    }

    render(){
        let img = "http://direct.rhapsody.com/imageserver/v2/albums/"+this.props.albumId+"/images/356x237.jpg";
        return(
            <div
                key={this.props.id}
                className="track" >
                <img
                    src={img}
                    className="track-img"
                    alt="track"
                />
                <div className="track-play">
                    <div className="track-play-inner">
                        <span>&#9654;</span>
                    </div>
                </div>
                <p className="track-text">
                    {this.props.name}
                </p>
            </div>
        )
    }
}

export default Album;