import { sql } from "drizzle-orm"
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"

export const traffic_tickets_model = sqliteTable("traffic_tickets", {
	id: integer("id").primaryKey(),
	date: text("date"),
    location: text("location"),
    plateNumber: text("plateNumber"),
    vehicleBrand: text("vehicleBrand"),
    vehicleModel: text("vehicleModel"),
    modelYear: text("modelYear"),
    color: text("color"),
    typeOfService: text("typeOfService"),
    infractionCode: text("infractionCode"),
    lawArticleNumber: text("lawArticleNumber"),
    observations: text("observations"),
    driverName: text("driverName"),
    driverLicenseNumber: text("driverLicenseNumber"),
    driverAddress: text("driverAddress"),
    driverPhone: text("driverPhone"),
    driverEmail: text("driverEmail"),
    latitude: integer("latitude"),
    longitude: integer("longitude"),
    photo: text("photo"),
})

export type SelectTrafficTickets = typeof traffic_tickets_model.$inferSelect