var request = require('request');

var base_url = 'http://content.guardianapis.com/'

module.exports = 
    function (ctx, cb) {
        var api_key = ctx.data.API_KEY
        request.get(base_url + 'search?q='+ctx.data.q+'&api-key=' + api_key, function (error, res, body) {
            if (error)
                cb(error);
            else
                cb(null, {
                    results: JSON.parse(body).response.results
                });
        });
    }