import React from 'react';
import {connect} from 'react-redux';


class MusicPlayer extends React.Component{
    componentDidMount(){

    }
    render(){
        return(

            <div className='container'>

                <div className='app'>

                    <div className="app__nav js-hook--music">
                        <div className='app__nav-hamburger'></div>
                        <div className='app__nav-text'>Music</div>
                        <div className='app__nav-settings reset'><i className="fa fa-repeat" aria-hidden="true"></i></div>
                    </div>

                    <div className="app__search js-hook--music">
                        <input className='app__search-input' type="text" placeholder='Search music' />
                        <i className="fa fa-search app__search-fa" aria-hidden="true"></i>
                    </div>

                    <div className="app__song app__song--1 js-hook--music">
                        <div className="app__song-img app__song--1-img"></div>
                        <div className="app__song-info">
                            <h3 className='app__song-info-name'>U Make Me Wanna</h3>
                            <h3 className='app__song-info-artist'>Blue</h3>
                            <p className='app__song-info-likes'><i className="fa fa-heart-o" aria-hidden="true"></i>1200</p>
                            <p className='app__song-info-dl'><i className="fa fa-arrow-down" aria-hidden="true"></i>2000</p>
                        </div>
                        <div className="app__song-dl">
                            <div className='app__song-dl-arrow'><span></span></div>
                        </div>
                        <div className='app__song--1-likes app__song-likes'>
                            <div className='app__song--1-likes-pause app__song-likes-pause'></div>
                            <div className='app__song--1-likes-like app__song-likes-like'><i className="fa fa-heart-o" aria-hidden="true"></i></div>
                            <div className='app__song--1-likes-dl app__song-likes-dl'></div>
                        </div>
                        <div className='app__song-wrapper'></div>
                    </div>

                    <div className="app__song app__song--2 js-hook--music">
                        <div className="app__song-img app__song--2-img"></div>
                        <div className="app__song-info">
                            <h3 className='app__song-info-name'>You Are Not Alone</h3>
                            <h3 className='app__song-info-artist'>Lobca</h3>
                            <p className='app__song-info-likes'><i className="fa fa-heart-o" aria-hidden="true"></i>2000</p>
                            <p className='app__song-info-dl'><i className="fa fa-arrow-down" aria-hidden="true"></i>3000</p>
                        </div>
                        <div className="app__song-dl">
                            <div className='app__song-dl-arrow'><span></span></div>
                        </div>
                        <div className='app__song--2-likes app__song-likes'>
                            <div className='app__song--2-likes-pause app__song-likes-pause'></div>
                            <div className='app__song--2-likes-like app__song-likes-like'><i className="fa fa-heart-o" aria-hidden="true"></i></div>
                            <div className='app__song--2-likes-dl app__song-likes-dl'></div>
                        </div>
                        <div className='app__song-wrapper'></div>
                    </div>

                    <div className="app__song app__song--3 js-hook--music">
                        <div className="app__song-img app__song--3-img"></div>
                        <div className="app__song-info">
                            <h3 className='app__song-info-name'>Foll In Lover</h3>
                            <h3 className='app__song-info-artist'>Ramzi</h3>
                            <p className='app__song-info-likes'><i className="fa fa-heart-o" aria-hidden="true"></i>1200</p>
                            <p className='app__song-info-dl'><i className="fa fa-arrow-down" aria-hidden="true"></i>1200</p>
                        </div>
                        <div className="app__song-dl">
                            <div className='app__song-dl-arrow'><span></span></div>
                        </div>
                        <div className='app__song--3-likes app__song-likes'>
                            <div className='app__song--3-likes-pause app__song-likes-pause'></div>
                            <div className='app__song--3-likes-like app__song-likes-like'><i className="fa fa-heart-o" aria-hidden="true"></i></div>
                            <div className='app__song--3-likes-dl app__song-likes-dl'></div>
                        </div>
                        <div className='app__song-wrapper'></div>
                    </div>

                    <div className="app__song app__song--4 js-hook--music">

                        <div className="app__song-img app__song--4-img"></div>
                        <div className="app__song-info">
                            <h3 className='app__song-info-name'>One For Da Money</h3>
                            <h3 className='app__song-info-artist'>Album</h3>
                            <p className='app__song-info-likes'><i className="fa fa-heart-o" aria-hidden="true"></i>1300</p>
                            <p className='app__song-info-dl'><i className="fa fa-arrow-down" aria-hidden="true"></i>2000</p>
                        </div>
                        <div className="app__song-dl">
                            <div className='app__song-dl-arrow'><span></span></div>
                        </div>
                        <div className='app__song--4-likes app__song-likes'>
                            <div className='app__song--4-likes-pause app__song-likes-pause'></div>
                            <div className='app__song--4-likes-like app__song-likes-like'><i className="fa fa-heart-o" aria-hidden="true"></i></div>
                            <div className='app__song--4-likes-dl app__song-likes-dl'></div>
                        </div>
                        <div className='app__song-wrapper'></div>
                    </div>

                    <div className='app__cross js-hook--1menu'></div>
                    <div className='app__play js-hook--1menu'>
                        <div className='app__play-btn'></div>
                        <p className='app__play-par'>Play song in the bar</p>
                    </div>

                    <div className='app__bg'></div>
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