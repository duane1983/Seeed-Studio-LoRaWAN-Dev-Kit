function Decoder(bytes, port) {
 
    var decoded = {};
    if (port == 8) {
      decoded.soil = bytes[0]<<8 | bytes[1];
    }
   
    return decoded;
  }