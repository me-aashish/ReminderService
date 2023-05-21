const express = require('express');

const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');

const { sendBasicEmail } = require('./services/email-service');

const TicketController = require('./controllers/ticket-controller');

const job = require('./utils/jobs');

const setUpAndStartServer = () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended : true }));

    app.post('/api/v1/tickets', TicketController.create)

    app.listen(PORT, async() => {
        console.log(`Server Started on Port : ${PORT}`);
        job();
        
        // sendBasicEmail(
        //     'support@admin.com',
        //     'jha.aashish11@gmail.com',
        //     'This is the subject of testing email',
        //     'Hey! How are you ? This is a testing email'
        // )
    })
}

setUpAndStartServer();