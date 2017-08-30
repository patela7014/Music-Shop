    "use strict"

    import React from 'react';
    import AlbumList from './albumList';
    import {getArtistDetails} from '../actions/artistDetailsActions';

    class ArtistDetail extends React.Component{
        componentDidMount(){

        }
        render(){
            return(
                <div>
                    <div className="app dk" id="app">
                        <div id="aside" className="app-aside modal fade nav-dropdown">
                            <div className="left navside grey dk" data-layout="column">
                                <div className="navbar no-radius">
                                    <a href="index.html" className="navbar-brand md">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={32} height={32}>
                                            <circle cx={24} cy={24} r={24} fill="rgba(255,255,255,0.2)" />
                                            <circle cx={24} cy={24} r={22} fill="#1c202b" className="brand-color" />
                                            <circle cx={24} cy={24} r={10} fill="#ffffff" />
                                            <circle cx={13} cy={13} r={2} fill="#ffffff" className="brand-animate" />
                                            <path d="M 14 24 L 24 24 L 14 44 Z" fill="#FFFFFF" />
                                            <circle cx={24} cy={24} r={3} fill="#000000" />
                                        </svg>
                                        <img src="images/logo.png" alt="." className="hide" />
                                        <span className="hidden-folded inline">pulse</span>
                                    </a>
                                </div>
                                <div data-flex className="hide-scroll">
                                    <nav className="scroll nav-stacked nav-active-primary">
                                        <ul className="nav" data-ui-nav>
                                            <li className="nav-header hidden-folded">
                                                <span className="text-xs text-muted">Main</span>
                                            </li>
                                            <li>
                                                <a href="player.html">
                            <span className="nav-icon">
                              <i className="material-icons">
                                play_circle_outline
                              </i>
                            </span>
                                                    <span className="nav-text">Discover</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="browse.html">
                            <span className="nav-icon">
                              <i className="material-icons">
                                sort
                              </i>
                            </span>
                                                    <span className="nav-text">Browse</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="chart.html">
                            <span className="nav-icon">
                              <i className="material-icons">
                                trending_up
                              </i>
                            </span>
                                                    <span className="nav-text">Charts</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="artist.html">
                            <span className="nav-icon">
                              <i className="material-icons">
                                portrait
                              </i>
                            </span>
                                                    <span className="nav-text">Artist</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a data-toggle="modal" data-target="#search-modal">
                            <span className="nav-icon">
                              <i className="material-icons">
                                search
                              </i>
                            </span>
                                                    <span className="nav-text">Search</span>
                                                </a>
                                            </li>
                                            <li className="nav-header hidden-folded m-t">
                                                <span className="text-xs text-muted">Your collection</span>
                                            </li>
                                            <li>
                                                <a href="profile.html#tracks">
                            <span className="nav-label">
                              <b className="label">8</b>
                            </span>
                                                    <span className="nav-icon">
                              <i className="material-icons">
                                list
                              </i>
                            </span>
                                                    <span className="nav-text">Tracks</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="profile.html#playlists">
                            <span className="nav-icon">
                              <i className="material-icons">
                                queue_music
                              </i>
                            </span>
                                                    <span className="nav-text">Playlists</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="profile.html#likes">
                            <span className="nav-icon">
                              <i className="material-icons">
                                favorite_border
                              </i>
                            </span>
                                                    <span className="nav-text">Likes</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div data-flex-no-shrink>
                                    <div className="nav-fold dropup">
                                        <a data-toggle="dropdown">
                        <span className="pull-left">
                          <img src="images/a3.jpg" alt="..." className="w-32 img-circle" />
                        </span>
                                            <span className="clear hidden-folded p-x p-y-xs">
                          <span className="block _500 text-ellipsis">Rachel Platten</span>
                        </span>
                                        </a>
                                        <div className="dropdown-menu w dropdown-menu-scale ">
                                            <a className="dropdown-item" href="profile.html#profile">
                                                <span>Profile</span>
                                            </a>
                                            <a className="dropdown-item" href="profile.html#tracks">
                                                <span>Tracks</span>
                                            </a>
                                            <a className="dropdown-item" href="profile.html#playlists">
                                                <span>Playlists</span>
                                            </a>
                                            <a className="dropdown-item" href="profile.html#likes">
                                                <span>Likes</span>
                                            </a>
                                            <div className="dropdown-divider" />
                                            <a className="dropdown-item" href="docs.html">
                                                Need help?
                                            </a>
                                            <a className="dropdown-item" href="signin.html">Sign out</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="content" className="app-content white bg box-shadow-z2" role="main">
                            <div className="app-header hidden-lg-up white lt box-shadow-z1">
                                <div className="navbar">
                                    {/* brand */}
                                    <a href="index.html" className="navbar-brand md">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={32} height={32}>
                                            <circle cx={24} cy={24} r={24} fill="rgba(255,255,255,0.2)" />
                                            <circle cx={24} cy={24} r={22} fill="#1c202b" className="brand-color" />
                                            <circle cx={24} cy={24} r={10} fill="#ffffff" />
                                            <circle cx={13} cy={13} r={2} fill="#ffffff" className="brand-animate" />
                                            <path d="M 14 24 L 24 24 L 14 44 Z" fill="#FFFFFF" />
                                            <circle cx={24} cy={24} r={3} fill="#000000" />
                                        </svg>
                                        <img src="images/logo.png" alt="." className="hide" />
                                        <span className="hidden-folded inline">pulse</span>
                                    </a>
                                    <ul className="nav navbar-nav pull-right">
                                        <li className="nav-item">
                                            {/* Open side - Naviation on mobile */}
                                            <a data-toggle="modal" data-target="#aside" className="nav-link">
                                                <i className="material-icons">menu</i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="app-footer app-player grey bg">
                                <div className="playlist" style={{width: '100%'}} />
                            </div>
                            <div className="app-body" id="view">
                                <div className="pos-rlt">
                                    <div className="page-bg" data-stellar-ratio={2} style={{backgroundImage: 'url("images/b5.jpg")'}} />
                                </div>
                                <div className="page-content">
                                    <div className="padding b-b">
                                        <div className="row-col">
                                            <div className="col-sm w w-auto-xs m-b">
                                                <div className="item w rounded">
                                                    <div className="item-media">
                                                        <div className="item-media-content" style={{backgroundImage: 'url("images/b5.jpg")'}} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm">
                                                <div className="p-l-md no-padding-xs">
                                                    <div className="page-title">
                                                        <h1 className="inline">Rachel Platten</h1>
                                                        <label className="fa fa-star text-primary text-lg m-b v-m m-l-xs" title="Pro" />
                                                    </div>
                                                    <p className="item-desc text-ellipsis text-muted" data-ui-toggle-className="text-ellipsis">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam tu hanc copiosiorem etiam soles dicere. Nihil illinc huc pervenit. Verum hoc idem saepe faciamus. Quid ad utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.</p>
                                                    <div className="item-action m-b">
                                                        <a className="btn btn-icon white rounded btn-share pull-right" data-toggle="modal" data-target="#share-modal"><i className="fa fa-share-alt" /></a>
                                                        <button className="btn-playpause text-primary m-r-sm" />
                                                        <span>9 Albums, 105 Tracks</span>
                                                    </div>
                                                    <div className="block clearfix m-b">
                                                        <a className="btn btn-xs rounded white">Soul</a> <a className="btn btn-xs rounded white">Electro</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row-col">
                                        <div className="col-lg-9 b-r no-border-md">
                                            <div className="padding">
                                                <div className="nav-active-border b-primary bottom m-b-md">
                                                    <ul className="nav l-h-2x">
                                                        <li className="nav-item m-r inline">
                                                            <a className="nav-link active" href="#" data-toggle="tab" data-target="#tab_1">Overview</a>
                                                        </li>
                                                        <li className="nav-item m-r inline">
                                                            <a className="nav-link" href="#" data-toggle="tab" data-target="#tab_2">Tracks</a>
                                                        </li>
                                                        <li className="nav-item m-r inline">
                                                            <a className="nav-link" href="#" data-toggle="tab" data-target="#tab_3">Playlists</a>
                                                        </li>
                                                        <li className="nav-item m-r inline">
                                                            <a className="nav-link" href="#" data-toggle="tab" data-target="#tab_4">Profile</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="tab-content">
                                                    <div className="tab-pane active" id="tab_1">
                                                        <h5 className="m-b">Popular</h5>
                                                        <div className="row item-list item-list-md item-list-li m-b" id="tracks">
                                                            <div className="col-md-12 col-lg-6">
                                                                <div className="item r" data-id="item-2" data-src="http://api.soundcloud.com/tracks/259445397/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                                    <div className="item-media ">
                                                                        <a href="track.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/b1.jpg")'}} />
                                                                        <div className="item-overlay center">
                                                                            <button className="btn-playpause">Play</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="item-info">
                                                                        <div className="item-overlay bottom text-right">
                                                                            <a href="#" className="btn-favorite"><i className="fa fa-heart-o" /></a>
                                                                            <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h" /></a>
                                                                            <div className="dropdown-menu pull-right black lt" />
                                                                        </div>
                                                                        <div className="item-title text-ellipsis">
                                                                            <a href="track.detail.html">Fireworks</a>
                                                                        </div>
                                                                        <div className="item-author text-sm text-ellipsis hide">
                                                                            <a href="artist.detail.html" className="text-muted">Kygo</a>
                                                                        </div>
                                                                        <div className="item-meta text-sm text-muted">
                                        <span className="item-meta-stats text-xs ">
                                          <i className="fa fa-play text-muted" /> 30
                                          <i className="fa fa-heart m-l-sm text-muted" /> 10
                                        </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12 col-lg-6">
                                                                <div className="item r" data-id="item-11" data-src="http://api.soundcloud.com/tracks/218060449/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                                    <div className="item-media ">
                                                                        <a href="track.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/b10.jpg")'}} />
                                                                        <div className="item-overlay center">
                                                                            <button className="btn-playpause">Play</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="item-info">
                                                                        <div className="item-overlay bottom text-right">
                                                                            <a href="#" className="btn-favorite"><i className="fa fa-heart-o" /></a>
                                                                            <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h" /></a>
                                                                            <div className="dropdown-menu pull-right black lt" />
                                                                        </div>
                                                                        <div className="item-title text-ellipsis">
                                                                            <a href="track.detail.html">Spring</a>
                                                                        </div>
                                                                        <div className="item-author text-sm text-ellipsis hide">
                                                                            <a href="artist.detail.html" className="text-muted">Pablo Nouvelle</a>
                                                                        </div>
                                                                        <div className="item-meta text-sm text-muted">
                                        <span className="item-meta-stats text-xs ">
                                          <i className="fa fa-play text-muted" /> 4500
                                          <i className="fa fa-heart m-l-sm text-muted" /> 2310
                                        </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12 col-lg-6">
                                                                <div className="item r" data-id="item-1" data-src="http://api.soundcloud.com/tracks/269944843/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                                    <div className="item-media ">
                                                                        <a href="track.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/b0.jpg")'}} />
                                                                        <div className="item-overlay center">
                                                                            <button className="btn-playpause">Play</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="item-info">
                                                                        <div className="item-overlay bottom text-right">
                                                                            <a href="#" className="btn-favorite"><i className="fa fa-heart-o" /></a>
                                                                            <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h" /></a>
                                                                            <div className="dropdown-menu pull-right black lt" />
                                                                        </div>
                                                                        <div className="item-title text-ellipsis">
                                                                            <a href="track.detail.html">Pull Up</a>
                                                                        </div>
                                                                        <div className="item-author text-sm text-ellipsis hide">
                                                                            <a href="artist.detail.html" className="text-muted">Summerella</a>
                                                                        </div>
                                                                        <div className="item-meta text-sm text-muted">
                                        <span className="item-meta-stats text-xs ">
                                          <i className="fa fa-play text-muted" /> 3200
                                          <i className="fa fa-heart m-l-sm text-muted" /> 210
                                        </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12 col-lg-6">
                                                                <div className="item r" data-id="item-6" data-src="http://api.soundcloud.com/tracks/236107824/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                                    <div className="item-media ">
                                                                        <a href="track.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/b5.jpg")'}} />
                                                                        <div className="item-overlay center">
                                                                            <button className="btn-playpause">Play</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="item-info">
                                                                        <div className="item-overlay bottom text-right">
                                                                            <a href="#" className="btn-favorite"><i className="fa fa-heart-o" /></a>
                                                                            <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h" /></a>
                                                                            <div className="dropdown-menu pull-right black lt" />
                                                                        </div>
                                                                        <div className="item-title text-ellipsis">
                                                                            <a href="track.detail.html">Body on me</a>
                                                                        </div>
                                                                        <div className="item-author text-sm text-ellipsis hide">
                                                                            <a href="artist.detail.html" className="text-muted">Rita Ora</a>
                                                                        </div>
                                                                        <div className="item-meta text-sm text-muted">
                                        <span className="item-meta-stats text-xs ">
                                          <i className="fa fa-play text-muted" /> 330
                                          <i className="fa fa-heart m-l-sm text-muted" /> 220
                                        </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h5 className="m-b">Albums</h5>
                                                        <div className="row m-b">
                                                                <AlbumList/>
                                                            <div className="col-xs-4 col-sm-4 col-md-3">
                                                                <div className="item r" data-id="item-7" data-src="http://api.soundcloud.com/tracks/245566366/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                                    <div className="item-media ">
                                                                        <a href="track.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/b6.jpg")'}} />
                                                                        <div className="item-overlay center">
                                                                            <button className="btn-playpause">Play</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="item-info">
                                                                        <div className="item-overlay bottom text-right">
                                                                            <a href="#" className="btn-favorite"><i className="fa fa-heart-o" /></a>
                                                                            <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h" /></a>
                                                                            <div className="dropdown-menu pull-right black lt" />
                                                                        </div>
                                                                        <div className="item-title text-ellipsis">
                                                                            <a href="track.detail.html">Reflection (Deluxe)</a>
                                                                        </div>
                                                                        <div className="item-author text-sm text-ellipsis hide">
                                                                            <a href="artist.detail.html" className="text-muted">Fifth Harmony</a>
                                                                        </div>
                                                                        <div className="item-meta text-sm text-muted">
                                        <span className="item-meta-stats text-xs ">
                                          <i className="fa fa-play text-muted" /> 200
                                          <i className="fa fa-heart m-l-sm text-muted" /> 510
                                        </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-4 col-sm-4 col-md-3">
                                                                <div className="item r" data-id="item-11" data-src="http://api.soundcloud.com/tracks/218060449/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                                    <div className="item-media ">
                                                                        <a href="track.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/b10.jpg")'}} />
                                                                        <div className="item-overlay center">
                                                                            <button className="btn-playpause">Play</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="item-info">
                                                                        <div className="item-overlay bottom text-right">
                                                                            <a href="#" className="btn-favorite"><i className="fa fa-heart-o" /></a>
                                                                            <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h" /></a>
                                                                            <div className="dropdown-menu pull-right black lt" />
                                                                        </div>
                                                                        <div className="item-title text-ellipsis">
                                                                            <a href="track.detail.html">Spring</a>
                                                                        </div>
                                                                        <div className="item-author text-sm text-ellipsis hide">
                                                                            <a href="artist.detail.html" className="text-muted">Pablo Nouvelle</a>
                                                                        </div>
                                                                        <div className="item-meta text-sm text-muted">
                                        <span className="item-meta-stats text-xs ">
                                          <i className="fa fa-play text-muted" /> 4500
                                          <i className="fa fa-heart m-l-sm text-muted" /> 2310
                                        </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-4 col-sm-4 col-md-3">
                                                                <div className="item r" data-id="item-4" data-src="http://api.soundcloud.com/tracks/230791292/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                                    <div className="item-media ">
                                                                        <a href="track.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/b3.jpg")'}} />
                                                                        <div className="item-overlay center">
                                                                            <button className="btn-playpause">Play</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="item-info">
                                                                        <div className="item-overlay bottom text-right">
                                                                            <a href="#" className="btn-favorite"><i className="fa fa-heart-o" /></a>
                                                                            <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h" /></a>
                                                                            <div className="dropdown-menu pull-right black lt" />
                                                                        </div>
                                                                        <div className="item-title text-ellipsis">
                                                                            <a href="track.detail.html">What A Time To Be Alive</a>
                                                                        </div>
                                                                        <div className="item-author text-sm text-ellipsis hide">
                                                                            <a href="artist.detail.html" className="text-muted">Judith Garcia</a>
                                                                        </div>
                                                                        <div className="item-meta text-sm text-muted">
                                        <span className="item-meta-stats text-xs ">
                                          <i className="fa fa-play text-muted" /> 320
                                          <i className="fa fa-heart m-l-sm text-muted" /> 20
                                        </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-4 col-sm-4 col-md-3">
                                                                <div className="item r" data-id="item-9" data-src="http://api.soundcloud.com/tracks/264094434/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                                    <div className="item-media ">
                                                                        <a href="track.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/b8.jpg")'}} />
                                                                        <div className="item-overlay center">
                                                                            <button className="btn-playpause">Play</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="item-info">
                                                                        <div className="item-overlay bottom text-right">
                                                                            <a href="#" className="btn-favorite"><i className="fa fa-heart-o" /></a>
                                                                            <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h" /></a>
                                                                            <div className="dropdown-menu pull-right black lt" />
                                                                        </div>
                                                                        <div className="item-title text-ellipsis">
                                                                            <a href="track.detail.html">All I Need</a>
                                                                        </div>
                                                                        <div className="item-author text-sm text-ellipsis hide">
                                                                            <a href="artist.detail.html" className="text-muted">Pablo Nouvelle</a>
                                                                        </div>
                                                                        <div className="item-meta text-sm text-muted">
                                        <span className="item-meta-stats text-xs ">
                                          <i className="fa fa-play text-muted" /> 4500
                                          <i className="fa fa-heart m-l-sm text-muted" /> 2310
                                        </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-4 col-sm-4 col-md-3">
                                                                <div className="item r" data-id="item-10" data-src="http://api.soundcloud.com/tracks/237514750/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                                    <div className="item-media ">
                                                                        <a href="track.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/b9.jpg")'}} />
                                                                        <div className="item-overlay center">
                                                                            <button className="btn-playpause">Play</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="item-info">
                                                                        <div className="item-overlay bottom text-right">
                                                                            <a href="#" className="btn-favorite"><i className="fa fa-heart-o" /></a>
                                                                            <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h" /></a>
                                                                            <div className="dropdown-menu pull-right black lt" />
                                                                        </div>
                                                                        <div className="item-title text-ellipsis">
                                                                            <a href="track.detail.html">The Open Road</a>
                                                                        </div>
                                                                        <div className="item-author text-sm text-ellipsis hide">
                                                                            <a href="artist.detail.html" className="text-muted">Postiljonen</a>
                                                                        </div>
                                                                        <div className="item-meta text-sm text-muted">
                                        <span className="item-meta-stats text-xs ">
                                          <i className="fa fa-play text-muted" /> 860
                                          <i className="fa fa-heart m-l-sm text-muted" /> 240
                                        </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-4 col-sm-4 col-md-3">
                                                                <div className="item r" data-id="item-6" data-src="http://api.soundcloud.com/tracks/236107824/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                                    <div className="item-media ">
                                                                        <a href="track.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/b5.jpg")'}} />
                                                                        <div className="item-overlay center">
                                                                            <button className="btn-playpause">Play</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="item-info">
                                                                        <div className="item-overlay bottom text-right">
                                                                            <a href="#" className="btn-favorite"><i className="fa fa-heart-o" /></a>
                                                                            <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h" /></a>
                                                                            <div className="dropdown-menu pull-right black lt" />
                                                                        </div>
                                                                        <div className="item-title text-ellipsis">
                                                                            <a href="track.detail.html">Body on me</a>
                                                                        </div>
                                                                        <div className="item-author text-sm text-ellipsis hide">
                                                                            <a href="artist.detail.html" className="text-muted">Rita Ora</a>
                                                                        </div>
                                                                        <div className="item-meta text-sm text-muted">
                                        <span className="item-meta-stats text-xs ">
                                          <i className="fa fa-play text-muted" /> 330
                                          <i className="fa fa-heart m-l-sm text-muted" /> 220
                                        </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-4 col-sm-4 col-md-3">
                                                                <div className="item r" data-id="item-5" data-src="http://streaming.radionomy.com/JamendoLounge">
                                                                    <div className="item-media ">
                                                                        <a href="track.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/b4.jpg")'}} />
                                                                        <div className="item-overlay center">
                                                                            <button className="btn-playpause">Play</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="item-info">
                                                                        <div className="item-overlay bottom text-right">
                                                                            <a href="#" className="btn-favorite"><i className="fa fa-heart-o" /></a>
                                                                            <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h" /></a>
                                                                            <div className="dropdown-menu pull-right black lt" />
                                                                        </div>
                                                                        <div className="item-title text-ellipsis">
                                                                            <a href="track.detail.html">Live Radio</a>
                                                                        </div>
                                                                        <div className="item-author text-sm text-ellipsis hide">
                                                                            <a href="artist.detail.html" className="text-muted">Radionomy</a>
                                                                        </div>
                                                                        <div className="item-meta text-sm text-muted">
                                        <span className="item-meta-stats text-xs ">
                                          <i className="fa fa-play text-muted" /> 3340
                                          <i className="fa fa-heart m-l-sm text-muted" /> 100
                                        </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-4 col-sm-4 col-md-3">
                                                                <div className="item r" data-id="item-2" data-src="http://api.soundcloud.com/tracks/259445397/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                                    <div className="item-media ">
                                                                        <a href="track.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/b1.jpg")'}} />
                                                                        <div className="item-overlay center">
                                                                            <button className="btn-playpause">Play</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="item-info">
                                                                        <div className="item-overlay bottom text-right">
                                                                            <a href="#" className="btn-favorite"><i className="fa fa-heart-o" /></a>
                                                                            <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h" /></a>
                                                                            <div className="dropdown-menu pull-right black lt" />
                                                                        </div>
                                                                        <div className="item-title text-ellipsis">
                                                                            <a href="track.detail.html">Fireworks</a>
                                                                        </div>
                                                                        <div className="item-author text-sm text-ellipsis hide">
                                                                            <a href="artist.detail.html" className="text-muted">Kygo</a>
                                                                        </div>
                                                                        <div className="item-meta text-sm text-muted">
                                        <span className="item-meta-stats text-xs ">
                                          <i className="fa fa-play text-muted" /> 30
                                          <i className="fa fa-heart m-l-sm text-muted" /> 10
                                        </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="btn btn-sm white rounded">Show More</a>
                                                    </div>
                                                    <div className="tab-pane" id="tab_2">
                                                        <div className="row m-b">
                                                            <div className="col-xs-4 col-sm-4 col-md-3">
                                                                <div className="item r" data-id="item-2" data-src="http://api.soundcloud.com/tracks/259445397/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                                    <div className="item-media ">
                                                                        <a href="track.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/b1.jpg")'}} />
                                                                        <div className="item-overlay center">
                                                                            <button className="btn-playpause">Play</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="item-info">
                                                                        <div className="item-overlay bottom text-right">
                                                                            <a href="#" className="btn-favorite"><i className="fa fa-heart-o" /></a>
                                                                            <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h" /></a>
                                                                            <div className="dropdown-menu pull-right black lt" />
                                                                        </div>
                                                                        <div className="item-title text-ellipsis">
                                                                            <a href="track.detail.html">Fireworks</a>
                                                                        </div>
                                                                        <div className="item-author text-sm text-ellipsis hide">
                                                                            <a href="artist.detail.html" className="text-muted">Kygo</a>
                                                                        </div>
                                                                        <div className="item-meta text-sm text-muted">
                                        <span className="item-meta-stats text-xs ">
                                          <i className="fa fa-play text-muted" /> 30
                                          <i className="fa fa-heart m-l-sm text-muted" /> 10
                                        </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-4 col-sm-4 col-md-3">
                                                                <div className="item r" data-id="item-8" data-src="http://api.soundcloud.com/tracks/236288744/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                                    <div className="item-media ">
                                                                        <a href="track.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/b7.jpg")'}} />
                                                                        <div className="item-overlay center">
                                                                            <button className="btn-playpause">Play</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="item-info">
                                                                        <div className="item-overlay bottom text-right">
                                                                            <a href="#" className="btn-favorite"><i className="fa fa-heart-o" /></a>
                                                                            <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h" /></a>
                                                                            <div className="dropdown-menu pull-right black lt" />
                                                                        </div>
                                                                        <div className="item-title text-ellipsis">
                                                                            <a href="track.detail.html">Simple Place To Be</a>
                                                                        </div>
                                                                        <div className="item-author text-sm text-ellipsis hide">
                                                                            <a href="artist.detail.html" className="text-muted">RYD</a>
                                                                        </div>
                                                                        <div className="item-meta text-sm text-muted">
                                        <span className="item-meta-stats text-xs ">
                                          <i className="fa fa-play text-muted" /> 400
                                          <i className="fa fa-heart m-l-sm text-muted" /> 220
                                        </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-4 col-sm-4 col-md-3">
                                                                <div className="item r" data-id="item-1" data-src="http://api.soundcloud.com/tracks/269944843/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                                    <div className="item-media ">
                                                                        <a href="track.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/b0.jpg")'}} />
                                                                        <div className="item-overlay center">
                                                                            <button className="btn-playpause">Play</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="item-info">
                                                                        <div className="item-overlay bottom text-right">
                                                                            <a href="#" className="btn-favorite"><i className="fa fa-heart-o" /></a>
                                                                            <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h" /></a>
                                                                            <div className="dropdown-menu pull-right black lt" />
                                                                        </div>
                                                                        <div className="item-title text-ellipsis">
                                                                            <a href="track.detail.html">Pull Up</a>
                                                                        </div>
                                                                        <div className="item-author text-sm text-ellipsis hide">
                                                                            <a href="artist.detail.html" className="text-muted">Summerella</a>
                                                                        </div>
                                                                        <div className="item-meta text-sm text-muted">
                                        <span className="item-meta-stats text-xs ">
                                          <i className="fa fa-play text-muted" /> 3200
                                          <i className="fa fa-heart m-l-sm text-muted" /> 210
                                        </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-4 col-sm-4 col-md-3">
                                                                <div className="item r" data-id="item-7" data-src="http://api.soundcloud.com/tracks/245566366/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                                    <div className="item-media ">
                                                                        <a href="track.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/b6.jpg")'}} />
                                                                        <div className="item-overlay center">
                                                                            <button className="btn-playpause">Play</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="item-info">
                                                                        <div className="item-overlay bottom text-right">
                                                                            <a href="#" className="btn-favorite"><i className="fa fa-heart-o" /></a>
                                                                            <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h" /></a>
                                                                            <div className="dropdown-menu pull-right black lt" />
                                                                        </div>
                                                                        <div className="item-title text-ellipsis">
                                                                            <a href="track.detail.html">Reflection (Deluxe)</a>
                                                                        </div>
                                                                        <div className="item-author text-sm text-ellipsis hide">
                                                                            <a href="artist.detail.html" className="text-muted">Fifth Harmony</a>
                                                                        </div>
                                                                        <div className="item-meta text-sm text-muted">
                                        <span className="item-meta-stats text-xs ">
                                          <i className="fa fa-play text-muted" /> 200
                                          <i className="fa fa-heart m-l-sm text-muted" /> 510
                                        </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-4 col-sm-4 col-md-3">
                                                                <div className="item r" data-id="item-11" data-src="http://api.soundcloud.com/tracks/218060449/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                                    <div className="item-media ">
                                                                        <a href="track.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/b10.jpg")'}} />
                                                                        <div className="item-overlay center">
                                                                            <button className="btn-playpause">Play</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="item-info">
                                                                        <div className="item-overlay bottom text-right">
                                                                            <a href="#" className="btn-favorite"><i className="fa fa-heart-o" /></a>
                                                                            <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h" /></a>
                                                                            <div className="dropdown-menu pull-right black lt" />
                                                                        </div>
                                                                        <div className="item-title text-ellipsis">
                                                                            <a href="track.detail.html">Spring</a>
                                                                        </div>
                                                                        <div className="item-author text-sm text-ellipsis hide">
                                                                            <a href="artist.detail.html" className="text-muted">Pablo Nouvelle</a>
                                                                        </div>
                                                                        <div className="item-meta text-sm text-muted">
                                        <span className="item-meta-stats text-xs ">
                                          <i className="fa fa-play text-muted" /> 4500
                                          <i className="fa fa-heart m-l-sm text-muted" /> 2310
                                        </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-4 col-sm-4 col-md-3">
                                                                <div className="item r" data-id="item-9" data-src="http://api.soundcloud.com/tracks/264094434/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                                    <div className="item-media ">
                                                                        <a href="track.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/b8.jpg")'}} />
                                                                        <div className="item-overlay center">
                                                                            <button className="btn-playpause">Play</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="item-info">
                                                                        <div className="item-overlay bottom text-right">
                                                                            <a href="#" className="btn-favorite"><i className="fa fa-heart-o" /></a>
                                                                            <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h" /></a>
                                                                            <div className="dropdown-menu pull-right black lt" />
                                                                        </div>
                                                                        <div className="item-title text-ellipsis">
                                                                            <a href="track.detail.html">All I Need</a>
                                                                        </div>
                                                                        <div className="item-author text-sm text-ellipsis hide">
                                                                            <a href="artist.detail.html" className="text-muted">Pablo Nouvelle</a>
                                                                        </div>
                                                                        <div className="item-meta text-sm text-muted">
                                        <span className="item-meta-stats text-xs ">
                                          <i className="fa fa-play text-muted" /> 4500
                                          <i className="fa fa-heart m-l-sm text-muted" /> 2310
                                        </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-4 col-sm-4 col-md-3">
                                                                <div className="item r" data-id="item-6" data-src="http://api.soundcloud.com/tracks/236107824/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                                    <div className="item-media ">
                                                                        <a href="track.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/b5.jpg")'}} />
                                                                        <div className="item-overlay center">
                                                                            <button className="btn-playpause">Play</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="item-info">
                                                                        <div className="item-overlay bottom text-right">
                                                                            <a href="#" className="btn-favorite"><i className="fa fa-heart-o" /></a>
                                                                            <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h" /></a>
                                                                            <div className="dropdown-menu pull-right black lt" />
                                                                        </div>
                                                                        <div className="item-title text-ellipsis">
                                                                            <a href="track.detail.html">Body on me</a>
                                                                        </div>
                                                                        <div className="item-author text-sm text-ellipsis hide">
                                                                            <a href="artist.detail.html" className="text-muted">Rita Ora</a>
                                                                        </div>
                                                                        <div className="item-meta text-sm text-muted">
                                        <span className="item-meta-stats text-xs ">
                                          <i className="fa fa-play text-muted" /> 330
                                          <i className="fa fa-heart m-l-sm text-muted" /> 220
                                        </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-4 col-sm-4 col-md-3">
                                                                <div className="item r" data-id="item-4" data-src="http://api.soundcloud.com/tracks/230791292/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                                    <div className="item-media ">
                                                                        <a href="track.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/b3.jpg")'}} />
                                                                        <div className="item-overlay center">
                                                                            <button className="btn-playpause">Play</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="item-info">
                                                                        <div className="item-overlay bottom text-right">
                                                                            <a href="#" className="btn-favorite"><i className="fa fa-heart-o" /></a>
                                                                            <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h" /></a>
                                                                            <div className="dropdown-menu pull-right black lt" />
                                                                        </div>
                                                                        <div className="item-title text-ellipsis">
                                                                            <a href="track.detail.html">What A Time To Be Alive</a>
                                                                        </div>
                                                                        <div className="item-author text-sm text-ellipsis hide">
                                                                            <a href="artist.detail.html" className="text-muted">Judith Garcia</a>
                                                                        </div>
                                                                        <div className="item-meta text-sm text-muted">
                                        <span className="item-meta-stats text-xs ">
                                          <i className="fa fa-play text-muted" /> 320
                                          <i className="fa fa-heart m-l-sm text-muted" /> 20
                                        </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-4 col-sm-4 col-md-3">
                                                                <div className="item r" data-id="item-12" data-src="http://api.soundcloud.com/tracks/174495152/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                                    <div className="item-media ">
                                                                        <a href="track.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/b11.jpg")'}} />
                                                                        <div className="item-overlay center">
                                                                            <button className="btn-playpause">Play</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="item-info">
                                                                        <div className="item-overlay bottom text-right">
                                                                            <a href="#" className="btn-favorite"><i className="fa fa-heart-o" /></a>
                                                                            <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h" /></a>
                                                                            <div className="dropdown-menu pull-right black lt" />
                                                                        </div>
                                                                        <div className="item-title text-ellipsis">
                                                                            <a href="track.detail.html">Happy ending</a>
                                                                        </div>
                                                                        <div className="item-author text-sm text-ellipsis hide">
                                                                            <a href="artist.detail.html" className="text-muted">Postiljonen</a>
                                                                        </div>
                                                                        <div className="item-meta text-sm text-muted">
                                        <span className="item-meta-stats text-xs ">
                                          <i className="fa fa-play text-muted" /> 860
                                          <i className="fa fa-heart m-l-sm text-muted" /> 240
                                        </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-4 col-sm-4 col-md-3">
                                                                <div className="item r" data-id="item-5" data-src="http://streaming.radionomy.com/JamendoLounge">
                                                                    <div className="item-media ">
                                                                        <a href="track.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/b4.jpg")'}} />
                                                                        <div className="item-overlay center">
                                                                            <button className="btn-playpause">Play</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="item-info">
                                                                        <div className="item-overlay bottom text-right">
                                                                            <a href="#" className="btn-favorite"><i className="fa fa-heart-o" /></a>
                                                                            <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h" /></a>
                                                                            <div className="dropdown-menu pull-right black lt" />
                                                                        </div>
                                                                        <div className="item-title text-ellipsis">
                                                                            <a href="track.detail.html">Live Radio</a>
                                                                        </div>
                                                                        <div className="item-author text-sm text-ellipsis hide">
                                                                            <a href="artist.detail.html" className="text-muted">Radionomy</a>
                                                                        </div>
                                                                        <div className="item-meta text-sm text-muted">
                                        <span className="item-meta-stats text-xs ">
                                          <i className="fa fa-play text-muted" /> 3340
                                          <i className="fa fa-heart m-l-sm text-muted" /> 100
                                        </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-4 col-sm-4 col-md-3">
                                                                <div className="item r" data-id="item-3" data-src="http://api.soundcloud.com/tracks/79031167/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                                    <div className="item-media ">
                                                                        <a href="track.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/b2.jpg")'}} />
                                                                        <div className="item-overlay center">
                                                                            <button className="btn-playpause">Play</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="item-info">
                                                                        <div className="item-overlay bottom text-right">
                                                                            <a href="#" className="btn-favorite"><i className="fa fa-heart-o" /></a>
                                                                            <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h" /></a>
                                                                            <div className="dropdown-menu pull-right black lt" />
                                                                        </div>
                                                                        <div className="item-title text-ellipsis">
                                                                            <a href="track.detail.html">I Wanna Be In the Cavalry</a>
                                                                        </div>
                                                                        <div className="item-author text-sm text-ellipsis hide">
                                                                            <a href="artist.detail.html" className="text-muted">Jeremy Scott</a>
                                                                        </div>
                                                                        <div className="item-meta text-sm text-muted">
                                        <span className="item-meta-stats text-xs ">
                                          <i className="fa fa-play text-muted" /> 300
                                          <i className="fa fa-heart m-l-sm text-muted" /> 10
                                        </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-4 col-sm-4 col-md-3">
                                                                <div className="item r" data-id="item-10" data-src="http://api.soundcloud.com/tracks/237514750/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                                    <div className="item-media ">
                                                                        <a href="track.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/b9.jpg")'}} />
                                                                        <div className="item-overlay center">
                                                                            <button className="btn-playpause">Play</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="item-info">
                                                                        <div className="item-overlay bottom text-right">
                                                                            <a href="#" className="btn-favorite"><i className="fa fa-heart-o" /></a>
                                                                            <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h" /></a>
                                                                            <div className="dropdown-menu pull-right black lt" />
                                                                        </div>
                                                                        <div className="item-title text-ellipsis">
                                                                            <a href="track.detail.html">The Open Road</a>
                                                                        </div>
                                                                        <div className="item-author text-sm text-ellipsis hide">
                                                                            <a href="artist.detail.html" className="text-muted">Postiljonen</a>
                                                                        </div>
                                                                        <div className="item-meta text-sm text-muted">
                                        <span className="item-meta-stats text-xs ">
                                          <i className="fa fa-play text-muted" /> 860
                                          <i className="fa fa-heart m-l-sm text-muted" /> 240
                                        </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="btn btn-sm white rounded">Show More</a>
                                                    </div>
                                                    <div className="tab-pane" id="tab_3">
                                                        <div className="row m-b">
                                                            <div className="col-xs-4 col-sm-4 col-md-3">
                                                                <div className="item r" data-id="item-9" data-src="http://api.soundcloud.com/tracks/264094434/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                                    <div className="item-media ">
                                                                        <a href="track.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/b8.jpg")'}} />
                                                                        <div className="item-overlay center">
                                                                            <button className="btn-playpause">Play</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="item-info">
                                                                        <div className="item-overlay bottom text-right">
                                                                            <a href="#" className="btn-favorite"><i className="fa fa-heart-o" /></a>
                                                                            <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h" /></a>
                                                                            <div className="dropdown-menu pull-right black lt" />
                                                                        </div>
                                                                        <div className="item-title text-ellipsis">
                                                                            <a href="track.detail.html">All I Need</a>
                                                                        </div>
                                                                        <div className="item-author text-sm text-ellipsis hide">
                                                                            <a href="artist.detail.html" className="text-muted">Pablo Nouvelle</a>
                                                                        </div>
                                                                        <div className="item-meta text-sm text-muted">
                                        <span className="item-meta-stats text-xs ">
                                          <i className="fa fa-play text-muted" /> 4500
                                          <i className="fa fa-heart m-l-sm text-muted" /> 2310
                                        </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-4 col-sm-4 col-md-3">
                                                                <div className="item r" data-id="item-3" data-src="http://api.soundcloud.com/tracks/79031167/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                                    <div className="item-media ">
                                                                        <a href="track.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/b2.jpg")'}} />
                                                                        <div className="item-overlay center">
                                                                            <button className="btn-playpause">Play</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="item-info">
                                                                        <div className="item-overlay bottom text-right">
                                                                            <a href="#" className="btn-favorite"><i className="fa fa-heart-o" /></a>
                                                                            <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h" /></a>
                                                                            <div className="dropdown-menu pull-right black lt" />
                                                                        </div>
                                                                        <div className="item-title text-ellipsis">
                                                                            <a href="track.detail.html">I Wanna Be In the Cavalry</a>
                                                                        </div>
                                                                        <div className="item-author text-sm text-ellipsis hide">
                                                                            <a href="artist.detail.html" className="text-muted">Jeremy Scott</a>
                                                                        </div>
                                                                        <div className="item-meta text-sm text-muted">
                                        <span className="item-meta-stats text-xs ">
                                          <i className="fa fa-play text-muted" /> 300
                                          <i className="fa fa-heart m-l-sm text-muted" /> 10
                                        </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane" id="tab_4">
                                                        <div className="row-col m-b">
                                                            <div className="col-xs w-xs text-muted">Location</div>
                                                            <div className="col-xs">UK</div>
                                                        </div>
                                                        <div className="row-col m-b">
                                                            <div className="col-xs w-xs text-muted">Website</div>
                                                            <div className="col-xs"><a href="http://rachel-platten.com">http://rachel-platten.com</a></div>
                                                        </div>
                                                        <div className="row-col m-b">
                                                            <div className="col-xs w-xs text-muted" />
                                                            <div className="col-xs">
                                                                <a href className="btn btn-icon btn-social rounded white btn-sm">
                                                                    <i className="fa fa-facebook" />
                                                                    <i className="fa fa-facebook indigo" />
                                                                </a>
                                                                <a href className="btn btn-icon btn-social rounded white btn-sm">
                                                                    <i className="fa fa-twitter" />
                                                                    <i className="fa fa-twitter light-blue" />
                                                                </a>
                                                                <a href className="btn btn-icon btn-social rounded white btn-sm">
                                                                    <i className="fa fa-google-plus" />
                                                                    <i className="fa fa-google-plus red" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 w-xxl w-auto-md">
                                            <div className="padding" style={{bottom: 60}} data-ui-jp="stick_in_parent">
                                                <h6 className="text text-muted">5 Likes</h6>
                                                <div className="row item-list item-list-sm m-b">
                                                    <div className="col-xs-12">
                                                        <div className="item r" data-id="item-3" data-src="http://api.soundcloud.com/tracks/79031167/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                            <div className="item-media ">
                                                                <a href="track.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/b2.jpg")'}} />
                                                            </div>
                                                            <div className="item-info">
                                                                <div className="item-title text-ellipsis">
                                                                    <a href="track.detail.html">I Wanna Be In the Cavalry</a>
                                                                </div>
                                                                <div className="item-author text-sm text-ellipsis ">
                                                                    <a href="artist.detail.html" className="text-muted">Jeremy Scott</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-12">
                                                        <div className="item r" data-id="item-10" data-src="http://api.soundcloud.com/tracks/237514750/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                            <div className="item-media ">
                                                                <a href="track.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/b9.jpg")'}} />
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
                                                    <div className="col-xs-12">
                                                        <div className="item r" data-id="item-1" data-src="http://api.soundcloud.com/tracks/269944843/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                            <div className="item-media ">
                                                                <a href="track.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/b0.jpg")'}} />
                                                            </div>
                                                            <div className="item-info">
                                                                <div className="item-title text-ellipsis">
                                                                    <a href="track.detail.html">Pull Up</a>
                                                                </div>
                                                                <div className="item-author text-sm text-ellipsis ">
                                                                    <a href="artist.detail.html" className="text-muted">Summerella</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-12">
                                                        <div className="item r" data-id="item-11" data-src="http://api.soundcloud.com/tracks/218060449/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                            <div className="item-media ">
                                                                <a href="track.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/b10.jpg")'}} />
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
                                                        <div className="item r" data-id="item-7" data-src="http://api.soundcloud.com/tracks/245566366/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                            <div className="item-media ">
                                                                <a href="track.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/b6.jpg")'}} />
                                                            </div>
                                                            <div className="item-info">
                                                                <div className="item-title text-ellipsis">
                                                                    <a href="track.detail.html">Reflection (Deluxe)</a>
                                                                </div>
                                                                <div className="item-author text-sm text-ellipsis ">
                                                                    <a href="artist.detail.html" className="text-muted">Fifth Harmony</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h6 className="text text-muted">Go mobile</h6>
                                                <div className="btn-groups">
                                                    <a href className="btn btn-sm dark lt m-r-xs" style={{width: 135}}>
                              <span className="pull-left m-r-sm">
                                <i className="fa fa-apple fa-2x" />
                              </span>
                                                        <span className="clear text-left l-h-1x">
                                <span className="text-muted text-xxs">Download on the</span>
                                <b className="block m-b-xs">App Store</b>
                              </span>
                                                    </a>
                                                    <a href className="btn btn-sm dark lt" style={{width: 133}}>
                              <span className="pull-left m-r-sm">
                                <i className="fa fa-play fa-2x" />
                              </span>
                                                        <span className="clear text-left l-h-1x">
                                <span className="text-muted text-xxs">Get it on</span>
                                <b className="block m-b-xs m-r-xs">Google Play</b>
                              </span>
                                                    </a>
                                                </div>
                                                <div className="b-b m-y" />
                                                <div className="nav text-sm _600">
                                                    <a href="#" className="nav-link text-muted m-r-xs">About</a>
                                                    <a href="#" className="nav-link text-muted m-r-xs">Contact</a>
                                                    <a href="#" className="nav-link text-muted m-r-xs">Legal</a>
                                                    <a href="#" className="nav-link text-muted m-r-xs">Policy</a>
                                                </div>
                                                <p className="text-muted text-xs p-b-lg">© Copyright 2016</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="switcher">
                            <div className="switcher white" id="sw-theme">
                                <a href="#" data-ui-toggle-className="active" data-ui-target="#sw-theme" className="white sw-btn">
                                    <i className="fa fa-gear text-muted" />
                                </a>
                                <div className="box-header">
                                    <strong>Theme Switcher</strong>
                                </div>
                                <div className="box-divider" />
                                <div className="box-body">
                                    <p id="settingLayout" className="hidden-md-down">
                                        <label className="md-check m-y-xs" data-target="folded">
                                            <input type="checkbox" />
                                            <i className="green" />
                                            <span>Folded Aside</span>
                                        </label>
                                        <label className="m-y-xs pointer" data-ui-fullscreen data-target="fullscreen">
                                            <span className="fa fa-expand fa-fw m-r-xs" />
                                            <span>Fullscreen Mode</span>
                                        </label>
                                    </p>
                                    <p>Colors:</p>
                                    <p data-target="color">
                                        <label className="radio radio-inline m-a-0 ui-check ui-check-color ui-check-md">
                                            <input type="radio" name="color" defaultValue="primary" />
                                            <i className="primary" />
                                        </label>
                                        <label className="radio radio-inline m-a-0 ui-check ui-check-color ui-check-md">
                                            <input type="radio" name="color" defaultValue="accent" />
                                            <i className="accent" />
                                        </label>
                                        <label className="radio radio-inline m-a-0 ui-check ui-check-color ui-check-md">
                                            <input type="radio" name="color" defaultValue="warn" />
                                            <i className="warn" />
                                        </label>
                                        <label className="radio radio-inline m-a-0 ui-check ui-check-color ui-check-md">
                                            <input type="radio" name="color" defaultValue="success" />
                                            <i className="success" />
                                        </label>
                                        <label className="radio radio-inline m-a-0 ui-check ui-check-color ui-check-md">
                                            <input type="radio" name="color" defaultValue="info" />
                                            <i className="info" />
                                        </label>
                                        <label className="radio radio-inline m-a-0 ui-check ui-check-color ui-check-md">
                                            <input type="radio" name="color" defaultValue="blue" />
                                            <i className="blue" />
                                        </label>
                                        <label className="radio radio-inline m-a-0 ui-check ui-check-color ui-check-md">
                                            <input type="radio" name="color" defaultValue="warning" />
                                            <i className="warning" />
                                        </label>
                                        <label className="radio radio-inline m-a-0 ui-check ui-check-color ui-check-md">
                                            <input type="radio" name="color" defaultValue="danger" />
                                            <i className="danger" />
                                        </label>
                                    </p>
                                    <p>Themes:</p>
                                    <div data-target="bg" className="text-u-c text-center _600 clearfix">
                                        <label className="p-a col-xs-3 light pointer m-a-0">
                                            <input type="radio" name="theme" defaultValue hidden />
                                            <i className="active-checked fa fa-check" />
                                        </label>
                                        <label className="p-a col-xs-3 grey pointer m-a-0">
                                            <input type="radio" name="theme" defaultValue="grey" hidden />
                                            <i className="active-checked fa fa-check" />
                                        </label>
                                        <label className="p-a col-xs-3 dark pointer m-a-0">
                                            <input type="radio" name="theme" defaultValue="dark" hidden />
                                            <i className="active-checked fa fa-check" />
                                        </label>
                                        <label className="p-a col-xs-3 black pointer m-a-0">
                                            <input type="radio" name="theme" defaultValue="black" hidden />
                                            <i className="active-checked fa fa-check" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal white lt fade" id="search-modal" data-backdrop="false">
                            <a data-dismiss="modal" className="text-muted text-lg p-x modal-close-btn">×</a>
                            <div className="row-col">
                                <div className="p-a-lg h-v row-cell v-m">
                                    <div className="row">
                                        <div className="col-md-8 offset-md-2">
                                            <form action="search.html" className="m-b-md">
                                                <div className="input-group input-group-lg">
                                                    <input type="text" className="form-control" placeholder="Type keyword" data-ui-toggle-className="hide" data-ui-target="#search-result" />
                                                    <span className="input-group-btn">
                              <button className="btn b-a no-shadow white" type="submit">Search</button>
                            </span>
                                                </div>
                                            </form>
                                            <div id="search-result" className="animated fadeIn">
                                                <p className="m-b-md"><strong>23</strong> <span className="text-muted">Results found for: </span><strong>Keyword</strong></p>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="row item-list item-list-sm item-list-by m-b">
                                                            <div className="col-xs-12">
                                                                <div className="item r" data-id="item-12" data-src="http://api.soundcloud.com/tracks/174495152/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                                    <div className="item-media ">
                                                                        <a href="track.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/b11.jpg")'}} />
                                                                    </div>
                                                                    <div className="item-info">
                                                                        <div className="item-title text-ellipsis">
                                                                            <a href="track.detail.html">Happy ending</a>
                                                                        </div>
                                                                        <div className="item-author text-sm text-ellipsis ">
                                                                            <a href="artist.detail.html" className="text-muted">Postiljonen</a>
                                                                        </div>
                                                                        <div className="item-meta text-sm text-muted">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-12">
                                                                <div className="item r" data-id="item-9" data-src="http://api.soundcloud.com/tracks/264094434/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                                    <div className="item-media ">
                                                                        <a href="track.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/b8.jpg")'}} />
                                                                    </div>
                                                                    <div className="item-info">
                                                                        <div className="item-title text-ellipsis">
                                                                            <a href="track.detail.html">All I Need</a>
                                                                        </div>
                                                                        <div className="item-author text-sm text-ellipsis ">
                                                                            <a href="artist.detail.html" className="text-muted">Pablo Nouvelle</a>
                                                                        </div>
                                                                        <div className="item-meta text-sm text-muted">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-12">
                                                                <div className="item r" data-id="item-5" data-src="http://streaming.radionomy.com/JamendoLounge">
                                                                    <div className="item-media ">
                                                                        <a href="track.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/b4.jpg")'}} />
                                                                    </div>
                                                                    <div className="item-info">
                                                                        <div className="item-title text-ellipsis">
                                                                            <a href="track.detail.html">Live Radio</a>
                                                                        </div>
                                                                        <div className="item-author text-sm text-ellipsis ">
                                                                            <a href="artist.detail.html" className="text-muted">Radionomy</a>
                                                                        </div>
                                                                        <div className="item-meta text-sm text-muted">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-12">
                                                                <div className="item r" data-id="item-10" data-src="http://api.soundcloud.com/tracks/237514750/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                                    <div className="item-media ">
                                                                        <a href="track.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/b9.jpg")'}} />
                                                                    </div>
                                                                    <div className="item-info">
                                                                        <div className="item-title text-ellipsis">
                                                                            <a href="track.detail.html">The Open Road</a>
                                                                        </div>
                                                                        <div className="item-author text-sm text-ellipsis ">
                                                                            <a href="artist.detail.html" className="text-muted">Postiljonen</a>
                                                                        </div>
                                                                        <div className="item-meta text-sm text-muted">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="row item-list item-list-sm item-list-by m-b">
                                                            <div className="col-xs-12">
                                                                <div className="item">
                                                                    <div className="item-media rounded ">
                                                                        <a href="artist.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/a3.jpg")'}} />
                                                                    </div>
                                                                    <div className="item-info ">
                                                                        <div className="item-title text-ellipsis">
                                                                            <a href="artist.detail.html">Joe Holmes</a>
                                                                            <div className="text-sm text-muted">24 songs</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-12">
                                                                <div className="item">
                                                                    <div className="item-media rounded ">
                                                                        <a href="artist.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/a4.jpg")'}} />
                                                                    </div>
                                                                    <div className="item-info ">
                                                                        <div className="item-title text-ellipsis">
                                                                            <a href="artist.detail.html">Judith Garcia</a>
                                                                            <div className="text-sm text-muted">13 songs</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-12">
                                                                <div className="item">
                                                                    <div className="item-media rounded ">
                                                                        <a href="artist.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/a9.jpg")'}} />
                                                                    </div>
                                                                    <div className="item-info ">
                                                                        <div className="item-title text-ellipsis">
                                                                            <a href="artist.detail.html">Douglas Torres</a>
                                                                            <div className="text-sm text-muted">20 songs</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-12">
                                                                <div className="item">
                                                                    <div className="item-media rounded ">
                                                                        <a href="artist.detail.html" className="item-media-content" style={{backgroundImage: 'url("images/a2.jpg")'}} />
                                                                    </div>
                                                                    <div className="item-info ">
                                                                        <div className="item-title text-ellipsis">
                                                                            <a href="artist.detail.html">Jean Schneider</a>
                                                                            <div className="text-sm text-muted">8 songs</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="top-search" className="btn-groups">
                                                <strong className="text-muted">Top searches: </strong>
                                                <a href="#" className="btn btn-xs white">Happy</a>
                                                <a href="#" className="btn btn-xs white">Music</a>
                                                <a href="#" className="btn btn-xs white">Weekend</a>
                                                <a href="#" className="btn btn-xs white">Summer</a>
                                                <a href="#" className="btn btn-xs white">Holiday</a>
                                                <a href="#" className="btn btn-xs white">Blue</a>
                                                <a href="#" className="btn btn-xs white">Soul</a>
                                                <a href="#" className="btn btn-xs white">Calm</a>
                                                <a href="#" className="btn btn-xs white">Nice</a>
                                                <a href="#" className="btn btn-xs white">Home</a>
                                                <a href="#" className="btn btn-xs white">SLeep</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="share-modal" className="modal fade animate">
                            <div className="modal-dialog">
                                <div className="modal-content fade-down">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Share</h5>
                                    </div>
                                    <div className="modal-body p-lg">
                                        <div id="share-list" className="m-b">
                                            <a href className="btn btn-icon btn-social rounded btn-social-colored indigo" title="Facebook">
                                                <i className="fa fa-facebook" />
                                                <i className="fa fa-facebook" />
                                            </a>
                                            <a href className="btn btn-icon btn-social rounded btn-social-colored light-blue" title="Twitter">
                                                <i className="fa fa-twitter" />
                                                <i className="fa fa-twitter" />
                                            </a>
                                            <a href className="btn btn-icon btn-social rounded btn-social-colored red-600" title="Google+">
                                                <i className="fa fa-google-plus" />
                                                <i className="fa fa-google-plus" />
                                            </a>
                                            <a href className="btn btn-icon btn-social rounded btn-social-colored blue-grey-600" title="Trumblr">
                                                <i className="fa fa-tumblr" />
                                                <i className="fa fa-tumblr" />
                                            </a>
                                            <a href className="btn btn-icon btn-social rounded btn-social-colored red-700" title="Pinterst">
                                                <i className="fa fa-pinterest" />
                                                <i className="fa fa-pinterest" />
                                            </a>
                                        </div>
                                        <div>
                                            <input className="form-control" defaultValue="http://plamusic.com/slug" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    export default ArtistDetail