
import { client } from "../../../../db/client";
import { traffic_tickets_model } from "../../../../db/schemas/traffic_tickets";
import { iTrafficTicket } from "../../../interfaces/trafficTicket";



export const SQLite_TT_query = {
    addTrafficTicket: async (values: iTrafficTicket) => {
        try {
            const response = await client.insert(traffic_tickets_model).values({
                date: values.date.toISOString(),
                location: values.location,
                plateNumber: values.plateNumber,
                vehicleBrand: values.vehicleBrand,
                vehicleModel: values.vehicleModel,
                modelYear: values.modelYear,
                color: values.color,
                typeOfService: values.typeOfService,
                infractionCode: values.infractionCode,
                lawArticleNumber: values.lawArticleNumber,
                observations: values.observations,
                driverName: values.driverName,
                driverLicenseNumber: values.driverLicenseNumber,
                driverAddress: values.driverAddress,
                driverPhone: values.driverPhone,
                driverEmail: values.driverEmail,
                latitude: values.latitude,
                longitude: values.longitude,
                photo: values.photo,
            }).execute();
            return response;
        } catch (error) {
            console.error('Error al insertar el ticket:', error);
        }
    },
}