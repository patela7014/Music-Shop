"use strict"

import React from 'react';
import {Panel, Grid, Col, Row, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'

class Artist extends React.Component{

    constructor(){
        super();
        this.state={
            trackImage:''
        }
    }
    componentDidMount(){

    }

    render(){
        let img = "http://direct.rhapsody.com/imageserver/v2/artists/"+this.props.id+"/images/356x237.jpg";
        return(
            <Link to={`/artist/${this.props.id}`}>
            <div>
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
            </Link>
    )
    }
}

export default Artist;