"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Panel, Grid, Col, Row, Button} from 'react-bootstrap';

class AlbumList extends React.Component{

    componentDidMount(){

    }
    render(){
        return(
            <div>
                <Grid>
                    <Row>
                        <Panel header="Albums" bsStyle="primary">
                            Album List
                        </Panel>
                    </Row>
                </Grid>
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