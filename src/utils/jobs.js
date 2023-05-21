const cron = require('node-cron');
const TicketService = require('../services/ticket-service');
const serv = new TicketService();
const emailService = require('../services/email-service');
const sender = require('../config/emailConfig');

const setUpJob = () => {
    cron.schedule('*/1 * * * *', async () => {
        const response = await serv.fetchPendingEmails();
       
        response.forEach((email)=>{
            sender.sendMail({
                from: "reminder@airlone.com",
                to: email.recepientEmail,
                subject: email.subject,
                text: email.content
            })
            , 
            async (err,data)=> {
                if(err) {
                    console.log(err);
                } else {
                    console.log(data);
                    await emailService.updateTicket(email.id, {status: "SUCCESS"});
                }
            }
        })
        console.log(response);
    })
}

module.exports = setUpJob;