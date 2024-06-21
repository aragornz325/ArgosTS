import { client } from "../../../../db/client";
import { traffic_tickets_model } from "../../../../db/schemas/traffic_tickets";
import { iTrafficTicket } from "../../../interfaces/trafficTicket";
import { eq} from 'drizzle-orm';



export const SQLite_Home_query = {
    getUnsyncronizedTickets: async () => {
        try {
            const response = await client.select().from(traffic_tickets_model).where(eq(traffic_tickets_model.synchronised, false));
            return response;
        } catch (error) {
            console.error('Error al recuperar tickets pendientes de envio:', error);
        }
    },

    changeSynchronisedStatus: async (ticket) => {
        try {
            const response = await client.update(traffic_tickets_model).set({ synchronised: true }).where(eq(traffic_tickets_model.id, ticket.id));
            return response;
        } catch (error) {
            console.error('Error al cambiar el estado de sincronización del ticket:', error);
        }
    }
}