var qs = require('querystring');
var request = require('request');

function endpoint(route, options, cb) {
    if (typeof options === 'function') cb = options;

    let api_key = "ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm";
    let base_url = "https://api.napster.com/v2.2/"+route+"?apikey="+api_key;
    request(base_url,
        function(err, res, body) {
            if (err) cb(err);
            else if (res.statusCode == 200) cb(null, JSON.parse(body));
        }
    )
}

module.exports = {
    tracks: function(options, cb) {endpoint("tracks/top", options, cb)}
}

