'use strict';
function decode(str){
  //decode: converts ASCII-Hex to string
  var strInHex = [];
  var strIndex = 0;
  var strInHexIndex = 0;
  var hexValue = 0;
  var hexString = '';
  var strInASCII = [];
  var returnString = '';

  do {
    hexString = '';
    do {
      if (str[strIndex] !== ',') {
        hexString = hexString + str[strIndex];
      }
      ++strIndex;
    } while((str[strIndex] !== ',') && (strIndex < str.length));
    hexValue = hexString;
    strInHex[strInHexIndex] = hexValue;
    ++strInHexIndex;
    ++strIndex;

  }while(strIndex < str.length);

  for (let i = 0; i < strInHex.length; i++ ) {
    strInASCII[i] = parseInt(strInHex[i], 16);
  }

  for (let j = 0; j < strInASCII.length; j++ ) {
    returnString = returnString + String.fromCharCode(strInASCII[j]);
  }
  return(returnString);

}

function encode(str){
  //encode: converts string to ASCII-Hex
  var strInASCII = [];
  var strInHex = [];
  var outputString = '';

  for (let i = 0; i < str.length; i++ ) {
    strInASCII[i] = str.charCodeAt(i);

  }

  for (let j = 0; j < strInASCII.length; j++ ) {
    strInHex[j] = strInASCII[j].toString(16);
  }

  for (let k = 0; k < strInHex.length; k++ ) {
    outputString = outputString + strInHex[k];
    if ((k !== (strInHex.length - 1))) {
      outputString = outputString + ',';
    }
  }
  return(outputString);


}

function encodeArc(str) {
  var returnString = '';
  var encodedStr = encode(str);

  for (let i = 0; i < encodedStr.length; i++ ) {

    switch (encodedStr[i]){
      case '0':
        returnString += '0,';
        break;
      case '1':
        returnString += '22.5,';
        break;
      case '2':
        returnString += '45,';
        break;
      case '3':
        returnString += '67.5,';
        break;
      case '4':
        returnString += '90,';
        break;
      case '5':
        returnString += '112.5,';
        break;
      case '6':
        returnString += '135,';
        break;
      case '7':
        returnString += '157.5,';
        break;
      case '8':
        returnString += '180,';
        break;
      case '9':
        returnString += '202.5,';
        break;
      case 'a':
        returnString += '225,';
        break;
      case 'b':
        returnString += '247.5,';
        break;
      case 'c':
        returnString += '270,';
        break;
      case 'd':
        returnString += '292.5,';
        break;
      case 'e':
        returnString += '315,';
        break;
      case 'f':
        returnString += '337.5,';
        break;

      default:
        break;
    }

  }
  returnString = returnString.slice(0, (returnString.length - 1));
  return(returnString);
}

module.exports = {decode,encode,encodeArc}
