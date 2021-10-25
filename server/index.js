const express = require('express')
const api_helper = require('./api_helper')
const app = express()
const port = 3000

/*
* Route to DEMO the API call to a REST API Endpoint 
* REST URL : https://jsonplaceholder.typicode.com/todos/1
*/
app.get('/youtube', (req, res) => {
    api_helper.GET_YOUTUBE_STATISTICS()
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.send(error)
        })
})
// app.get('/twitch', (req, res) => {
//     // client id 5yjhvepdd4sshsg1grmfdx5pvr27vr
//     // client secret fx6z12kojoeimfo8b8nd7vy0kn2h2k
//     api_helper.GET_TWITCH_STATISTICS()
//         .then(response => {
//             res.json(response)
//         })
//         .catch(error => {
//             res.send(error)
//         })
// })
app.listen(port, () => console.log(`App listening on port ${port}!`))