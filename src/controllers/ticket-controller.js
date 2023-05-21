const TicketService = require('../services/ticket-service');
const serv = new TicketService();

create = async (req,res) => {
    try {
        const response = await serv.createTicket(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully created an email reminder",
            err : {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to create an email reminder",
            err : error
        })
    }
}

module.exports = {
    create
}