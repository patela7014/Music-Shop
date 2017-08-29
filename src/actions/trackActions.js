"use strict"

import axios from 'axios';

export function getTracks(){
    return function(dispatch){
        axios
            .get("http://api.napster.com/v2.2/albums/new?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4")
            .then(function(response) {
                console.log('data',response.data.albums)
                dispatch({type:"GET_TRACKS", payload: response.data.albums})
            })
            .catch(function(err){
                dispatch({type:"GET_TRACKS_FAILED", payload :err})
            })
    }
}