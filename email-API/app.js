const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const sgMail = require('@sendgrid/mail')
const sendGrid = require('@sendGrid/mail');

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.get('/api', (req, res, next) => {
    res.send('API Status: everything is AWESOMEEE')
});
//testing api status
// app.listen(3001, '0.0.0.0');

app.post('/api/email', (req, res, next) => {

    console.log(req.body);

    sendGrid.setApiKey('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');
    sgMail.setApiKey(process.env.setApiKey="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");

    const msg = {
        to: 'leho.vietquan@gmail.com',
        from: req.body.email,
        subject: 'Website Contact',
        text: req.body.message
    }

    sendGrid.send(msg)
        .then(result => {

            res.status(200).json({
                success: true
            });

        })
        .catch(err => {

            console.log('error: ', err);
            res.status(401).json({
                success: false
            });

        });
});


app.listen(3030, '0.0.0.0');