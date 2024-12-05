const blocs = {
  Header: [
    {
      name: "ICCID",
      octets: 2,
      description: "Identifiant unique ICCID",
      type: "Hexa",
      unite: "entier",
      conversion: "Non",
      min: 0,
      max: 65535,
      color: "#392061",
      examples: {
        javascript: `
          // Exemple pour déchiffrer ICCID en JavaScript
          let offset = 0;
          const iccid = buffer.readUInt16BE(offset);
          console.log("ICCID:", iccid);
        `,
        typescript: `
          // Exemple pour déchiffrer ICCID en TypeScript
          const buffer: Buffer = Buffer.from(data); // data = buffer de la trame
          const iccid: string = buffer.toString('hex', 0, 4); 
          console.log("ICCID:", iccid);
        `,
        python: `
          # Exemple pour déchiffrer ICCID en Python
          iccid = data[:4].hex()
          print("ICCID:", iccid)
        `
      }
    },
    {
      name: "Mode",
      octets: 1,
      description: "Mode d'envoie",
      type: "Booléen",
      unite: "Boolean",
      conversion: "0 LTE / 1 SAT",
      min: 0,
      max: 1,
      color: "#1A1B25",
      examples: {
        javascript: `
          // Exemple pour déchiffrer le mode en JavaScript
          let offset = 2;
          const transmissionMode = buffer[offset];
          console.log("mode:", transmissionMode);
        `,
        typescript: `
          // Exemple pour lire le numéro unique en TypeScript
          const buffer: Buffer = Buffer.from(data);
          const uniqueNumber: number = buffer.readUInt32BE(4); // Position 4
          console.log("Unique Number:", uniqueNumber);
        `,
        python: `
          # Exemple pour lire le numéro unique en Python
          unique_number = int.from_bytes(data[4:8], byteorder='big')
          print("Unique Number:", unique_number)
        `
      }
    },
    {
      name: "Unique number",
      octets: 2,
      description: "Numéro unique associé au message",
      type: "Hexa",
      unite: "entier",
      conversion: null,
      min: 0,
      max: 65535,
      color: "#B084CC",
      examples: {
        javascript: `
          // Exemple pour déchiffrer le Numéro unique en JavaScript
          let offset = 3;
          const UniqueNumber = buffer[offset];
          console.log("UniqueNumber:", UniqueNumber);
        `,
        typescript: `
          // Exemple pour lire le numéro unique en TypeScript
          const buffer: Buffer = Buffer.from(data);
          const uniqueNumber: number = buffer.readUInt32BE(4); // Position 4
          console.log("Unique Number:", uniqueNumber);
        `,
        python: `
          # Exemple pour lire le numéro unique en Python
          unique_number = int.from_bytes(data[4:8], byteorder='big')
          print("Unique Number:", unique_number)
        `
      }
    },
    {
      name: "Batterie Level",
      octets: 1,
      description: "Niveau de batterie",
      type: "Hexa",
      unite: "%",
      conversion: null,
      min: 0,
      max: 100,
      color: "#665687",
      examples: {
        javascript: `
          // Exemple pour déchiffrer le niveau de batterie en JavaScript
          let offset = 5;
          const Batterylevel = buffer[offset];
          console.log("Batterylevel:", Batterylevel);
        `,
        typescript: `
          // Exemple pour lire le niveau de batterie en TypeScript
          const buffer: Buffer = Buffer.from(data);
          const batteryLevel: number = buffer.readUInt16BE(8); // Position 8
          console.log("Battery Level:", batteryLevel + "%");
        `,
        python: `
          # Exemple pour lire le niveau de batterie en Python
          battery_level = int.from_bytes(data[8:10], byteorder='big')
          print("Battery Level:", battery_level, "%")
        `
      }
    },
    {
      name: "Temperature",
      octets: 1,
      description: "Temperature",
      type: "Hexa",
      unite: "°C",
      conversion: "/10",
      min: -128,
      max: 127,
      color: "#A799B7",
      examples: {
        javascript: `
          // Exemple pour déchiffrer le niveau de batterie en JavaScript
          let offset = 5;
          const Batterylevel = buffer[offset];
          console.log("Batterylevel:", Batterylevel);
        `,
        typescript: `
          // Exemple pour lire le niveau de batterie en TypeScript
          const buffer: Buffer = Buffer.from(data);
          const batteryLevel: number = buffer.readUInt16BE(8); // Position 8
          console.log("Battery Level:", batteryLevel + "%");
        `,
        python: `
          # Exemple pour lire le niveau de batterie en Python
          battery_level = int.from_bytes(data[8:10], byteorder='big')
          print("Battery Level:", battery_level, "%")
        `
      }
    },
    {
      name: "Flags",
      octets: 1,
      description: "Flags",
      type: "Hexa",
      unite: "masque binaire",
      conversion: null,
      min: "00000000",
      max: 11111111,
      color: "#19647E",
      examples: {
        javascript: `
          const FLAGS = {
              LATITUDE: 0x01,
              LONGITUDE: 0x02,
              TIMESTAMP: 0x04,
              ALTITUDE: 0x08,
              SPEED: 0x10,
            };
          // Exemple pour déchiffrer lees flags en JavaScript
          let offset = 5;
          const flags = buffer[offset];
          console.log("flags:", flags);
        `,
        typescript: `
          // Exemple pour lire le niveau de batterie en TypeScript
          const buffer: Buffer = Buffer.from(data);
          const batteryLevel: number = buffer.readUInt16BE(8); // Position 8
          console.log("Battery Level:", batteryLevel + "%");
        `,
        python: `
          # Exemple pour lire le niveau de batterie en Python
          battery_level = int.from_bytes(data[8:10], byteorder='big')
          print("Battery Level:", battery_level, "%")
        `
      }
    }

  ],
  Payload: [
    {
      name: "Mode",
      octets: 2,
      description: "Mode de fonctionnement",
      type: "Hexa",
      unite: null,
      conversion: "Oui",
      min: 0,
      max: 15,
      color: "#8BC34A",
      examples: {
        javascript: `
          // Exemple pour lire le mode en JavaScript
          const buffer = Buffer.from(data);
          const mode = buffer.readUInt16BE(10); // Position 10
          console.log("Mode:", mode);
        `,
        typescript: `
          // Exemple pour lire le mode en TypeScript
          const buffer: Buffer = Buffer.from(data);
          const mode: number = buffer.readUInt16BE(10); // Position 10
          console.log("Mode:", mode);
        `,
        python: `
          # Exemple pour lire le mode en Python
          mode = int.from_bytes(data[10:12], byteorder='big')
          print("Mode:", mode)
        `
      }
    }
  ]
};

module.exports = blocs;
