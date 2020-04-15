exports.seed = function(knex, Promise) {
  return knex('cars').insert([
    { make:'Bugatti', model: 'Chiron', category:'EXOTIC', size:'E', },
    { make:'Bugatti', model: 'Grand Sport', category:'EXOTIC', size:'E', },
    { make:'Bugatti', model: 'Veyron', category:'EXOTIC', size:'E', },

    { make:'Buick', model: 'Cascada', category:'COUPE', size:'M', },
    { make:'Buick', model: 'Century', category:'SEDAN', size:'M', },
    { make:'Buick', model: 'Enclave', category:'SUV', size:'L', },
    { make:'Buick', model: 'Encore', category:'SUV', size:'L', },
    { make:'Buick', model: 'Envision', category:'SUV', size:'L', },
    { make:'Buick', model: 'LaCrosse', category:'SEDAN', size:'M', },
    { make:'Buick', model: 'Le Sabre', category:'SEDAN', size:'M', },
    { make:'Buick', model: 'Lucerne', category:'SEDAN', size:'M', },
    { make:'Buick', model: 'Park Avenue', category:'SEDAN', size:'S', },
    { make:'Buick', model: 'Rainier', category:'SUV', size:'L', },
    { make:'Buick', model: 'Reatta', category:'COUPE', size:'S', },
    { make:'Buick', model: 'Regal', category:'SEDAN', size:'M', },
    { make:'Buick', model: 'Rendezvous', category:'SUV', size:'L', },
    { make:'Buick', model: 'Skyhawk', category:'SEDAN', size:'S', },
    { make:'Buick', model: 'Skylark', category:'COUPE', size:'M', },
    { make:'Buick', model: 'Somerset', category:'COUPE', size:'S', },
    { make:'Buick', model: 'Terraza', category:'MINIVAN', size:'L', },
    { make:'Buick', model: 'Verano', category:'SEDAN', size:'S', },

    { make:'Cadillac', model: 'Allante', category:'COUPE', size:'M', },
    { make:'Cadillac', model: 'ATS', category:'SEDAN', size:'M', },
    { make:'Cadillac', model: 'ATS-V', category:'SEDAN', size:'M', },
    { make:'Cadillac', model: 'Catera', category:'SEDAN', size:'M', },
    { make:'Cadillac', model: 'CT-6', category:'SEDAN', size:'L', },
    { make:'Cadillac', model: 'CTS', category:'SEDAN', size:'M', },
    { make:'Cadillac', model: 'CTS-V', category:'SEDAN', size:'M', },
    { make:'Cadillac', model: 'DTS', category:'SEDAN', size:'M', },
    { make:'Cadillac', model: 'El Dorado', category:'COUPE', size:'L', },
    { make:'Cadillac', model: 'ELR', category:'COUPE', size:'M', },
    { make:'Cadillac', model: 'Escalade', category:'SUV', size:'E', },
    { make:'Cadillac', model: 'Escalade ESV', category:'SUV', size:'E', },
    { make:'Cadillac', model: 'Escalade EXT', category:'TRUCK', size:'E', },
    { make:'Cadillac', model: 'SRX', category:'SUV', size:'L', },
    { make:'Cadillac', model: 'STS', category:'SEDAN', size:'M', },
    { make:'Cadillac', model: 'XLR', category:'COUPE', size:'E', },
    { make:'Cadillac', model: 'XT5', category:'SUV', size:'L', },
    { make:'Cadillac', model: 'XT6', category:'SUV', size:'L', },
    { make:'Cadillac', model: 'XTS', category:'SEDAN', size:'L', },

    { make:'Chevrolet', model: 'Astro', category:'MINIVAN', size:'L', },
    { make:'Chevrolet', model: 'Avalanche', category:'TRUCK', size:'E', },
    { make:'Chevrolet', model: 'Aveo', category:'SEDAN', size:'S', },
    { make:'Chevrolet', model: 'Aveo5', category:'SEDAN', size:'S', },
    { make:'Chevrolet', model: 'Beretta', category:'COUPE', size:'M', },
    { make:'Chevrolet', model: 'Blazer', category:'SUV', size:'L', },
    { make:'Chevrolet', model: 'Bolt', category:'SEDAN', size:'M', },
    { make:'Chevrolet', model: 'Camaro', category:'COUPE', size:'M', },
    { make:'Chevrolet', model: 'Captiva Sport', category:'SUV', size:'L', },
    { make:'Chevrolet', model: 'Cavalier', category:'SEDAN', size:'S', },
    { make:'Chevrolet', model: 'City Express', category:'MINIVAN', size:'L', },
    { make:'Chevrolet', model: 'Cobalt', category:'SEDAN', size:'S', },
    { make:'Chevrolet', model: 'Colorado', category:'TRUCK', size:'L', },
    { make:'Chevrolet', model: 'Corsica', category:'SEDAN', size:'M', },
    { make:'Chevrolet', model: 'Corvette', category:'COUPE', size:'L', },
    { make:'Chevrolet', model: 'Cruze', category:'SEDAN', size:'S', },
    { make:'Chevrolet', model: 'El Camino', category:'TRUCK', size:'L', },
    { make:'Chevrolet', model: 'Equinox', category:'SUV', size:'L', },
    { make:'Chevrolet', model: 'Express 1500', category:'VAN', size:'E', },
    { make:'Chevrolet', model: 'Express 2500', category:'VAN', size:'E', },
    { make:'Chevrolet', model: 'Express 3500', category:'VAN', size:'E', },
    { make:'Chevrolet', model: 'HHR', category:'SEDAN', size:'S', },
    { make:'Chevrolet', model: 'Impala', category:'SEDAN', size:'M', },
    { make:'Chevrolet', model: 'Lumina', category:'SEDAN', size:'M', },
    { make:'Chevrolet', model: 'LUV', category:'TRUCK', size:'S', },
    { make:'Chevrolet', model: 'Malibu', category:'SEDAN', size:'M', },
    { make:'Chevrolet', model: 'Metro', category:'SEDAN', size:'S', },
    { make:'Chevrolet', model: 'Monte Carlo', category:'COUPE', size:'M', },
    { make:'Chevrolet', model: 'Prizm', category:'SEDAN', size:'S', },
    { make:'Chevrolet', model: 'S10 Blazer', category:'SUV', size:'L', },
    { make:'Chevrolet', model: 'S10 Pickup', category:'TRUCK', size:'L', },
    { make:'Chevrolet', model: 'Silverado 1500', category:'TRUCK', size:'L', },
    { make:'Chevrolet', model: 'Silverado 2500', category:'TRUCK', size:'E', },
    { make:'Chevrolet', model: 'Silverado 3500', category:'TRUCK', size:'E', },
    { make:'Chevrolet', model: 'Sonic', category:'SEDAN', size:'S', },
    { make:'Chevrolet', model: 'Spark', category:'SEDAN', size:'S', },
    { make:'Chevrolet', model: 'Spectrum', category:'SEDAN', size:'S', },
    { make:'Chevrolet', model: 'Sprint', category:'COUPE', size:'S', },
    { make:'Chevrolet', model: 'SS', category:'SEDAN', size:'L', },
    { make:'Chevrolet', model: 'SSR', category:'TRUCK', size:'E', },
    { make:'Chevrolet', model: 'Suburban', category:'SUV', size:'E', },
    { make:'Chevrolet', model: 'Tahoe', category:'SUV', size:'L', },
    { make:'Chevrolet', model: 'Tracker', category:'SUV', size:'L', },
    { make:'Chevrolet', model: 'TrailBlazer', category:'SUV', size:'L', },
    { make:'Chevrolet', model: 'TrailBlazer EXT', category:'SUV', size:'L', },
    { make:'Chevrolet', model: 'Traverse', category:'SUV', size:'L', },
    { make:'Chevrolet', model: 'Trax', category:'SUV', size:'L', },
    { make:'Chevrolet', model: 'Uplander', category:'MINIVAN', size:'L', },
    { make:'Chevrolet', model: 'Venture', category:'MINIVAN', size:'L', },
    { make:'Chevrolet', model: 'Volt', category:'SEDAN', size:'M', },

    { make:'Chrysler', model: '200', category:'SEDAN', size:'S', },
    { make:'Chrysler', model: '300', category:'SEDAN', size:'M', },
    { make:'Chrysler', model: '300M', category:'SEDAN', size:'M', },
    { make:'Chrysler', model: 'Aspen', category:'SUV', size:'L', },
    { make:'Chrysler', model: 'Cirrus', category:'SEDAN', size:'S', },
    { make:'Chrysler', model: 'Concorde', category:'SEDAN', size:'M', },
    { make:'Chrysler', model: 'Cordoba', category:'COUPE', size:'M', },
    { make:'Chrysler', model: 'Crossfire', category:'COUPE', size:'M', },
    { make:'Chrysler', model: 'E Class', category:'SEDAN', size:'M', },
    { make:'Chrysler', model: 'Fifth Avenue', category:'SEDAN', size:'M', },
    { make:'Chrysler', model: 'Grand Voyager', category:'MINVAN', size:'L', },
    { make:'Chrysler', model: 'Laser', category:'COUPE', size:'M', },
    { make:'Chrysler', model: 'LeBaron', category:'COUPE', size:'M', },
    { make:'Chrysler', model: 'LeBaron GTS', category:'SEDAN', size:'M', },
    { make:'Chrysler', model: 'LHS', category:'SEDAN', size:'M', },
    { make:'Chrysler', model: 'New Yorker', category:'SEDAN', size:'M', },
    { make:'Chrysler', model: 'Pacifica', category:'SUV', size:'L', },
    { make:'Chrysler', model: 'Prowler', category:'EXOTIC', size:'E', },
    { make:'Chrysler', model: 'PT Cruiser', category:'SEDAN', size:'S', },
    { make:'Chrysler', model: 'Sebring', category:'SEDAN', size:'S', },
    { make:'Chrysler', model: 'Town & Country', category:'MINIVAN', size:'L', },
    { make:'Chrysler', model: 'Voyager', category:'MINIVAN', size:'L', },

    { make:'Daewoo', model: 'Lanos', category:'SEDAN', size:'S', },
    { make:'Daewoo', model: 'Leganza', category:'SEDAN', size:'S', },
    { make:'Daewoo', model: 'Nubira', category:'SEDAN', size:'S', },

    { make:'Dodge', model: 'Avenger', category:'SEDAN', size:'S', },
    { make:'Dodge', model: 'B1500', category:'VAN', size:'E', },
    { make:'Dodge', model: 'B250', category:'VAN', size:'E', },
    { make:'Dodge', model: 'B2500', category:'VAN', size:'E', },
    { make:'Dodge', model: 'Caliber', category:'SUV', size:'L', },
    { make:'Dodge', model: 'Caravan', category:'MINIVAN', size:'L', },
    { make:'Dodge', model: 'Challenger', category:'COUPE', size:'M', },
    { make:'Dodge', model: 'Charger', category:'SEDAN', size:'M', },
    { make:'Dodge', model: 'Dakota', category:'TRUCK', size:'L', },
    { make:'Dodge', model: 'Dart', category:'SEDAN', size:'S', },
    { make:'Dodge', model: 'Durango', category:'SUV', size:'L', },
    { make:'Dodge', model: 'Grand Caravan', category:'MINIVAN', size:'L', },
    { make:'Dodge', model: 'Intrepid', category:'SEDAN', size:'S', },
    { make:'Dodge', model: 'Journey', category:'SUV', size:'L', },
    { make:'Dodge', model: 'Magnum', category:'SEDAN', size:'S', },
    { make:'Dodge', model: 'Mini Ram Van', category:'MINIVAN', size:'L', },
    { make:'Dodge', model: 'Neon', category:'SEDAN', size:'S', },
    { make:'Dodge', model: 'Nitro', category:'SUV', size:'L', },
    { make:'Dodge', model: 'Ram 1500', category:'TRUCK', size:'L', },
    { make:'Dodge', model: 'Ram 2500', category:'TRUCK', size:'E', },
    { make:'Dodge', model: 'Ram 3500', category:'TRUCK', size:'E', },
    { make:'Dodge', model: 'Ram Promaster City', category:'MINIVAN', size:'E', },
    { make:'Dodge', model: 'Ram SRT-10', category:'TRUCK', size:'E', },
    { make:'Dodge', model: 'SRT-4', category:'SEDAN', size:'S', },
    { make:'Dodge', model: 'Stratus', category:'SEDAN', size:'S', },
    { make:'Dodge', model: 'Viper', category:'EXOTIC', size:'E', },

    { make:'Factory Five', model: '818', category:'EXOTIC', size:'E', },
    { make:'Factory Five', model: 'GTM', category:'EXOTIC', size:'E', },
    { make:'Factory Five', model: 'Hot Rod', category:'EXOTIC', size:'E', },
    { make:'Factory Five', model: 'MK2', category:'EXOTIC', size:'E', },
    { make:'Factory Five', model: 'MK3', category:'EXOTIC', size:'E', },
    { make:'Factory Five', model: 'MK4', category:'EXOTIC', size:'E', },
    { make:'Factory Five', model: 'Type 65', category:'EXOTIC', size:'E', },

    { make:'Ferrari', model: '308', category:'EXOTIC', size:'E', },
    { make:'Ferrari', model: '328', category:'EXOTIC', size:'E', },
    { make:'Ferrari', model: '348', category:'EXOTIC', size:'E', },
    { make:'Ferrari', model: '360', category:'EXOTIC', size:'E', },
    { make:'Ferrari', model: '360-Replica', category:'EXOTIC', size:'E', },
    { make:'Ferrari', model: '456 GT', category:'EXOTIC', size:'E', },
    { make:'Ferrari', model: '456M GT', category:'EXOTIC', size:'E', },
    { make:'Ferrari', model: '458 Italia', category:'EXOTIC', size:'E', },
    { make:'Ferrari', model: '488 Spider', category:'EXOTIC', size:'E', },
    { make:'Ferrari', model: '512M', category:'EXOTIC', size:'E', },
    { make:'Ferrari', model: '512TR', category:'EXOTIC', size:'E', },
    { make:'Ferrari', model: '550 Maranello', category:'EXOTIC', size:'E', },
    { make:'Ferrari', model: '575M Maranello', category:'EXOTIC', size:'E', },
    { make:'Ferrari', model: '599 GTB Fiorano', category:'EXOTIC', size:'E', },
    { make:'Ferrari', model: '599 GTO', category:'EXOTIC', size:'E', },
    { make:'Ferrari', model: '612 Scaglietti', category:'EXOTIC', size:'E', },
    { make:'Ferrari', model: '750 Monza', category:'EXOTIC', size:'E', },
    { make:'Ferrari', model: '812 Superfast', category:'EXOTIC', size:'E', },
    { make:'Ferrari', model: 'California', category:'EXOTIC', size:'E', },
    { make:'Ferrari', model: 'Enzo', category:'EXOTIC', size:'E', },
    { make:'Ferrari', model: 'F12 Berlinetta', category:'EXOTIC', size:'E', },
    { make:'Ferrari', model: 'F355', category:'EXOTIC', size:'E', },
    { make:'Ferrari', model: 'F355-Replica', category:'EXOTIC', size:'E', },
    { make:'Ferrari', model: 'F40', category:'EXOTIC', size:'E', },
    { make:'Ferrari', model: 'F50', category:'EXOTIC', size:'E', },
    { make:'Ferrari', model: 'F50-Replica', category:'EXOTIC', size:'E', },
    { make:'Ferrari', model: 'FF', category:'EXOTIC', size:'E', },
    { make:'Ferrari', model: 'FXX', category:'EXOTIC', size:'E', },
    { make:'Ferrari', model: 'GTC4 Luso', category:'EXOTIC', size:'E', },
    { make:'Ferrari', model: 'GTO', category:'EXOTIC', size:'E', },
    { make:'Ferrari', model: 'LaFerrari', category:'EXOTIC', size:'E', },
    { make:'Ferrari', model: 'Mondial', category:'EXOTIC', size:'E', },
    { make:'Ferrari', model: 'Testarossa', category:'EXOTIC', size:'E', },
    { make:'Ferrari', model: 'Testarossa-Replica', category:'EXOTIC', size:'E', },

    { make:'Fiat', model: '124 Spider', category:'COUPE', size:'M', },
    { make:'Fiat', model: '500', category:'COUPE', size:'S', },
    { make:'Fiat', model: '500L', category:'SEDAN', size:'S', },
    { make:'Fiat', model: '500X', category:'SEDAN', size:'S', },
    { make:'Fiat', model: 'Strada', category:'TRUCK', size:'L', },

    { make:'Fisker', model: 'Karma', category:'SEDAN', size:'L', },
    
  ]);
};