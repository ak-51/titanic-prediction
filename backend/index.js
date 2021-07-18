const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
var spawn = require('child_process').spawn


dotenv.config()
const PORT = process.env.PORT || 5000
const app = express()
app.use(cors())
app.use(express.json())


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})

app.post('/api', (req, res) => {
    var survived = 0
    var sex = req.body.Gender
    var age = req.body.Age
    var fam = req.body.NSS
    var parch = req.body.Parch
    var fare = req.body.Fare
    var clss = req.body.Clss
    var deck = req.body.Deck
    var town = req.body.Town
    var alone = req.body.Alone

    var dataset = [survived, sex, age, fam, parch, fare, clss, deck, town, alone]

    const runfile = spawn('python', ['Linear_Regression.py'])
    runfile.stdin.write(JSON.stringify(dataset))
    runfile.stdin.end()
    runfile.stdout.on('data', data => {
        test = data.toString()
    })
    runfile.stderr.on('data', (data) => {
        //console.log('err results: %j', data.toString('utf8'))
    })
    runfile.stdout.on('end', function(){
        console.log(test)
        res.json({ percentage: test })
    })
})

/*
var survived = 0
var sex = "male"
var age = 38
var fam = 0
var parch = 0
var fare = 7.3
var clss = "Third"
var deck = "unknown"
var town = "Southampton"
var alone = "y"

var dataset = [survived, sex, age, fam, parch, fare, clss, deck, town, alone]

const runfile = spawn('python', ['backend/Linear_Regression.py'])
runfile.stdin.write(JSON.stringify(dataset))
runfile.stdin.end()
runfile.stdout.on('data', data => {
    test = data.toString()
})
runfile.stderr.on('data', (data) => {
    //console.log('err results: %j', data.toString('utf8'))
})
runfile.stdout.on('end', function(){
    console.log(test)
})
*/