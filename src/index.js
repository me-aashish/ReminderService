const express = require('express');

const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');

const { sendBasicEmail } = require('./services/email-service')

const setUpAndStartServer = () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended : true }))

    app.listen(PORT, () => {
        console.log(`Server Started on Port : ${PORT}`);
        sendBasicEmail(
            'support@admin.com',
            'jha.aashish11@gmail.com',
            'This is the subject of testing email',
            'Hey! How are you ? This is a testing email'
        )
    })
}

setUpAndStartServer();