"use strict"
import axios from 'axios';

export function getAlbums(){
    return function(dispatch){
        axios
            .get("https://api.napster.com/v2.2/tracks/top?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm")
            .then(function(response) {
                dispatch({type:"GET_ALBUMS", payload: response.data.tracks})
            })
            .catch(function(err){
                dispatch({type:"GET_ALBUMS_FAILED", payload :err})
            })
    }
}