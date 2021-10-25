const request = require('request')

const GET_YOUTUBE_STATISTICS = () => {
  return new Promise((resolve, reject) => {
    request('https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=4Npv_bV4rN4&key=AIzaSyAEzhdGweeeR-32zlCN6cL74iqBRRzcQfo', { json: true }, (err, res, body) => {
      if (err) reject(err)
      resolve(body.items[0].statistics.viewCount)
    });
  })
}
module.exports = {
  GET_YOUTUBE_STATISTICS
  /*
  ** This method returns a promise
  ** which gets resolved or rejected based
  ** on the result from the API
  */

}