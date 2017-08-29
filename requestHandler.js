var napster = require('./napster-endpoint');
var axios = require('axios');

function handleRender(req, res){

    axios
        .get("https://api.napster.com/v2.2/tracks/top?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm")
        .then(function(result) {
            let myHtml = JSON.stringify(result.data);
            res.render('index',{myHtml})
        })
    // napster.tracks({}, (err, data) => {
    //     if (err){
    //         console.error(err)
    //     }else{
    //         // let myHtml = res.json(data);
    //         // res.render('index',{myHtml})
    //     }
    // })
}

module.exports = handleRender;