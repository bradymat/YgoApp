import Request from 'superagent'
let _ = require('lodash')
let cheerio = require('cheerio')
var req = require('request')
var images = []

//user enters a search term
//get back 9 ids
//send 9 id requests to get urls
//scrap img from the urls


module.exports = function (query, callback) {
  var getId = `http://yugioh.wikia.com/api/v1/Search/List?query=${query}&limit=12&batch=1&namespaces=106`
  Request.get(getId)
  .end((err, res) => {
    // console.log("first", res);
    var ids = _.map(res.body.items, (card) => card.id)
    // console.log('ids', ids)
    ids.forEach( function(id){
      // var images = []
      var getUrl = `http://yugioh.wikia.com/api/v1/Articles/Details?ids=${id}&abstract=100&width=300&height=435`
      Request.get(getUrl)
      .end((err, res) => {
        // console.log("second", res)
        var url = res.body.items[id].url
        var newUrl = url.slice(16)
        images.length = 0
        req(`http://yugioh.wikia.com/${newUrl}`, function(err, resp, body){
          if(!err && resp.statusCode == 200){
            var $ = cheerio.load(body)
            $('tr:nth-child(2) > td > a > img', '#mw-content-text').each(function(){
              var image = (this.attribs.src)
              images.push(image)
              console.log("image", image)
              console.log("images", images);
            })
          }
        })
      })
      callback(images)
    })
  })
}
// #mw-content-text > table > tbody > tr:nth-child(2) > td > a > img
