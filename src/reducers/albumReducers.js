// define reducers
import axios from 'axios';

export function albumReducers(state={ albums: [], tracks: [], artists: []}, action){
    let allAlbums = [...state.albums];
    switch (action.type){
        case 'GET_ALBUMS':

            return {...state, albums:[...action.payload]}
            break;
        case 'GET_TRACKS':
            return {...state, tracks:[...action.payload]}
            break;
        case 'GET_ARTISTS':
            return {...state, artists:[...action.payload]}
            break;
    }
    console.log('state',state);

    return state;
};

