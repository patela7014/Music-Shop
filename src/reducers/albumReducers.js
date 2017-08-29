// define reducers
import axios from 'axios';

export function albumReducers(state={ albums: []}, action){
    let allAlbums = [...state.albums];
    switch (action.type){
        case 'GET_ALBUMS':
            return {albums :[...action.payload]}
            break;
    }
    return state;
};

