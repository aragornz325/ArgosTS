export const VehicleBrands = [
    'Chevrolet', 'Volkswagen', 'Nissan', 'Toyota', 'Ford', 'Fiat', 'Renault', 'Honda', 'Hyundai', 'Peugeot',
    'Citroën', 'Kia', 'Mitsubishi', 'Mazda', 'Subaru', 'Suzuki', 'Jeep', 'BMW', 'Mercedes-Benz', 'Audi',
    'Lexus', 'Porsche', 'Maserati', 'Jaguar', 'Land Rover', 'Volvo', 'Alfa Romeo', 'Tesla', 'Genesis',
    'Infiniti', 'Cadillac', 'Buick', 'Lincoln', 'Bentley', 'Ferrari', 'Lamborghini', 'Aston Martin',
    'Rolls-Royce', 'Bugatti'
  ];
  
  export const ServiceTypes = [
    'Transporte Público', 'Vehículo Privado', 'Servicio de Emergencia', 'Servicio de Entrega', 'Uso Comercial',
    'Uso Personal', 'Auto de Alquiler', 'Compartir Viaje', 'Otro'
  ];

  export const getYearsArray = () => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: currentYear - 1980 + 1 }, (_, i) => 1980 + i);
  };