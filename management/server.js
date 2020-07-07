const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/api/customers', (req, res)=>{
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': 'Hong gil-dong',
            'birthday' : '961222',
            'gender' : 'Male',
            'jobs' : 'Graduent'
        },
        {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': 'Kim gae-ddong',
            'birthday' : '001201',
            'gender' : 'Male',
            'jobs' : 'Programmer'
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': 'Park chul-soo',
            'birthday' : '930201',
            'gender' : 'Male',
            'jobs' : 'None'
        }
    ])
});

app.listen(port, () => console.log(`Listening on port ${port}`));