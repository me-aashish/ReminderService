const TicketRepository = require('../repository/ticket-repository');
const repo = new TicketRepository();

class TicketService{
    async createTicket(data){
        try {
            const ticket = await repo.createTicket(data);
            return ticket;
        } catch (error) {
            console.log("Something went wrong on service layer");
            throw error;

        }
    }

    async getTickets(timestamp){
        try {
            const ticket = await repo.getTickets();
            return ticket;
        } catch (error) {
            console.log("Something went wrong on service layer");
            throw error;
        }
    } 

    async fetchPendingEmails(timestamp){
        try {
            const ticket = await repo.get({status : "PENDING"});
            return ticket;
        } catch (error) {
            console.log("Something went wrong on service layer");
            throw error;
        }
    }

    async UpdateTicket(ticketId,data){
        try {
            const ticket = await repo.update(ticketId,data);
            console.log(ticket);
            return ticket;
        } catch (error) {
            console.log("Something went wrong on service layer");
            throw error;
        }
    }
}

module.exports = TicketService