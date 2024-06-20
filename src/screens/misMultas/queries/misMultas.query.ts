import { traffic_tickets_model } from '../../../../db/schemas/traffic_tickets';
import { client } from '../../../../db/client';
import { iTrafficTicket } from '../../../interfaces/trafficTicket';


export const getTrafficTickets = async ()=> {

    try {
    const result = await client.select().from(traffic_tickets_model);
    if (result.length === 0) {
        console.log('No se encontraron multas');
        return [];
    }

    return result;
    } catch (error) {
    console.error('Error al obtener las multas:', error);    
    }
    
};