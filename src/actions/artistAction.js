"use strict"
import axios from 'axios';

export function getArtists(){
    return function(dispatch){
        axios
            .get("http://api.napster.com/v2.2/artists/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4")
            .then(function(response) {
                dispatch({type:"GET_ARTISTS", payload: response.data.artists})
            })
            .catch(function(err){
                dispatch({type:"GET_ARTISTS_FAILED", payload :err})
            })
    }
}