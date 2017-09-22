const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const session = require('express-session')
const config = require('./config.js')
const userCtrl = require('./controllers/userCtrl.js')
const profileCtrl = require('./controllers/profileCtrl')
const app = express()
.use(bodyParser.json())
.use(cors({origin:'http://localhost:3002'}))
.use(session(config))
.use(express.static(__dirname + '/public'))


.post('/api/login', userCtrl.login)
.get('/api/profiles', profileCtrl.getFriendsProfiles)


.listen(3002, ()=>console.log(__dirname))
