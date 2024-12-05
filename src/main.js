import './index.css';
import "./style.css"; 

      const blocs = {"Header":[{"name":"ICCID","octets":2,"description":"Identifiant unique ICCID","type":"Hexa","unite":"entier","conversion":"Non","min":0,"max":65535,"color":"#392061","examples":{"javascript":"\n          // Exemple pour déchiffrer ICCID en JavaScript\n          let offset = 0;\n          const iccid = buffer.readUInt16BE(offset);\n          console.log(\"ICCID:\", iccid);\n        ","typescript":"\n          // Exemple pour déchiffrer ICCID en TypeScript\n          const buffer: Buffer = Buffer.from(data); // data = buffer de la trame\n          const iccid: string = buffer.toString('hex', 0, 4); \n          console.log(\"ICCID:\", iccid);\n        ","python":"\n          # Exemple pour déchiffrer ICCID en Python\n          iccid = data[:4].hex()\n          print(\"ICCID:\", iccid)\n        "}},{"name":"Mode","octets":1,"description":"Mode d'envoie","type":"Booléen","unite":"Boolean","conversion":"0 LTE / 1 SAT","min":0,"max":1,"color":"#1A1B25","examples":{"javascript":"\n          // Exemple pour déchiffrer le mode en JavaScript\n          let offset = 2;\n          const transmissionMode = buffer[offset];\n          console.log(\"mode:\", transmissionMode);\n        ","typescript":"\n          // Exemple pour lire le numéro unique en TypeScript\n          const buffer: Buffer = Buffer.from(data);\n          const uniqueNumber: number = buffer.readUInt32BE(4); // Position 4\n          console.log(\"Unique Number:\", uniqueNumber);\n        ","python":"\n          # Exemple pour lire le numéro unique en Python\n          unique_number = int.from_bytes(data[4:8], byteorder='big')\n          print(\"Unique Number:\", unique_number)\n        "}},{"name":"Unique number","octets":2,"description":"Numéro unique associé au message","type":"Hexa","unite":"entier","conversion":null,"min":0,"max":65535,"color":"#B084CC","examples":{"javascript":"\n          // Exemple pour déchiffrer le Numéro unique en JavaScript\n          let offset = 3;\n          const UniqueNumber = buffer[offset];\n          console.log(\"UniqueNumber:\", UniqueNumber);\n        ","typescript":"\n          // Exemple pour lire le numéro unique en TypeScript\n          const buffer: Buffer = Buffer.from(data);\n          const uniqueNumber: number = buffer.readUInt32BE(4); // Position 4\n          console.log(\"Unique Number:\", uniqueNumber);\n        ","python":"\n          # Exemple pour lire le numéro unique en Python\n          unique_number = int.from_bytes(data[4:8], byteorder='big')\n          print(\"Unique Number:\", unique_number)\n        "}},{"name":"Batterie Level","octets":1,"description":"Niveau de batterie","type":"Hexa","unite":"%","conversion":null,"min":0,"max":100,"color":"#665687","examples":{"javascript":"\n          // Exemple pour déchiffrer le niveau de batterie en JavaScript\n          let offset = 5;\n          const Batterylevel = buffer[offset];\n          console.log(\"Batterylevel:\", Batterylevel);\n        ","typescript":"\n          // Exemple pour lire le niveau de batterie en TypeScript\n          const buffer: Buffer = Buffer.from(data);\n          const batteryLevel: number = buffer.readUInt16BE(8); // Position 8\n          console.log(\"Battery Level:\", batteryLevel + \"%\");\n        ","python":"\n          # Exemple pour lire le niveau de batterie en Python\n          battery_level = int.from_bytes(data[8:10], byteorder='big')\n          print(\"Battery Level:\", battery_level, \"%\")\n        "}},{"name":"Temperature","octets":1,"description":"Temperature","type":"Hexa","unite":"°C","conversion":"/10","min":-128,"max":127,"color":"#A799B7","examples":{"javascript":"\n          // Exemple pour déchiffrer le niveau de batterie en JavaScript\n          let offset = 5;\n          const Batterylevel = buffer[offset];\n          console.log(\"Batterylevel:\", Batterylevel);\n        ","typescript":"\n          // Exemple pour lire le niveau de batterie en TypeScript\n          const buffer: Buffer = Buffer.from(data);\n          const batteryLevel: number = buffer.readUInt16BE(8); // Position 8\n          console.log(\"Battery Level:\", batteryLevel + \"%\");\n        ","python":"\n          # Exemple pour lire le niveau de batterie en Python\n          battery_level = int.from_bytes(data[8:10], byteorder='big')\n          print(\"Battery Level:\", battery_level, \"%\")\n        "}},{"name":"Flags","octets":1,"description":"Flags","type":"Hexa","unite":"masque binaire","conversion":null,"min":"00000000","max":11111111,"color":"#19647E","examples":{"javascript":"\n          const FLAGS = {\n              LATITUDE: 0x01,\n              LONGITUDE: 0x02,\n              TIMESTAMP: 0x04,\n              ALTITUDE: 0x08,\n              SPEED: 0x10,\n            };\n          // Exemple pour déchiffrer lees flags en JavaScript\n          let offset = 5;\n          const flags = buffer[offset];\n          console.log(\"flags:\", flags);\n        ","typescript":"\n          // Exemple pour lire le niveau de batterie en TypeScript\n          const buffer: Buffer = Buffer.from(data);\n          const batteryLevel: number = buffer.readUInt16BE(8); // Position 8\n          console.log(\"Battery Level:\", batteryLevel + \"%\");\n        ","python":"\n          # Exemple pour lire le niveau de batterie en Python\n          battery_level = int.from_bytes(data[8:10], byteorder='big')\n          print(\"Battery Level:\", battery_level, \"%\")\n        "}}],"Payload":[{"name":"Mode","octets":2,"description":"Mode de fonctionnement","type":"Hexa","unite":null,"conversion":"Oui","min":0,"max":15,"color":"#8BC34A","examples":{"javascript":"\n          // Exemple pour lire le mode en JavaScript\n          const buffer = Buffer.from(data);\n          const mode = buffer.readUInt16BE(10); // Position 10\n          console.log(\"Mode:\", mode);\n        ","typescript":"\n          // Exemple pour lire le mode en TypeScript\n          const buffer: Buffer = Buffer.from(data);\n          const mode: number = buffer.readUInt16BE(10); // Position 10\n          console.log(\"Mode:\", mode);\n        ","python":"\n          # Exemple pour lire le mode en Python\n          mode = int.from_bytes(data[10:12], byteorder='big')\n          print(\"Mode:\", mode)\n        "}}]};
      const codeContainer = document.getElementById('code-container');
      const codeBlock = document.getElementById('code-block');
      const languageSelect = document.getElementById('language-select');
      let currentBloc = null;
  
      // document.querySelectorAll('.view-button').forEach(button => {
      //   button.addEventListener('click', () => {
      //     const target = button.getAttribute('data-target');
      //     document.querySelectorAll('.master-container').forEach(container => {
      //       container.classList.remove('active');
      //     });
      //     document.getElementById('master-' + target).classList.add('active');
  
      //     document.querySelectorAll('.view-button').forEach(btn => btn.classList.remove('active'));
      //     button.classList.add('active');
      //   });
      // });
  
      document.querySelectorAll('[data-block]').forEach(cell => {
        cell.addEventListener('click', () => {
          const blockClasses = Array.from(cell.classList).filter(cls => cls.startsWith('block-'));
          if (blockClasses.length > 0) {
            const [masterBloc, blocIndex] = blockClasses[0].replace('block-', '').split('-');
            currentBloc = blocs[masterBloc][blocIndex];
            updateCodeBlock();
            codeContainer.style.display = 'block';
          }
        });
      });
  
      function updateCodeBlock() {
        if (!currentBloc) return;
        const selectedLanguage = languageSelect.value;
        codeBlock.textContent = currentBloc.examples[selectedLanguage].trim();
        codeBlock.className = 'language-' + selectedLanguage;
        Prism.highlightElement(codeBlock);
      }
  
      languageSelect.addEventListener('change', updateCodeBlock);
  
      const firstButton = document.querySelector('.view-button[data-target="Header"]');
      if (firstButton) firstButton.click();