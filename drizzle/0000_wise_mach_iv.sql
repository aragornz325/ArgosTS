CREATE TABLE `traffic_tickets` (
	`id` integer PRIMARY KEY NOT NULL,
	`date` text,
	`location` text,
	`plateNumber` text,
	`vehicleBrand` text,
	`vehicleModel` text,
	`modelYear` text,
	`color` text,
	`typeOfService` text,
	`infractionCode` text,
	`lawArticleNumber` text,
	`observations` text,
	`driverName` text,
	`driverLicenseNumber` text,
	`driverAddress` text,
	`driverPhone` text,
	`driverEmail` text,
	`latitude` integer,
	`longitude` integer,
	`is_syncronized` integer DEFAULT false NOT NULL,
	`photo` text
);
