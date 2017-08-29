// define reducers
import axios from 'axios';

export function albumReducers(state={ albums: [], tracks: [], artists: []}, action){
    let allAlbums = [...state.albums];
    switch (action.type){
        case 'GET_ALBUMS':
            return {albums :[...action.payload]}
            break;
        case 'GET_TRACKS':
            return {tracks :[...state.tracks, ...action.payload]}
            break;
        case 'GET_ARTISTS':
            return {artists :[...state.artists, ...action.payload]}
            break;
    }
    return state;
};

