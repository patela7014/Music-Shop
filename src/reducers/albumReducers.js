"use strict"

// define reducers
export function albumReducers(state={ albums: []
}, action){
    let allAlbums = [...state.albums];
    switch (action.type){
        case 'GET_ALBUMS':
            return {albums : allAlbums}
            break;
    }
    return state;
};

