import theme from "../theme";

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
    return Array.from({ length: currentYear - 1945 + 1 }, (_, i) => 1945 + i).reverse();
    
  };

  export const pickerStyles = {
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        marginVertical:10,
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    placeholder: {
        color: theme.colors.error,
        fontSize: 14, // Tamaño de la letra del placeholder
    },
    icon: {
      position: 'absolute', 
      right: 0
  },
};